import { Plugin } from "prosemirror-state";
interface DropCursorOptions {
    color?: string;
    width?: number;
    class?: string;
}
export declare function dropCursor(options?: DropCursorOptions): Plugin;
export {};
