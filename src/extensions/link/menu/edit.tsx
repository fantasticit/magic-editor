import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Editor, getMarkRange, posToDOMRect } from "@tiptap/core";
import tippy, { Instance } from "tippy.js";
import { ThemeProvider } from "styled-components";

import { Row, Col, Button, Input } from "../../../components";
import { isMarkActive } from "../../../utilities/mark";
import { Link as LinkExtension } from "../link";
import { getEditorTheme } from "../../../editor/theme";

export const LinkEdit: React.FC<{
  text: string;
  href: string;
  onOk: (arg: { text: string; href: string }) => void;
  onCancel: () => void;
}> = ({ text: defaultText, href: defaultHref, onOk, onCancel }) => {
  const linkInputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(defaultText);
  const [href, setHref] = useState(defaultHref);

  const ok = useCallback(() => {
    onOk &&
      onOk({
        text: text || href,
        href
      });
  }, [onOk, text, href]);

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
      <Row>
        <Col span={4} style={{ paddingTop: "4px" }}>
          文本
        </Col>
        <Col span={20}>
          <Input value={text} onChange={value => setText(value)} />
        </Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Col span={4} style={{ paddingTop: "4px" }}>
          链接
        </Col>
        <Col span={20}>
          <Input
            ref={linkInputRef}
            value={href}
            onChange={value => setHref(value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Button onClick={ok} disabled={!href} type="primary">
          确定
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={onCancel}>
          取消
        </Button>
      </Row>
    </div>
  );
};

export const showLinkEditor = (editor: Editor, dom?: HTMLElement) => {
  const { view, state } = editor;
  // @ts-ignore
  const isInLink = isMarkActive(state.schema.marks.link)(state);
  const selection = state.selection;

  let start: number;
  let end: number;
  let text;
  let href;

  if (!isInLink) {
    const { from, to } = selection;
    start = from;
    end = to;
    text = state.doc.textBetween(start, end);
    href = "";
  } else {
    const { from } = editor.state.selection;
    const range = getMarkRange(
      editor.state.doc.resolve(from),
      editor.state.schema.marks.link
    ) as {
      from: number;
      to: number;
    };

    if (!range) return;

    start = range.from;
    end = range.to;

    const attrs = editor.getAttributes(LinkExtension.name);
    text = state.doc.textBetween(start, end);
    href = attrs.href;
  }

  const div = document.createElement("div");
  div.className = "bubble-menu";
  let popup: Instance[];

  ReactDOM.render(
    <ThemeProvider theme={getEditorTheme(editor)}>
      <LinkEdit
        text={text}
        href={href}
        onOk={values => {
          const { view } = editor;
          const schema = view.state.schema;
          const node = schema.text(values.text, [
            schema.marks.link.create({ href: values.href })
          ]);
          view.dispatch(view.state.tr.deleteRange(start, end));
          view.dispatch(view.state.tr.insert(start, node));
          view.dispatch(view.state.tr.scrollIntoView());
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
