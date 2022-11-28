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
  const isInFlow = isNodeActive(editor, FlowExtension.name);

  if (!isInFlow) {
    editor
      .chain()
      .insertFlow({
        svg: DEFAULT_FLOW_DATA,
        xml: ""
      })
      .run();
  }

  const attrs = editor.getAttributes(FlowExtension.name);
  const data = attrs.xml;
  const blockId = attrs.blockId;

  const div = document.createElement("div");
  editor.options.element.appendChild(div);

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <FlowSettingModal
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
