import { Node, mergeAttributes } from "@tiptap/core";

import { TextSelection } from "../../prosemirror";

import { createColumns, addOrDeleteCol, gotoCol } from "./utilities";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    columns: {
      insertColumns: (attrs?: { cols: number }) => ReturnType;
      addColBefore: () => ReturnType;
      addColAfter: () => ReturnType;
      deleteCol: () => ReturnType;
    };
  }
}

export const Columns = Node.create({
  name: "columns",
  group: "block",
  defining: true,
  isolating: true,
  allowGapCursor: false,
  content: "column{2,}",

  addOptions() {
    return {
      HTMLAttributes: {
        class: "columns"
      }
    };
  },

  addAttributes() {
    return {
      cols: {
        default: 2,
        parseHTML: element => element.getAttribute("cols")
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[class=columns]"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0
    ];
  },

  addCommands() {
    return {
      insertColumns: attrs => ({ tr, dispatch, editor }) => {
        const node = createColumns(editor.schema, (attrs && attrs.cols) || 3);

        if (dispatch) {
          const offset = tr.selection.anchor + 1;

          tr.replaceSelectionWith(node)
            .scrollIntoView()
            .setSelection(TextSelection.near(tr.doc.resolve(offset)));
        }

        return true;
      },
      addColBefore: () => ({ dispatch, state }) => {
        return addOrDeleteCol({ dispatch, state, type: "addBefore" });
      },
      addColAfter: () => ({ dispatch, state }) => {
        return addOrDeleteCol({ dispatch, state, type: "addAfter" });
      },
      deleteCol: () => ({ dispatch, state }) => {
        return addOrDeleteCol({ dispatch, state, type: "delete" });
      }
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => {
        return gotoCol({
          state: this.editor.state,
          dispatch: this.editor.view.dispatch,
          type: "after"
        });
      },
      "Shift-Tab": () => {
        return gotoCol({
          state: this.editor.state,
          dispatch: this.editor.view.dispatch,
          type: "before"
        });
      }
    };
  }
});
