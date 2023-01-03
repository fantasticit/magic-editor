import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { NodeSelection } from "../../prosemirror";
import { isNodeEmpty } from "../../utilities";

import { MindView } from "./mind-view";
import i18n from "../../i18n";

export const DEFAULT_MIND_DATA = JSON.stringify({
  root: { data: { text: i18n('mind', 'root') }, children: [] },
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
      insertMind: (attrs?: IMindAttrs) => ReturnType;
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
      insertMind: attrs => ({ tr, commands, chain, state }) => {
        attrs = attrs || {};
        attrs.data = attrs.data || DEFAULT_MIND_DATA;

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
