import React from "react";
import { EditorKit } from "./kit";
import { EditorProvider } from "./provider";
import { Content, Editor } from "@tiptap/core";
export interface EditorRenderProps extends EditorProvider, EditorKit {
    content?: Content;
}
export declare const EditorRender: React.ForwardRefExoticComponent<EditorRenderProps & {
    children?: React.ReactNode;
} & React.RefAttributes<Editor | null>>;
