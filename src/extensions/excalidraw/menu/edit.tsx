import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "@tiptap/core";
import { ThemeProvider } from "styled-components";

import { Excalidraw as ExcalidrawExtension } from "../excalidraw";
import { isNodeActive } from "../../../utilities";

import { ExcalidrawSettingModal } from "./modal";
import { getEditorTheme } from "../../../editor/theme";

export const showExcalidrawEditor = (editor: Editor, dom?: HTMLElement) => {
  const { view, state } = editor;
  // @ts-ignore
  const isInExcalidraw = isNodeActive(editor, ExcalidrawExtension.name);

  let start: number;
  let end: number;
  let data = null;

  if (!isInExcalidraw) {
    const { from, to } = state.selection;
    start = from;
    end = to;
  } else {
    const attrs = editor.getAttributes(ExcalidrawExtension.name);
    data = JSON.parse(attrs.data);
  }

  const div = document.createElement("div");

  editor.options.element.appendChild(div);

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <ExcalidrawSettingModal
        editor={editor}
        data={data}
        onClose={() => {
          ReactDOM.unmountComponentAtNode(div);
          div.remove();
        }}
      />
    </ThemeProvider>,
    div
  );
};
