import { Editor } from "@tiptap/core";

export const getEditorTheme = (editor: Editor) => {
  // @ts-ignore
  return editor.options.editorProps.theme;
};
