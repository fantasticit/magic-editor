import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../../components";
import { IconLink } from "../../../icons";
import { useActive } from "../../../hooks/use-active";
import { Link as LinkExtension } from "../link";
import { showLinkEditor } from "./edit";
import i18n from "../../../i18n";

export const LinkStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isLinkActive = useActive(editor, LinkExtension.name);

  const toggleLink = useCallback(() => {
    showLinkEditor(editor);
  }, [editor]);

  return (
    <Tooltip title={i18n('link', 'title')} editor={editor}>
      <Button icon={<IconLink />} onClick={toggleLink} active={isLinkActive} />
    </Tooltip>
  );
};
