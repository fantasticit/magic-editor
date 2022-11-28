import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { NodeSelection } from "../../prosemirror";
import { isNodeEmpty } from "../../utilities";

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
      insertFlow: (attrs?: IFlowAttrs) => ReturnType;
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
      insertFlow: attrs => ({ tr, commands, chain, state }) => {
        attrs = attrs || {};

        // @ts-ignore
        if (tr.selection?.node?.type?.name == this.name) {
          return commands.updateAttributes(this.name, attrs);
        }

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
