import React from "react";
import { Editor } from "@tiptap/core";
import { EditorRenderProps } from "./render";
export interface CollaborationEditorProps extends EditorRenderProps {
    id: string;
    url: string;
    token: string;
}
export declare const CollaborationEditor: React.ForwardRefExoticComponent<CollaborationEditorProps & {
    children?: React.ReactNode;
} & React.RefAttributes<Editor | null>>;
