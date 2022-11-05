import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../../components";
import { IconMind } from "../../../icons";
import { useActive } from "../../../hooks/use-active";
import { Mind as MindExtension } from "../mind";

import { showMindEditor } from "./edit";

export const MindStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isActive = useActive(editor, MindExtension.name);

  const toggleLink = useCallback(() => {
    showMindEditor(editor);
  }, [editor]);

  return (
    <Tooltip title="思维导图" editor={editor}>
      <Button icon={<IconMind />} onClick={toggleLink} active={isActive} />
    </Tooltip>
  );
};
