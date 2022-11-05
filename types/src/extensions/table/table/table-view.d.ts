import { Node as ProseMirrorNode } from "prosemirror-model";
import { NodeView } from "prosemirror-view";
export declare function updateColumns(node: ProseMirrorNode, colgroup: Element, table: Element, cellMinWidth: number, overrideCol?: number, overrideValue?: any): void;
export declare class TableView implements NodeView {
    node: ProseMirrorNode;
    cellMinWidth: number;
    dom: Element;
    scrollDom: Element;
    table: Element;
    colgroup: Element;
    contentDOM: Element;
    constructor(node: ProseMirrorNode, cellMinWidth: number);
    update(node: ProseMirrorNode): boolean;
    ignoreMutation(mutation: MutationRecord | {
        type: "selection";
        target: Element;
    }): boolean;
}
