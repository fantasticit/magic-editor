import React, { useMemo, useState, useEffect } from "react";
import { Editor } from "@tiptap/core";
import tippy, { Placement } from "tippy.js";

import { ZINDEX_DEFAULT, ZINDEX_MIDDLE, ZINDEX_HIGHEST } from "../constants";

type ZLevel = "default" | "middle" | "highest";

export const Tooltip: React.FC<React.PropsWithChildren<{
  editor: Editor;
  title: string;
  zLevel?: ZLevel;
  placement?: Placement;
}>> = ({ editor, title, zLevel = "middle", placement = "top", children }) => {
  const [element, setElement] = useState<HTMLSpanElement | null>(null);

  const zIndex = useMemo(() => {
    switch (zLevel) {
      case "highest":
        return ZINDEX_HIGHEST;

      case "middle":
        return ZINDEX_MIDDLE;

      case "default":
      default:
        return ZINDEX_DEFAULT;
    }
  }, [zLevel]);

  useEffect(() => {
    if (!element) return;

    const popup = tippy(element, {
      appendTo: () => editor.options.element,
      theme: "tooltip",
      content: title,
      zIndex,
      placement
    });

    return () => {
      popup.destroy();
    };
  }, [editor, element, title, zIndex, placement]);

  return (
    <>
      <span ref={setElement}>{children}</span>
    </>
  );
};
