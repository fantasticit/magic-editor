import {
  BubbleMenuPlugin,
  BubbleMenuPluginProps
} from "@tiptap/extension-bubble-menu";
import {Editor, posToDOMRect} from "@tiptap/core";
import tippy, {Instance} from "tippy.js";
import ReactDOM from "react-dom";
import React, {useCallback, useEffect, useRef} from "react";
import {Node as PMNode} from "prosemirror-model";

import {findParentNode} from "../../../prosemirror";
import {ZINDEX_DEFAULT} from "../../../constants";
import {Dropdown} from "../../../components";
import i18n from "../../../i18n";

const cellButtonsConfig = [
  {
    name: i18n('table', 'insertRowUp'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .addRowBefore()
        .run()
  },
  {
    name: i18n('table', 'insertRowDown'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .addRowAfter()
        .run()
  },
  {
    name: i18n('table', 'removeRows'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .deleteRow()
        .run()
  },
  {
    divider: true
  },
  {
    name: i18n('table', 'insertColumnLeft'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .addColumnBefore()
        .run()
  },
  {
    name: i18n('table', 'insertColumnRight'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .addColumnAfter()
        .run()
  },
  {
    name: i18n('table', 'removeColumns'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .deleteColumn()
        .run()
  },
  {
    divider: true
  },
  {
    name: i18n('table', 'toggleHeaderRow'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .toggleHeaderRow()
        .run()
  },
  {
    name: i18n('table', 'toggleHeaderColumn'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .toggleHeaderColumn()
        .run()
  },
  {
    name: i18n('table', 'toggleHeaderCell'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .toggleHeaderCell()
        .run()
  },
  {
    divider: true
  },
  {
    name: i18n('table', 'remove'),
    action: (editor: Editor) =>
      editor
        .chain()
        .focus()
        // @ts-ignore
        .deleteTable()
        .run()
  }
];

const predicateIsTableCell = (node: PMNode) =>
  ["tableHeader", "tableCell"].includes(node.type.name);

const TableCellMenu: React.FC<React.PropsWithChildren<{
  editor: Editor;
}>> = ({editor}) => {
  const popupRef = useRef<Instance | null>(null);

  const toggleVisible = useCallback(() => {
    popupRef.current?.state.isVisible
      ? popupRef.current.hide()
      : popupRef.current?.show();
  }, []);

  useEffect(() => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Dropdown.Menu
        style={{
          minWidth: 200,
          padding: "0 !important"
        }}>
        {cellButtonsConfig.map((btn, index) => {
          return btn.divider ? (
            <Dropdown.Divider key={index}/>
          ) : (
            <Dropdown.Item key={btn.name} onClick={() => btn?.action?.(editor)}>
              {btn.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>,

      div
    );

    const popup: Instance[] = tippy("body", {
      getReferenceClientRect: () => {
        const {selection} = editor.state;
        const parent = findParentNode(predicateIsTableCell)(selection);

        // @ts-ignore
        if (editor.view.docView) {
          const dom = editor.view.nodeDOM(parent?.pos) as HTMLElement;
          return dom.getBoundingClientRect();
        } else {
          return posToDOMRect(
            editor.view,
            editor.state.selection.from,
            editor.state.selection.to
          );
        }
      },
      appendTo: () => {
        return editor.options.element;
      },
      content: div,
      showOnCreate: false,
      interactive: true,
      trigger: "manual",
      placement: "right-start",
      theme: "bubble-menu padding-0 ",
      arrow: false,
      zIndex: ZINDEX_DEFAULT
    });

    popupRef.current = popup[0];

    return () => {
      if (!popupRef.current) return;
      popupRef.current.destroy();
      ReactDOM.unmountComponentAtNode(div);
    };
  }, [editor]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const {selection} = editor.state;
      const parent = findParentNode(predicateIsTableCell)(selection);

      if (parent) {
        event?.preventDefault();
        toggleVisible();
      }
    };

    window.addEventListener("contextmenu", handler);

    return () => {
      window.removeEventListener("contextmenu", handler);
    };
  }, [editor, toggleVisible]);

  return null;
};

export const TableCellMenuPlugin = (editor: Editor) => {
  const div = document.createElement("div");

  ReactDOM.render(<TableCellMenu editor={editor}/>, div);

  return BubbleMenuPlugin({
    pluginKey: "TableCellMenuPlugin",
    editor,
    element: div,
    tippyOptions: {
      appendTo: () => editor.options.element,
      duration: 200,
      animation: "shift-toward-subtle",
      moveTransition: "transform 0.2s ease-in-out",
      zIndex: ZINDEX_DEFAULT,
      arrow: false,
      theme: "bubble-menu padding-0 hidden",
      getReferenceClientRect: () => {
        const {selection} = editor.state;

        const predicate = (node: PMNode) =>
          ["tableHeader", "tableCell"].includes(node.type.name);
        const parent = findParentNode(predicate)(selection);

        if (parent) {
          const rect = (editor.view.nodeDOM(
            parent?.pos
          ) as HTMLElement).getBoundingClientRect();
          return rect;
        }

        return posToDOMRect(editor.view, selection.from, selection.to);
      },
      position: "bottom"
    },
    shouldShow: (({state}) => {
      const {selection} = state;
      const predicate = (node: PMNode) =>
        ["tableHeader", "tableCell"].includes(node.type.name);
      const parent = findParentNode(predicate)(selection);
      return Boolean(parent);
    }) as BubbleMenuPluginProps["shouldShow"]
  } as BubbleMenuPluginProps);
};
