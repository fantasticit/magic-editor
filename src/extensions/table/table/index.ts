import BuiltInTable from "@tiptap/extension-table";

import { TableCellMenuPlugin } from "../cell-menu-plugin";
import { TableView } from "./table-view";

export const Table = BuiltInTable.extend({
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: false,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: TableView,
      lastColumnResizable: true,
      allowTableNodeSelection: false
    };
  },

  addProseMirrorPlugins() {
    const { isEditable } = this.editor;

    return [
      // @ts-ignore
      ...this.parent?.(),
      TableCellMenuPlugin(this.editor)
    ];
  }
});
