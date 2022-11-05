import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { FlowView } from "./flow-view";

export interface IFlowAttrs {
  width?: number | string;
  height?: number;
  svg?: string;
  xml?: string;
}

interface IFlowOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    flow: {
      setFlow: (attrs?: IFlowAttrs) => ReturnType;
    };
  }
}

export const Flow = Node.create<IFlowOptions>({
  name: "flow",
  group: "block",
  selectable: true,
  atom: true,
  draggable: true,
  inline: false,

  addAttributes() {
    return {
      width: {
        default: "100%"
      },
      height: {
        default: 240
      },
      svg: {
        default: ""
      },
      xml: {
        default: ""
      }
    };
  },

  addOptions() {
    return {
      HTMLAttributes: {
        class: "flow"
      },
      getCreateUserId: () => null
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[class=flow]"
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
      setFlow: attrs => ({ tr, commands, chain, state }) => {
        attrs = attrs || {};

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
    return ReactNodeViewRenderer(FlowView);
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /^\$flow\$$/,
        type: this.type,
        getAttributes: () => {
          return {
            width: "100%"
          };
        }
      })
    ];
  }
});
