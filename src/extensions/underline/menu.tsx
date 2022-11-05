import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconUnderline } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { Underline as UnderlineExtension } from "./underline";

export const UnderlineStaticMenu: React.FC<{ editor: Editor }> = ({
  editor
}) => {
  const isUnderlineActive = useActive(editor, UnderlineExtension.name);

  const toggleUnderline = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleUnderline()
        .run(),
    [editor]
  );

  return (
    <Tooltip title="下划线" editor={editor}>
      <Button
        icon={<IconUnderline />}
        onClick={toggleUnderline}
        active={isUnderlineActive}
      />
    </Tooltip>
  );
};
