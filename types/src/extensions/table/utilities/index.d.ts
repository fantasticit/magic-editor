import { Node, ResolvedPos } from "prosemirror-model";
import { Selection, Transaction } from "prosemirror-state";
import { CellSelection } from "@_ueberdosis/prosemirror-tables";
import { EditorView } from "prosemirror-view";
export declare const isRectSelected: (rect: any) => (selection: CellSelection) => boolean;
export declare const findTable: (selection: Selection) => {
    pos: number;
    start: number;
    depth: number;
    node: Node;
} | undefined;
export declare const isCellSelection: (selection: any) => boolean;
export declare const isColumnSelected: (columnIndex: number) => (selection: any) => boolean;
export declare const isRowSelected: (rowIndex: number) => (selection: any) => boolean;
export declare const isTableSelected: (selection: any) => boolean;
export declare const getCellsInColumn: (columnIndex: number | number[]) => (selection: Selection) => {
    pos: number;
    start: number;
    node: Node | null | undefined;
}[] | undefined;
export declare const getCellsInRow: (rowIndex: number | number[]) => (selection: Selection) => {
    pos: number;
    start: number;
    node: Node | null | undefined;
}[] | undefined;
export declare const getCellsInTable: (selection: Selection) => {
    pos: number;
    start: number;
    node: Node | null;
}[] | undefined;
export declare const findParentNodeClosestToPos: ($pos: ResolvedPos, predicate: (node: Node) => boolean) => {
    pos: number;
    start: number;
    depth: number;
    node: Node;
} | undefined;
export declare const findCellClosestToPos: ($pos: ResolvedPos) => {
    pos: number;
    start: number;
    depth: number;
    node: Node;
} | undefined;
export declare const selectColumn: (index: number) => (tr: Transaction) => Transaction;
export declare const selectRow: (index: number) => (tr: Transaction) => Transaction;
export declare const selectTable: (tr: Transaction) => Transaction;
export declare const removePossibleTable: (view: EditorView, event: DragEvent) => Transaction | null;
export default function isTableNode(node: Node): boolean;
