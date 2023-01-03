import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Input } from "./";
import { getEditorProvider } from "../editor/provider";
import { fileOpen } from "browser-fs-access";
import i18n from "../i18n";

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
      <Input placeholder={i18n('image', 'set')} onChange={onOK} />
      <Button type="primary" onClick={getFile} style={{ marginTop: 12 }}>
        {i18n('image', 'upload')}
      </Button>
    </div>
  );
};
