import { AnyExtension } from "@tiptap/core";

import { Table } from "./table";
import { TableCell } from "./table-cell";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";

export const TableExtensions: AnyExtension[] = [
  Table.configure({
    resizable: true,
    cellMinWidth: 50
  }),
  TableCell,
  TableHeader,
  TableRow
];
