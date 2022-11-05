import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../components";
import { IconSubscript } from "../../icons";
import { useActive } from "../../hooks/use-active";
import { Subscript as SubscriptExtension } from "./index";

export const SubscriptStaticMenu: React.FC<{ editor: Editor }> = ({
  editor
}) => {
  const isSubscriptActive = useActive(editor, SubscriptExtension.name);

  const toggleSubscript = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleSubscript()
        .run(),
    [editor]
  );

  return (
    <Tooltip title="下标" editor={editor}>
      <Button
        active={isSubscriptActive}
        icon={<IconSubscript />}
        onClick={toggleSubscript}
      />
    </Tooltip>
  );
};
