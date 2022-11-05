import { Extension } from "@tiptap/core";
export interface DropcursorOptions {
    color: string | undefined;
    width: number | undefined;
    class: string | undefined;
}
export declare const DropCursor: Extension<DropcursorOptions, any>;
