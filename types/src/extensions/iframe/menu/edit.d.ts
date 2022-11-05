import React from "react";
import { Editor } from "@tiptap/core";
export declare const URLEditor: React.FC<{
    url: string;
    onOk: (arg: {
        url: string;
    }) => void;
    onCancel: () => void;
}>;
export declare const showURLEditor: (editor: Editor, dom?: HTMLElement | undefined) => void;
