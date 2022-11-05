import { Editor } from "@tiptap/core";
import React from "react";
import { User } from "../../editor/provider";
interface IProps {
    editor: Editor;
    items: User[];
    command: (command: any) => void;
}
export declare const MentionMenuView: React.FC<IProps>;
export declare const MentionLoading: () => JSX.Element;
export {};
