import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconHorizontalRule } from "../../icons";
import { useActive } from "../../hooks/use-active";

import { HorizontalRule as HorizontalRuleExtension } from "./horizontal-rule";

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
    <Tooltip title="分割线" editor={editor}>
      <Button
        active={isHorizontalRuleActive}
        icon={<IconHorizontalRule />}
        onClick={setHorizontalRule}
      />
    </Tooltip>
  );
};
