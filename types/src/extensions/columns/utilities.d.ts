import { EditorState } from "../../prosemirror";
export declare function createColumn(colType: any, index: any, colContent?: null): any;
export declare function getColumnsNodeTypes(schema: any): any;
export declare function createColumns(schema: any, colsCount: any, colContent?: null): any;
export declare function addOrDeleteCol({ state, dispatch, type }: {
    state: EditorState;
    dispatch: any;
    type: "addBefore" | "addAfter" | "delete";
}): boolean;
export declare function gotoCol({ state, dispatch, type }: {
    state: EditorState;
    dispatch: any;
    type: "before" | "after";
}): boolean;
