import { EditorView, Transaction, ResolvedPos, PMNode } from "../../prosemirror";
export declare const removePossibleTable: (view: EditorView, event: DragEvent) => Transaction | null;
export declare type ActiveNode = Readonly<{
    $pos: ResolvedPos;
    node: PMNode;
    el: HTMLElement;
    offset: number;
}>;
export declare const selectRootNodeByDom: (dom: Element, view: EditorView) => ActiveNode | null;
