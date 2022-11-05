import React from "react";
import { Editor } from "@tiptap/core";
export declare const LinkEdit: React.FC<{
    text: string;
    href: string;
    onOk: (arg: {
        text: string;
        href: string;
    }) => void;
    onCancel: () => void;
}>;
export declare const showLinkEditor: (editor: Editor, dom?: HTMLElement | undefined) => void;
