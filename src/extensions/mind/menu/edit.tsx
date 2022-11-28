import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "@tiptap/core";
import { ThemeProvider } from "styled-components";

import { DEFAULT_MIND_DATA, Mind as MindExtension } from "../mind";
import { isNodeActive } from "../../../utilities";

import { MindSettingModal } from "./modal";
import { getEditorTheme } from "../../../editor/theme";

export const showMindEditor = (editor: Editor) => {
  // @ts-ignore
  const isInMind = isNodeActive(editor, MindExtension.name);

  if (!isInMind) {
    editor
      .chain()
      .insertMind({
        data: DEFAULT_MIND_DATA
      })
      .run();
  }

  const attrs = editor.getAttributes(MindExtension.name);
  const data = JSON.parse(attrs.data);
  const blockId = attrs.blockId;

  const div = document.createElement("div");
  editor.options.element.appendChild(div);

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <MindSettingModal
        editor={editor}
        data={data}
        blockId={blockId}
        onClose={() => {
          ReactDOM.unmountComponentAtNode(div);
          div.remove();
        }}
      />
    </ThemeProvider>,
    div
  );
};
