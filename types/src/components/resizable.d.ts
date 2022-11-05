import { Editor } from "@tiptap/core";
import React from "react";
interface Props {
    width: number;
    height: number;
    aspectRatio?: number;
    minWidth?: number | string;
    editor: Editor;
    getPos: () => number;
    onResizeStop: (arg: {
        width: number;
        height: number;
    }) => void;
}
export declare const Resizable: React.FC<React.PropsWithChildren<Props>>;
export {};
