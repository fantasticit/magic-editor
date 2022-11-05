import { Node } from "@tiptap/core";
export interface IExcalidrawAttrs {
    createUserId?: string | number;
    showPickerOnCreate?: boolean;
    width?: number | string;
    height?: number;
    data?: string;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        excalidraw: {
            setExcalidraw: (attrs?: IExcalidrawAttrs) => ReturnType;
        };
    }
}
export declare const Excalidraw: Node<any, any>;
