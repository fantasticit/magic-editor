import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Editor } from "@tiptap/core";
import tippy, { Instance } from "tippy.js";

import { ZINDEX_DEFAULT } from "../constants";
import { Tooltip, Button } from "../components";

export const _ReactTooltip: React.FC<{
  editor: Editor;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}> = ({ editor, title, icon, content }) => {
  const containerRef = useRef<HTMLElement>(null);
  const popupRef = useRef<Instance | null>(null);

  useEffect(() => {
    const div = document.createElement("div");

    ReactDOM.render(<>{content}</>, div);

    const popup: Instance[] = tippy("body", {
      getReferenceClientRect: () => {
        return (containerRef.current as HTMLElement).getBoundingClientRect();
      },
      appendTo: () => editor.options.element,
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
  }, [editor, content]);

  return (
    <span ref={containerRef}>
      <Tooltip editor={editor} title={title}>
        <Button
          icon={icon}
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

export const ReactTooltip = React.memo(
  _ReactTooltip,
  (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
  }
);
