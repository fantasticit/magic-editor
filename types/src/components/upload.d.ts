import React from "react";
import { Editor } from "@tiptap/core";
interface Props {
    editor: Editor;
    mimeTypes: string[];
    onOK: (arg: string) => void;
}
export declare const Upload: React.FC<React.PropsWithChildren<Props>>;
export {};
