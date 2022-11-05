import { AnyExtension } from "@tiptap/core";
export interface EditorKit {
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
}
export declare const resolveEditorKit: (props: EditorKit) => AnyExtension[];
