import { Editor } from "@tiptap/core";
import React, { useCallback, useMemo } from "react";
import { NodeSelection } from "prosemirror-state";
import { Resizable as ReactResizable, ResizeCallback } from "re-resizable";

import { throttle } from "../utilities";

interface Props {
  width: number;
  height: number;
  aspectRatio?: number;
  minWidth?: number | string;
  editor: Editor;
  getPos: () => number;
  onResizeStop: (arg: { width: number; height: number }) => void;
}

export const Resizable: React.FC<React.PropsWithChildren<Props>> = ({
  editor,
  width,
  height,
  aspectRatio,
  minWidth,
  getPos,
  onResizeStop,
  children
}) => {
  const onResize = useMemo(
    () =>
      throttle(() => {
        const { view, state } = editor;

        const tr = editor.state.tr;
        const $pos = state.doc.resolve(getPos());
        // @ts-ignore
        tr.setSelection(NodeSelection.near($pos));
        tr.setMeta("addToHistory", false);
        // @ts-ignore
        view.dispatch(tr);
      }, 200),
    [editor, getPos]
  );

  const resizeStop = useCallback<ResizeCallback>(
    (event, direction, element) => {
      const width = parseInt(element.style.width);
      const height = parseInt(element.style.height);
      onResizeStop({ width, height });
    },
    [onResizeStop]
  );

  return (
    <ReactResizable
      className="resizable"
      size={{
        width,
        height
      }}
      onResize={onResize as ResizeCallback}
      onResizeStop={resizeStop}
      {...(aspectRatio ? { lockAspectRatio: aspectRatio } : {})}
      {...(minWidth ? { minWidth } : {})}>
      {children}
    </ReactResizable>
  );
};
