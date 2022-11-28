import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { NodeSelection } from "../../prosemirror";
import { isNodeEmpty } from "../../utilities";

import { IframeView } from "./iframe-view";

export interface IIframeAttrs {
  width?: number | string;
  height?: number;
  url?: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    iframe: {
      setIframe: (attrs: IIframeAttrs) => ReturnType;
    };
  }
}

export const Iframe = Node.create({
  name: "iframe",
  content: "",
  marks: "",
  group: "block",
  selectable: true,
  atom: true,
  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {
        class: "iframe"
      }
    };
  },

  addAttributes() {
    return {
      width: {
        default: "100%"
      },
      height: {
        default: 66
      },
      url: {
        default: null
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "iframe",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ];
  },

  addCommands() {
    return {
      setIframe: options => ({ tr, commands, chain, state }) => {
        // @ts-ignore
        if (tr.selection?.node?.type?.name == this.name) {
          return commands.updateAttributes(this.name, options);
        }

        const attrs = options || { url: "" };

        const { selection } = state;
        const currentNode = selection.$head.node(selection.$head.depth);
        const isEmpty = currentNode ? isNodeEmpty(currentNode) : true;
        const insertPos = !isEmpty
          ? state.tr.selection.from + 1
          : state.tr.selection.from - 1;

        return chain()
          .command(({ tr, dispatch, state }) => {
            if (dispatch) {
              tr.insert(
                insertPos,
                state.schema.nodes[this.name].create(attrs)
              ).setSelection(NodeSelection.create(tr.doc, insertPos));

              dispatch(tr);
            }

            return true;
          })
          .run();
      }
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => {
          return { width: "100%" };
        }
      })
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(IframeView);
  }
});
