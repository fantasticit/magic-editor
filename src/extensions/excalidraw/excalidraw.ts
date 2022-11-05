import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { ExcalidrawView } from "./excalidraw-view";

const DEFAULT_MIND_DATA = JSON.stringify({ elements: [] });

export interface IExcalidrawAttrs {
  createUserId?: string | number;
  showPickerOnCreate?: boolean;
  width?: number | string;
  height?: number;
  data?: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    excalidraw: {
      setExcalidraw: (attrs?: IExcalidrawAttrs) => ReturnType;
    };
  }
}

export const Excalidraw = Node.create({
  name: "excalidraw",
  group: "block",
  selectable: true,
  atom: true,
  draggable: true,
  inline: false,

  addAttributes() {
    return {
      createUserId: {
        default: null
      },
      showPickerOnCreate: {
        default: false
      },
      width: {
        default: "100%"
      },
      height: {
        default: 240
      },
      data: {
        default: DEFAULT_MIND_DATA
      }
    };
  },

  addOptions() {
    return {
      HTMLAttributes: {
        class: "excalidraw"
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[class=excalidraw]"
      }
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ];
  },

  addCommands() {
    return {
      setExcalidraw: attrs => ({ tr, commands, chain, state }) => {
        attrs = attrs || {};
        attrs.data = attrs.data || DEFAULT_MIND_DATA;

        // @ts-ignore
        if (tr.selection?.node?.type?.name == this.name) {
          return commands.updateAttributes(this.name, attrs);
        }

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

  addNodeView() {
    return ReactNodeViewRenderer(ExcalidrawView);
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /^\$excalidraw\$$/,
        type: this.type,
        getAttributes: () => {
          return { width: "100%" };
        }
      })
    ];
  }
});
