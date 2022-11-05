import { Editor } from "@tiptap/core";
import React from "react";
import { SlashMenuItem } from "./slash";
interface IProps {
    editor: Editor;
    items: SlashMenuItem[];
    command: (command: any) => void;
}
export declare const SlashMenuView: React.FC<IProps>;
export {};
