import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../../components";
import { IconVisitlink } from "../../../icons";
import { useActive } from "../../../hooks/use-active";
import { Iframe as IframeExtension } from "../iframe";

import { showURLEditor } from "./edit";
import i18n from "../../../i18n";

export const IframeStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isActive = useActive(editor, IframeExtension.name);

  const toggleLink = useCallback(() => {
    showURLEditor(editor);
  }, [editor]);

  return (
    <Tooltip title={i18n('iframe', 'display')} editor={editor}>
      <Button icon={<IconVisitlink />} onClick={toggleLink} active={isActive} />
    </Tooltip>
  );
};
