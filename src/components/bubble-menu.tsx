import {
  BubbleMenu as BuiltInTiptapBubbleMenu,
  BubbleMenuProps as BuiltInTiptapBubbleMenuProps
} from "@tiptap/react";
// 该 bubble-menu 经过改造后，在元素拖拽过程中不会消失
import { BubbleMenu as NodeBubbleMenu } from "./react-bubble-menu";
import { Editor } from "@tiptap/core";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import React, { useMemo } from "react";

import { ZINDEX_DEFAULT } from "../constants";

const defaultTippyOptions: BuiltInTiptapBubbleMenuProps["tippyOptions"] = {
  maxWidth: 450,
  duration: 200,
  animation: "shift-toward-subtle",
  moveTransition: "transform 0.2s ease-in-out",
  zIndex: ZINDEX_DEFAULT,
  arrow: false,
  theme: "bubble-menu",
  showOnCreate: false,
  placement: "top"
};

export type BubbleMenuProps = BuiltInTiptapBubbleMenuProps & {
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

export const BubbleMenu: React.FC<BubbleMenuProps> = ({
  editor,
  tippyOptions,
  forNode,
  children,
  ...rest
}) => {
  const wrapTippyOptions = useMemo(() => {
    if (typeof tippyOptions === "object") {
      return {
        ...defaultTippyOptions,
        ...tippyOptions,
        theme: `bubble-menu ${tippyOptions.theme}`,
        appendTo: () => editor.options.element
      };
    }

    return { ...defaultTippyOptions, appendTo: () => editor.options.element };
  }, [editor, tippyOptions]);

  if (forNode) {
    return (
      <NodeBubbleMenu editor={editor} tippyOptions={wrapTippyOptions} {...rest}>
        {children}
      </NodeBubbleMenu>
    );
  }

  return (
    <>
      <BuiltInTiptapBubbleMenu
        editor={editor}
        tippyOptions={wrapTippyOptions}
        {...rest}>
        {children}
      </BuiltInTiptapBubbleMenu>
    </>
  );
};
