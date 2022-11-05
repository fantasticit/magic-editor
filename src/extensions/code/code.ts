import { Extension } from "@tiptap/core";
import BuiltInCode from "@tiptap/extension-code";
import codemark from "prosemirror-codemark";

export const Code = BuiltInCode.extend({});

export const CodeMarkPlugin = Extension.create({
  name: "codemarkPlugin",

  // @ts-ignore
  addProseMirrorPlugins() {
    return codemark({ markType: this.editor.schema.marks.code });
  }
});

export const CodeExtensions = [Code, CodeMarkPlugin];
