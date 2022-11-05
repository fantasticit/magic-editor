import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Input } from "./";
import { getEditorProvider } from "../editor/provider";
import { fileOpen } from "browser-fs-access";

interface Props {
  editor: Editor;
  mimeTypes: string[];
  onOK: (arg: string) => void;
}

export const Upload: React.FC<React.PropsWithChildren<Props>> = ({
  editor,
  mimeTypes,
  onOK
}) => {
  const getFile = useCallback(async () => {
    const blob = await fileOpen({
      mimeTypes
    });
    const editorProvider = getEditorProvider(editor);
    const url = await editorProvider.fileProvider.uploadFile(blob);
    onOK(url);
  }, [editor, mimeTypes, onOK]);

  return (
    <div>
      <Input placeholder={"请输入图片地址"} onChange={onOK} />
      <Button type="primary" onClick={getFile} style={{ marginTop: 12 }}>
        上传本地图片
      </Button>
    </div>
  );
};
