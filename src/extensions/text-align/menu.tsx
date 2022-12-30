import React, { useCallback, useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom";
import { Editor } from "@tiptap/core";
import tippy, { Instance } from "tippy.js";

import { Tooltip, Button } from "../../components";
import {
  IconAlignCenter,
  IconAlignJustify,
  IconAlignLeft,
  IconAlignRight
} from "../../icons";
import { useActive } from "../../hooks/use-active";
import { TextAlign } from "./text-align";
import { ZINDEX_DEFAULT } from "../../constants";
import i18n from "../../i18n";

const _TextAlignStaticMenu: React.FC<{
  editor: Editor;
  getPopupContainer?: () => HTMLElement;
}> = ({ editor, getPopupContainer }) => {
  const containerRef = useRef<HTMLElement>(null);
  const popupRef = useRef<Instance | null>(null);
  const isAlignCenter = useActive(editor, TextAlign.name, {
    textAlign: "center"
  });
  const isAlignRight = useActive(editor, TextAlign.name, {
    textAlign: "right"
  });
  const isAlignJustify = useActive(editor, TextAlign.name, {
    textAlign: "justify"
  });

  const current = useMemo(() => {
    if (isAlignCenter) {
      return <IconAlignCenter />;
    }
    if (isAlignRight) {
      return <IconAlignRight />;
    }
    if (isAlignJustify) {
      return <IconAlignJustify />;
    }

    return <IconAlignLeft />;
  }, [isAlignCenter, isAlignRight, isAlignJustify]);

  const toggle = useCallback(
    (align: string) => {
      return () =>
        editor
          .chain()
          .focus()
          .setTextAlign(align)
          .run();
    },
    [editor]
  );

  useEffect(() => {
    const div = document.createElement("div");

    ReactDOM.render(
      <>
        <Tooltip editor={editor} title={i18n('align', 'left')}>
          <Button onClick={toggle("left")} icon={<IconAlignLeft />} />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('align', 'center')}>
          <Button onClick={toggle("center")} icon={<IconAlignCenter />} />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('align', 'right')}>
          <Button onClick={toggle("right")} icon={<IconAlignRight />} />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('align', 'justify')}>
          <Button onClick={toggle("justify")} icon={<IconAlignJustify />} />
        </Tooltip>
      </>,
      div
    );

    const popup: Instance[] = tippy("body", {
      getReferenceClientRect: () => {
        return (containerRef.current as HTMLElement).getBoundingClientRect();
      },
      appendTo: getPopupContainer || (() => editor.options.element),
      content: div,
      showOnCreate: false,
      interactive: true,
      popperOptions: {
        strategy: "fixed"
      },
      trigger: "manual",
      placement: "top-start",
      theme: "bubble-menu",
      arrow: false,
      zIndex: ZINDEX_DEFAULT
    });

    popupRef.current = popup[0];

    return () => {
      if (!popupRef.current) return;
      ReactDOM.unmountComponentAtNode(div);
    };
  }, [editor, getPopupContainer]);

  return (
    <span ref={containerRef}>
      <Tooltip editor={editor} title="对齐方式">
        <Button
          icon={current}
          onClick={() => {
            popupRef.current?.state.isVisible
              ? popupRef.current.hide()
              : popupRef.current?.show();
          }}
        />
      </Tooltip>
    </span>
  );
};

export const TextAlignStaticMenu = React.memo(
  _TextAlignStaticMenu,
  (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
  }
);
