import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Tooltip } from "../../components/tooltip";
import { Button } from "../../components/button";
import { IconBlockquote } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { Blockquote as BlockquoteExtension } from "./blockquote";
import i18n from "../../i18n";

export const BlockquoteStaticMenu: React.FC<{ editor: Editor }> = ({
  editor
}) => {
  const isBlockquoteActive = useActive(editor, BlockquoteExtension.name);

  const toggleBlockquote = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleBlockquote()
        .run(),
    [editor]
  );

  return (
    <Tooltip title={i18n('blockquote')} editor={editor}>
      <Button
        active={isBlockquoteActive}
        icon={<IconBlockquote />}
        onClick={toggleBlockquote}
      />
    </Tooltip>
  );
};
