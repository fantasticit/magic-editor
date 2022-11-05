import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Tooltip, Button } from "../../components";
import { IconCode } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { Code as CodeExtension } from "./code";

export const CodeStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isCodeActive = useActive(editor, CodeExtension.name);

  const toggleCode = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleCode()
        .run(),
    [editor]
  );

  return (
    <Tooltip title="行内代码" editor={editor}>
      <Button icon={<IconCode />} onClick={toggleCode} active={isCodeActive} />
    </Tooltip>
  );
};
