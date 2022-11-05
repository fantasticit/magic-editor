import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../../components";
import { IconExcalidraw } from "../../../icons";
import { useActive } from "../../../hooks/use-active";
import { Excalidraw as ExcalidrawExtension } from "../excalidraw";

import { showExcalidrawEditor } from "./edit";

export const ExcalidrawStaticMenu: React.FC<{ editor: Editor }> = ({
  editor
}) => {
  const isActive = useActive(editor, ExcalidrawExtension.name);

  const toggleLink = useCallback(() => {
    showExcalidrawEditor(editor);
  }, [editor]);

  return (
    <Tooltip title="绘图" editor={editor}>
      <Button
        icon={<IconExcalidraw />}
        onClick={toggleLink}
        active={isActive}
      />
    </Tooltip>
  );
};
