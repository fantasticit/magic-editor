import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../../components";
import { IconFlow } from "../../../icons";
import { useActive } from "../../../hooks/use-active";
import { Flow as FlowExtension } from "../flow";

import { showFlowEditor } from "./edit";
import i18n from "../../../i18n";

export const FlowStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isActive = useActive(editor, FlowExtension.name);

  const showEditor = useCallback(() => {
    showFlowEditor(editor);
  }, [editor]);

  return (
    <Tooltip title={i18n('flow', 'title')} editor={editor}>
      <Button icon={<IconFlow />} onClick={showEditor} active={isActive} />
    </Tooltip>
  );
};
