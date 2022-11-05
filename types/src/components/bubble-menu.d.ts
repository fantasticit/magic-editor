import { BubbleMenuProps as BuiltInTiptapBubbleMenuProps } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import React from "react";
export declare type BubbleMenuProps = BuiltInTiptapBubbleMenuProps & {
    shouldShow: (props: {
        editor: Editor;
        view: EditorView;
        state: EditorState;
        oldState?: EditorState;
        from: number;
        to: number;
    }) => boolean;
    forNode?: boolean;
};
export declare const BubbleMenu: React.FC<BubbleMenuProps>;
