import React, { useCallback, useMemo } from "react";
import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";

import { Resizable } from "../../components";

export const ImageView: React.FC<NodeViewProps> = ({
  editor,
  node: { attrs },
  updateAttributes,
  getPos
}) => {
  const { src, width, height, align, aspectRatio } = attrs;

  const flexJustifyContent = useMemo(() => {
    if (align === "center") return "center";
    if (align === "right") return "flex-end";

    return "flex-start";
  }, [align]);

  const onResize = useCallback(
    size => {
      updateAttributes({ width: size.width, height: size.height });
    },
    [updateAttributes]
  );

  return (
    <NodeViewWrapper
      style={{
        position: "relative",
        display: "flex",
        justifyContent: flexJustifyContent
      }}>
      <Resizable
        width={width}
        height={height}
        editor={editor}
        getPos={getPos}
        aspectRatio={aspectRatio}
        onResizeStop={onResize}>
        <img src={src} width={"100%"} height={"100%"} />
      </Resizable>
    </NodeViewWrapper>
  );
};
