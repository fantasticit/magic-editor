import { Node } from "@tiptap/core";
export interface TableHeaderOptions {
    HTMLAttributes: Record<string, any>;
}
export declare const TableHeader: Node<TableHeaderOptions, {
    clearCallbacks: Array<() => void>;
}>;
