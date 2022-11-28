import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "@tiptap/core";
import { ThemeProvider } from "styled-components";

import {
  DEFAULT_EXCALIDRAW_DATA,
  Excalidraw as ExcalidrawExtension
} from "../excalidraw";
import { isNodeActive } from "../../../utilities";

import { ExcalidrawSettingModal } from "./modal";
import { getEditorTheme } from "../../../editor/theme";

export const showExcalidrawEditor = (editor: Editor) => {
  // @ts-ignore
  const isInExcalidraw = isNodeActive(editor, ExcalidrawExtension.name);

  if (!isInExcalidraw) {
    editor
      .chain()
      .insertExcalidraw({ data: DEFAULT_EXCALIDRAW_DATA })
      .run();
  }

  const attrs = editor.getAttributes(ExcalidrawExtension.name);
  const data = JSON.parse(attrs.data);
  const blockId = attrs.blockId;

  const div = document.createElement("div");
  editor.options.element.appendChild(div);

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <ExcalidrawSettingModal
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
