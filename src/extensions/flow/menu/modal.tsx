import React, {useCallback, useEffect, useRef, useState} from "react";
import {Editor} from "@tiptap/core";
import styled from "styled-components";

import {Modal, Space, Button} from "../../../components";
import {IconMind} from "../../../icons";
import {findNodeByBlockId} from "../../../utilities";
import {Flow} from "../flow";
import i18n from "../../../i18n";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -24px;
  padding: 8px 12px;
`;

const StyledIconContainer = styled.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

const StyledRenderContainer = styled.div`
  height: 100%;
  margin: 0 -24px;
  border-top: 1px solid ${props => props.theme.borderColor};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

type IProps = {
  editor: Editor;
  data: string;
  blockId: string;
  onClose: () => void;
};

export const FlowSettingModal: React.FC<IProps> = ({
                                                     editor,
                                                     data: outInXml,
                                                     blockId,
                                                     onClose
                                                   }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const exitRef = useRef(false);
  const xmlRef = useRef("");
  const [visible, toggleVisible] = useState(true);

  const postMessage = useCallback(msg => {
    if (!iframeRef.current) return;
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify(msg), "*");
  }, []);

  const save = useCallback(() => {
    exitRef.current = false;
    postMessage({
      action: "export",
      format: "svg",
      xml: xmlRef.current,
      spinKey: "export"
    });
  }, []);

  const saveAndExit = useCallback(() => {
    exitRef.current = true;
    postMessage({
      action: "export",
      format: "svg",
      xml: xmlRef.current,
      spinKey: "export"
    });
  }, []);

  useEffect(() => {
    const initializeEditor = () => {
      postMessage({
        action: "load",
        autosave: 1,
        modified: "unsavedChanges",
        xml: outInXml
      });
    };

    const handleMessage = msg => {
      const data = JSON.parse(msg.data);

      if (data.event == "init") {
        initializeEditor();
      } else if (data.event == "autosave") {
        xmlRef.current = data.xml;
      } else if (data.event == "export") {
        let done = false;

        if (blockId) {
          const maybeNode = findNodeByBlockId(editor.state, Flow.name, blockId);

          if (maybeNode) {
            editor.commands.command(({tr}) => {
              tr.setNodeMarkup(maybeNode.pos, undefined, {
                ...maybeNode.node.attrs,
                svg: data.data,
                xml: xmlRef.current
              });
              return true;
            });
            done = true;
          }
        }

        if (!done) {
          editor
            .chain()
            .focus()
            .insertFlow({svg: data.data, xml: xmlRef.current})
            .run();
        }

        if (exitRef.current) {
          toggleVisible(false);
          onClose();
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [outInXml, blockId]);

  return (
    <Modal
      centered
      title="流程图"
      fullScreen
      visible={visible}
      okText="保存"
      cancelText="退出"
      motion={false}
      header={
        <StyledHeader>
          <Space>
            <StyledIconContainer>
              <IconMind/>
            </StyledIconContainer>
            <strong>{i18n('flow', 'title')}</strong>
          </Space>

          <Space>
            <Button type="primary" onClick={save}>
              {i18n('save')}
            </Button>
            <Button onClick={saveAndExit}>{i18n('saveAndExit')}</Button>
          </Space>
        </StyledHeader>
      }
      footer={null}>
      <StyledRenderContainer>
        <iframe
          ref={iframeRef}
          src="https://embed.diagrams.net/?proto=json&spin=1&ui=atalas&libraries=1&noSaveBtn=1&saveAndExit=0&noExitBtn=1"></iframe>
      </StyledRenderContainer>
    </Modal>
  );
};
