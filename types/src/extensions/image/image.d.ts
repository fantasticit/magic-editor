import { Node } from "@tiptap/core";
export declare const inputRegex: RegExp;
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        image: {
            setImage: (options: {
                src: string;
                width?: number;
                height?: number;
            }) => ReturnType;
        };
    }
}
export declare const Image: Node<any, any>;
