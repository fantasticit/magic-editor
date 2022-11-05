import React from "react";
import { Editor, Node } from "@tiptap/core";
export declare type SlashMenuItem = {
    icon: React.ReactNode;
    text: string;
    slash: string;
    action: (editor: Editor) => void;
} | {
    divider: true;
    title: string;
};
export interface SlashOptions {
    items: SlashMenuItem[];
    pluginKey: string;
    char: string;
}
export declare const Slash: Node<SlashOptions, any>;
