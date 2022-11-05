import { Node } from "@tiptap/core";
export interface IFlowAttrs {
    width?: number | string;
    height?: number;
    svg?: string;
    xml?: string;
}
interface IFlowOptions {
    HTMLAttributes: Record<string, any>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        flow: {
            setFlow: (attrs?: IFlowAttrs) => ReturnType;
        };
    }
}
export declare const Flow: Node<IFlowOptions, any>;
export {};
