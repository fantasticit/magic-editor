import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Editor, posToDOMRect } from "@tiptap/core";
import tippy, { Instance } from "tippy.js";
import { ThemeProvider } from "styled-components";

import { Row, Col, Button, Input } from "../../../components";
import { Iframe as IframeExtension } from "../iframe";
import { isNodeActive } from "../../../utilities";
import { getEditorTheme } from "../../../editor/theme";
import i18n from "../../../i18n";

export const URLEditor: React.FC<{
  url: string;
  onOk: (arg: { url: string }) => void;
  onCancel: () => void;
}> = ({ url: defaultHref, onOk, onCancel }) => {
  const linkInputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState(defaultHref);

  const ok = useCallback(() => {
    onOk &&
      onOk({
        url
      });
  }, [onOk, url]);

  useEffect(() => {
    const timer = setTimeout(() => {
      linkInputRef.current?.focus();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ width: 280 }}>
      <Row style={{ marginTop: 8 }}>
        <Col span={4} style={{ paddingTop: "4px" }}>
          {i18n('iframe', 'title')}
        </Col>
        <Col span={20}>
          <Input
            ref={linkInputRef}
            value={url}
            onChange={value => setUrl(value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Button onClick={ok} disabled={!url} type="primary">
          {i18n('iframe', 'save')}
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={onCancel}>
          {i18n('iframe', 'cancel')}
        </Button>
      </Row>
    </div>
  );
};

export const showURLEditor = (editor: Editor, dom?: HTMLElement) => {
  const { view, state } = editor;
  // @ts-ignore
  const isInIframe = isNodeActive(editor, IframeExtension.name);

  let start: number;
  let end: number;
  let url;

  if (!isInIframe) {
    const { from, to } = state.selection;
    start = from;
    end = to;
    url = "";
  } else {
    const attrs = editor.getAttributes(IframeExtension.name);
    url = attrs.url;
  }

  const div = document.createElement("div");
  div.className = "bubble-menu";
  let popup: Instance[];

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <URLEditor
        url={url}
        onOk={values => {
          if (isInIframe) {
            editor
              .chain()
              .updateAttributes(IframeExtension.name, {
                url: values.url
              })
              .focus()
              .run();
          } else {
            editor
              .chain()
              .setIframe({
                url: values.url
              })
              .focus()
              .run();
          }

          popup?.[0]?.hide();
          editor
            .chain()
            .focus()
            .run();
        }}
        onCancel={() => {
          popup?.[0]?.hide();
          editor
            .chain()
            .focus()
            .run();
        }}
      />
    </ThemeProvider>,
    div
  );

  popup = tippy("body", {
    getReferenceClientRect: () =>
      dom ? dom.getBoundingClientRect() : posToDOMRect(editor.view, start, end),
    appendTo: () => editor.options.element,
    content: div,
    showOnCreate: true,
    interactive: true,
    trigger: "manual",
    placement: "bottom-start",
    theme: "bubble-menu padding-8",
    arrow: false,
    onHide() {
      ReactDOM.unmountComponentAtNode(div);
    }
  });
};
