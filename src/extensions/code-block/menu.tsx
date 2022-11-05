import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconCodeBlock } from "../../icons";
import { useActive } from "../../hooks/use-active";
import { CodeBlock as CodeBlockExtension } from "./code-block";

export const CodeBlockStaticMenu: React.FC<{ editor: Editor }> = ({
  editor
}) => {
  const isCodeBlockActive = useActive(editor, CodeBlockExtension.name);

  const toggleCodeBlock = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleCodeBlock()
        .run(),
    [editor]
  );

  return (
    <Tooltip title="代码块" editor={editor}>
      <Button
        icon={<IconCodeBlock />}
        onClick={toggleCodeBlock}
        active={isCodeBlockActive}
      />
    </Tooltip>
  );
};
