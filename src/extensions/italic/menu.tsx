import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconItalic } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { Italic as ItalicExtension } from "./italic";

export const ItalicStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isItalicActive = useActive(editor, ItalicExtension.name);

  const toggleItalic = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleItalic()
        .run(),
    [editor]
  );

  return (
    <Tooltip title="斜体" editor={editor}>
      <Button
        icon={<IconItalic />}
        onClick={toggleItalic}
        active={isItalicActive}
      />
    </Tooltip>
  );
};
