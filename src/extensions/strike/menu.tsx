import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconStrike } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { Strike as StrikeExtension } from "./strike";
import i18n from "../../i18n";

export const StrikeStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isStrikeActive = useActive(editor, StrikeExtension.name);

  const toggleStrike = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleStrike()
        .run(),
    [editor]
  );

  return (
    <Tooltip title={i18n('style', 'strike')} editor={editor}>
      <Button
        icon={<IconStrike />}
        onClick={toggleStrike}
        active={isStrikeActive}
      />
    </Tooltip>
  );
};
