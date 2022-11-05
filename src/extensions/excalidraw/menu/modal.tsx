import React, { useCallback, useEffect, useState } from "react";
import { Editor } from "@tiptap/core";
import styled from "styled-components";

import { Modal, Loading, Button, Space } from "../../../components";
import { IconExcalidraw } from "../../../icons";

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
`;

type IProps = {
  editor: Editor;
  data: {
    elements: unknown[];
    appState: { isLoading: false };
    files: null;
  } | null;
  onClose: () => void;
};

export const ExcalidrawSettingModal: React.FC<IProps> = ({
  editor,
  data: outInData,
  onClose
}) => {
  const [Excalidraw, setExcalidraw] = useState(null);
  const [data, setData] = useState({});
  const [initialData, setInitialData] = useState({
    elements: [],
    appState: { isLoading: false },
    files: null
  });
  const [visible, toggleVisible] = useState(true);
  const [loading, toggleLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const renderEditor = useCallback(
    div => {
      if (!div) return;

      import("@excalidraw/excalidraw")
        .then(res => {
          // @ts-ignore
          setExcalidraw(res.Excalidraw);
        })
        .catch(setError)
        .finally(() => toggleLoading(false));
    },
    [toggleLoading]
  );

  const renderExcalidraw = useCallback(app => {
    setTimeout(() => {
      app.refresh();
    });
  }, []);

  const onChange = useCallback((elements, appState, files) => {
    // excalidraw 导出的是 {}，实际上应该是 []
    // appState.collaborators = [];
    setData({
      elements,
      appState: { isLoading: false },
      files
    });
  }, []);

  const save = useCallback(() => {
    if (!Excalidraw) {
      toggleVisible(false);
      onClose();
      return;
    }

    editor
      .chain()
      .focus()
      .setExcalidraw({ data: JSON.stringify(data) })
      .run();
  }, [Excalidraw, editor, data, toggleVisible, onClose]);

  const saveAndExit = useCallback(() => {
    save();
    toggleVisible(false);
    onClose();
  }, [save]);

  useEffect(() => {
    // @ts-ignore
    outInData && setInitialData(outInData);
  }, [outInData]);

  return (
    <Modal
      centered
      title="绘图"
      fullScreen
      visible={visible}
      okText="保存"
      cancelText="退出"
      motion={false}
      header={
        <StyledHeader>
          <Space>
            <StyledIconContainer>
              <IconExcalidraw />
            </StyledIconContainer>
            <strong>绘图</strong>
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
      <StyledRenderContainer>
        {loading && <Loading></Loading>}
        {error && <span>{(error && error.message) || "未知错误"}</span>}
        <div style={{ width: "100%", height: "100%" }} ref={renderEditor}>
          {!loading && !error && Excalidraw ? (
            // @ts-ignore
            <Excalidraw
              ref={renderExcalidraw}
              onChange={onChange}
              langCode="zh-CN"
              initialData={initialData}
            />
          ) : null}
        </div>
      </StyledRenderContainer>
    </Modal>
  );
};
