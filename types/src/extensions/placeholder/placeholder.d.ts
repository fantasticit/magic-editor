import { Editor, Extension } from "@tiptap/core";
import { PMNode } from "../../prosemirror";
export interface PlaceholderOptions {
    emptyEditorClass: string;
    emptyNodeClass: string;
    placeholder: ((PlaceholderProps: {
        editor: Editor;
        node: PMNode;
        pos: number;
        hasAnchor: boolean;
    }) => string) | string;
    showOnlyWhenEditable: boolean;
    showOnlyCurrent: boolean;
    includeChildren: boolean;
}
export declare const Placeholder: Extension<PlaceholderOptions, any>;
