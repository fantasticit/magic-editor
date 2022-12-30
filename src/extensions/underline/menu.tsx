import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconUnderline } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { Underline as UnderlineExtension } from "./underline";
import i18n from "../../i18n";

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
    <Tooltip title={i18n('style', 'underline')} editor={editor}>
      <Button
        icon={<IconUnderline />}
        onClick={toggleUnderline}
        active={isUnderlineActive}
      />
    </Tooltip>
  );
};
