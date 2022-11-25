import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { LoadingView } from "./loading-view";

export const Loading = Node.create({
  name: "loading",
  inline: false,
  content: "",
  marks: "",
  group: "block",
  selectable: false,
  draggable: false,
  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {
        class: "loading"
      }
    };
  },

  addAttributes() {
    return {
      id: {
        default: null
      },
      text: {
        default: null
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[class=loading]"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(LoadingView);
  }
});
