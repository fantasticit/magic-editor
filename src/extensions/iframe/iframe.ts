import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

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
        const { empty } = selection;
        const head = selection.$head;

        if (empty) {
          return chain()
            .insertContent({
              type: this.name,
              attrs
            })
            .run();
        } else {
          const node = head.node(head.depth);

          if (node.type.name === state.schema.topNodeType.name) {
            return chain()
              .command(({ tr, dispatch, state }) => {
                if (dispatch) {
                  tr.replaceSelectionWith(
                    state.schema.nodes[this.name].create(attrs)
                  ).scrollIntoView();
                }

                return true;
              })
              .run();
          }

          return chain()
            .insertContentAt(head.after(), [
              {
                type: this.name,
                attrs
              }
            ])
            .run();
        }
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
