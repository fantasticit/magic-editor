import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconBold } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { Bold as BoldExtension } from "./bold";
import i18n from "../../i18n";

export const BoldStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isBoldActive = useActive(editor, BoldExtension.name);

  const toggleBold = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleBold()
        .run(),
    [editor]
  );

  return (
    <Tooltip title={i18n('style', 'bold')} editor={editor}>
      <Button icon={<IconBold />} onClick={toggleBold} active={isBoldActive} />
    </Tooltip>
  );
};
