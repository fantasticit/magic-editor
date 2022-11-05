import { Node } from "@tiptap/core";
export interface IIframeAttrs {
    width?: number | string;
    height?: number;
    url?: string;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        iframe: {
            setIframe: (attrs: IIframeAttrs) => ReturnType;
        };
    }
}
export declare const Iframe: Node<any, any>;
