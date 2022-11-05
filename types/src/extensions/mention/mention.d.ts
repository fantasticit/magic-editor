import { Node } from "@tiptap/core";
import { PMNode } from "../../prosemirror";
export interface MentionOptions {
    HTMLAttributes: {};
    char: string;
    renderLabel: (arg: {
        options: MentionOptions;
        node: PMNode;
    }) => string;
}
export declare const Mention: Node<MentionOptions, any>;
