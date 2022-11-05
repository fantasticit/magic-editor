import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "@tiptap/core";
import { ThemeProvider } from "styled-components";

import { Flow as FlowExtension } from "../flow";
import { isNodeActive } from "../../../utilities";

import { FlowSettingModal } from "./modal";
import { getEditorTheme } from "../../../editor/theme";
import { DEFAULT_FLOW_DATA } from "./constants";

export const showFlowEditor = (editor: Editor) => {
  const { state } = editor;
  // @ts-ignore
  const isInFlow = isNodeActive(editor, FlowExtension.name);

  let start: number;
  let end: number;
  let data;

  if (!isInFlow) {
    const { from, to } = state.selection;
    start = from;
    end = to;
    data = DEFAULT_FLOW_DATA;
  } else {
    const attrs = editor.getAttributes(FlowExtension.name);
    data = attrs.xml;
  }

  const div = document.createElement("div");

  editor.options.element.appendChild(div);

  console.log(data);

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <FlowSettingModal
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
