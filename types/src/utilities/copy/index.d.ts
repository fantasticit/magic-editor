import { Editor } from "@tiptap/core";
export declare function copy(text: string | {
    text: string;
    format: string;
}[]): any;
export declare const copyNode: (editor: Editor, extensionName: string) => void;
export declare const deleteNode: (editor: Editor, extensionName: string) => boolean;
