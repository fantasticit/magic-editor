import { Node } from "@tiptap/core";
declare type IStatusAttrs = {
    createUserId?: string | number;
    showPickerOnCreate?: boolean;
    color?: string;
    text?: string;
};
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        status: {
            setStatus: (arg: IStatusAttrs) => ReturnType;
        };
    }
}
export declare const Status: Node<any, any>;
export {};
