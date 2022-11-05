import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "@tiptap/core";
import { ThemeProvider } from "styled-components";

import { DEFAULT_MIND_DATA, Mind as MindExtension } from "../mind";
import { isNodeActive } from "../../../utilities";

import { MindSettingModal } from "./modal";
import { getEditorTheme } from "../../../editor/theme";

export const showMindEditor = (editor: Editor) => {
  const { state } = editor;
  // @ts-ignore
  const isInMind = isNodeActive(editor, MindExtension.name);

  let start: number;
  let end: number;
  let data;

  if (!isInMind) {
    const { from, to } = state.selection;
    start = from;
    end = to;
    data = JSON.parse(DEFAULT_MIND_DATA);
  } else {
    const attrs = editor.getAttributes(MindExtension.name);
    data = JSON.parse(attrs.data);
  }

  const div = document.createElement("div");
  editor.options.element.appendChild(div);

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <MindSettingModal
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
