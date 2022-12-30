import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconSuperscript } from "../../icons";
import { useActive } from "../../hooks/use-active";
import { Superscript as SuperscriptExtension } from "./index";
import i18n from "../../i18n";

export const SuperscriptStaticMenu: React.FC<{ editor: Editor }> = ({
  editor
}) => {
  const isSuperscriptActive = useActive(editor, SuperscriptExtension.name);

  const toggleSuperscript = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleSuperscript()
        .run(),
    [editor]
  );

  return (
    <Tooltip title={i18n('style', 'superscript')} editor={editor}>
      <Button
        active={isSuperscriptActive}
        icon={<IconSuperscript />}
        onClick={toggleSuperscript}
      />
    </Tooltip>
  );
};
