import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Tooltip, Button } from "../../../components";
import { IconColumns } from "../../../icons";
import { useActive } from "../../../hooks/use-active";

import { Columns as ColumnsExtension } from "../columns";
import i18n from "../../../i18n";

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
    <Tooltip title={i18n('table', 'divide')} editor={editor}>
      <Button
        icon={<IconColumns />}
        onClick={insertColumns}
        active={isColumnsActive}
      />
    </Tooltip>
  );
};
