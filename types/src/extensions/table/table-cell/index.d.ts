import { Node } from "@tiptap/core";
export interface TableCellOptions {
    HTMLAttributes: Record<string, any>;
}
export declare const TableCell: Node<TableCellOptions, {
    clearCallbacks: Array<() => void>;
}>;
