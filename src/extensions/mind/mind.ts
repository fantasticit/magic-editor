import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { MindView } from "./mind-view";

export const DEFAULT_MIND_DATA = JSON.stringify({
  root: { data: { text: "中心节点" }, children: [] },
  template: "default",
  theme: "fresh-purple",
  version: "1.4.43"
});

export interface IMindAttrs {
  width?: number | string;
  height?: number;
  data?: string;
  svg?: string;
  template?: string;
  theme?: string;
  zoom?: number;
}

interface IMindOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    mind: {
      setMind: (attrs?: IMindAttrs) => ReturnType;
    };
  }
}

export const Mind = Node.create<IMindOptions>({
  name: "mind",
  group: "block",
  selectable: true,
  atom: true,
  draggable: true,
  inline: false,

  addAttributes() {
    return {
      defaultShowPicker: {
        default: false
      },
      createUser: {
        default: null
      },
      width: {
        default: "100%"
      },
      height: {
        default: 240
      },
      data: {
        default: DEFAULT_MIND_DATA
      },
      svg: {
        default: DEFAULT_MIND_DATA
      }
    };
  },

  addOptions() {
    return {
      HTMLAttributes: {
        class: "mind"
      },
      getCreateUserId: () => null
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[class=mind]"
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
      setMind: attrs => ({ tr, commands, chain, state }) => {
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
    return ReactNodeViewRenderer(MindView);
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /^\$mind\$$/,
        type: this.type,
        getAttributes: () => {
          return {
            width: "100%",
            defaultShowPicker: true
          };
        }
      })
    ];
  }
});
