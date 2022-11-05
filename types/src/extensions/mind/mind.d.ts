import { Node } from "@tiptap/core";
export declare const DEFAULT_MIND_DATA: string;
export interface IMindAttrs {
    width?: number | string;
    height?: number;
    data?: string;
    svg?: string;
    template?: string;
    theme?: string;
    zoom?: number;
}
interface IMindOptions {
    HTMLAttributes: Record<string, any>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        mind: {
            setMind: (attrs?: IMindAttrs) => ReturnType;
        };
    }
}
export declare const Mind: Node<IMindOptions, any>;
export {};
