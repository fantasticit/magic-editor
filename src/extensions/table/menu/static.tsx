import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Button, Tooltip } from "../../../components";
import { IconTable } from "../../../icons";
import { useActive } from "../../../hooks/use-active";
import { Table } from "../index";
import i18n from "../../../i18n";

export const TableStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isTableActibe = useActive(editor, Table.name);

  const toggleSuperscript = useCallback(
    () =>
      editor
        .chain()
        .insertTable({ rows: 3, cols: 4, withHeaderRow: true })
        .focus()
        .run(),
    [editor]
  );

  return (
    <Tooltip title={i18n('table', 'insert')} editor={editor}>
      <Button
        active={isTableActibe}
        icon={<IconTable />}
        onClick={toggleSuperscript}
      />
    </Tooltip>
  );
};

export * from "./bubble";
