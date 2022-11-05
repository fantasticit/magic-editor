import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Tooltip, Button } from "../../../components";
import { IconColumns } from "../../../icons";
import { useActive } from "../../../hooks/use-active";

import { Columns as ColumnsExtension } from "../columns";

export const ColumnsStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isColumnsActive = useActive(editor, ColumnsExtension.name);

  const insertColumns = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .insertColumns()
        .run(),
    [editor]
  );

  return (
    <Tooltip title="分栏" editor={editor}>
      <Button
        icon={<IconColumns />}
        onClick={insertColumns}
        active={isColumnsActive}
      />
    </Tooltip>
  );
};
