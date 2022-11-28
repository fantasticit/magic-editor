import React, { useCallback, useEffect, useState } from "react";
import { Editor } from "@tiptap/core";
import styled from "styled-components";

import { Modal, Loading, Button, Space } from "../../../components";
import { IconMind } from "../../../icons";

import { StyledMindEditorContainer } from "./style";
import { load, renderMind } from "./kityminder";
import { Toolbar } from "./toolbar";
import { findNodeByBlockId } from "../../../utilities";
import { Mind } from "../mind";

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

const StyledToolbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 6px 24px;
  overflow-x: auto;
  color: #fff;
  background-color: var(--semi-color-nav-bg);
  border-bottom: 1px solid var(--semi-color-border);
  align-items: center;
`;

type IProps = {
  editor: Editor;
  data: string;
  blockId: string;
  onClose: () => void;
};

export const MindSettingModal: React.FC<IProps> = ({
  editor,
  data: outInData,
  blockId,
  onClose
}) => {
  const [mind, setMind] = useState(null);
  const [initialData, setInitialData] = useState({});
  const [visible, toggleVisible] = useState(true);
  const [loading, toggleLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const renderMindEditor = useCallback(
    div => {
      if (!div) return;

      const mindInstance = renderMind({
        container: div,
        data: initialData,
        isEditable: true
      });

      setMind(mindInstance);
    },
    [initialData]
  );

  useEffect(() => {
    load()
      .catch(setError)
      .finally(() => toggleLoading(false));
  }, [toggleLoading]);

  const save = useCallback(async () => {
    if (!mind) {
      toggleVisible(false);
      onClose();
      return;
    }

    // @ts-ignore
    return mind.exportData("svg").then(svg => {
      // @ts-ignore
      const data = mind.exportJson();

      let done = false;

      if (blockId) {
        const maybeNode = findNodeByBlockId(editor.state, Mind.name, blockId);

        if (maybeNode) {
          editor.commands.command(({ tr }) => {
            tr.setNodeMarkup(maybeNode.pos, undefined, {
              ...maybeNode.node.attrs,
              data: JSON.stringify(data),
              svg
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
          .insertMind({ data: JSON.stringify(data), svg })
          .run();
      }
    });
  }, [editor, toggleVisible, mind, blockId]);

  const saveAndExit = useCallback(() => {
    save().then(() => {
      toggleVisible(false);
      onClose();
    });
  }, [save]);

  useEffect(() => {
    // @ts-ignore
    outInData && setInitialData(outInData);
  }, [outInData]);

  return (
    <Modal
      centered
      title="思维导图"
      fullScreen
      visible={visible}
      okText="保存"
      cancelText="退出"
      motion={false}
      header={
        <StyledHeader>
          <Space>
            <StyledIconContainer>
              <IconMind />
            </StyledIconContainer>
            <strong>思维导图</strong>
          </Space>
          <Space>
            <Button type="primary" onClick={save}>
              保存
            </Button>
            <Button onClick={saveAndExit}>保存并退出</Button>
          </Space>
        </StyledHeader>
      }
      footer={null}>
      <StyledMindEditorContainer>
        {loading && <Loading></Loading>}
        {error && <span>{(error && error.message) || "未知错误"}</span>}

        <StyledToolbarContainer>
          <Toolbar editor={editor} mind={mind} />
        </StyledToolbarContainer>

        {!loading && !error ? (
          <div
            style={{ height: "100%", maxHeight: "100%", overflow: "hidden" }}
            ref={renderMindEditor}></div>
        ) : null}
      </StyledMindEditorContainer>
    </Modal>
  );
};
