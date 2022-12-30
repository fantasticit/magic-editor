import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconHorizontalRule } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { HorizontalRule as HorizontalRuleExtension } from "./horizontal-rule";
import i18n from "../../i18n";

export const HorizontalRuleStaticMenu: React.FC<{ editor: Editor }> = ({
  editor
}) => {
  const isHorizontalRuleActive = useActive(
    editor,
    HorizontalRuleExtension.name
  );

  const setHorizontalRule = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .setHorizontalRule()
        .run(),
    [editor]
  );

  return (
    <Tooltip title={i18n('horizontalLine')} editor={editor}>
      <Button
        active={isHorizontalRuleActive}
        icon={<IconHorizontalRule />}
        onClick={setHorizontalRule}
      />
    </Tooltip>
  );
};
