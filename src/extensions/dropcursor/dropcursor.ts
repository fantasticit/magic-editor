import { Extension } from "@tiptap/core";
import { dropCursor } from "./prosemirror-dropcursor";

export interface DropcursorOptions {
  color: string | undefined;
  width: number | undefined;
  class: string | undefined;
}

export const DropCursor = Extension.create<DropcursorOptions>({
  name: "dropCursor",

  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: undefined
    };
  },

  // @ts-ignore
  addProseMirrorPlugins() {
    return [dropCursor(this.options)];
  }
}).configure({
  width: 2,
  class: "dropcursor",
  color: "skyblue"
});
