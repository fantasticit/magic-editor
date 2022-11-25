import React from "react";
import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";

import { Loading } from "../../components";

const LOADING_WRAPPER_STYLE: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em",
  whiteSpace: "nowrap"
};

export const LoadingView: React.FC<NodeViewProps> = ({
  editor,
  node: { attrs }
}) => {
  const isEditable = editor.isEditable;
  const { text } = attrs;

  if (!isEditable) return <NodeViewWrapper />;

  return (
    <NodeViewWrapper>
      <div style={LOADING_WRAPPER_STYLE}>
        <Loading text={text} />
      </div>
    </NodeViewWrapper>
  );
};
