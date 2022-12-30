import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconStatus } from "../../icons";
import { useActive } from "../../hooks/use-active";
import { getEditorProvider } from "../../editor/provider";

import { Status as StatusExtension } from "./status";
import i18n from "../../i18n";

export const StatusStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isStatusActive = useActive(editor, StatusExtension.name);

  const setStatus = useCallback(() => {
    const editorProvider = getEditorProvider(editor);
    const currentUser = editorProvider.userProvider.getCurrentUser();
    return editor
      .chain()
      .focus()
      .setStatus({
        createUserId: currentUser.id,
        showPickerOnCreate: true
      })
      .run();
  }, [editor]);

  return (
    <Tooltip title={i18n('status', 'title')} editor={editor}>
      <Button
        icon={<IconStatus />}
        onClick={setStatus}
        active={isStatusActive}
      />
    </Tooltip>
  );
};
