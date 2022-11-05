import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

import { Resizable } from "../../components";
import { NodeSelection } from "../../prosemirror";

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  line-height: 0;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  flex-direction: column;
`;

const StyledEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props => props.theme.greyDark};
`;

export const IframeView: React.FC<NodeViewProps> = ({
  editor,
  node,
  updateAttributes,
  getPos
}) => {
  const timerRef = useRef<number>(-1);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { url, width, height } = node.attrs;

  const onResize = useCallback(
    size => {
      updateAttributes({ width: size.width, height: size.height });
    },
    [updateAttributes]
  );

  useEffect(() => {
    const handler = () => {
      const isActive = document.activeElement === iframeRef.current;

      if (isActive) {
        editor.view.dispatch(
          editor.state.tr.setSelection(
            NodeSelection.create(editor.state.doc, getPos())
          )
        );
      }

      timerRef.current = requestIdleCallback(handler);
    };

    timerRef.current = requestIdleCallback(handler);

    return () => {
      cancelIdleCallback(timerRef.current);
    };
  }, [editor, getPos]);

  return (
    <NodeViewWrapper>
      <Resizable
        width={width}
        height={height}
        onResizeStop={onResize}
        editor={editor}
        getPos={getPos}
        minWidth={"100%"}>
        <StyledContainer>
          {url ? (
            <iframe ref={iframeRef} src={url}></iframe>
          ) : (
            <StyledEmptyContainer>
              <span>请设置外链地址</span>
            </StyledEmptyContainer>
          )}
        </StyledContainer>
      </Resizable>
    </NodeViewWrapper>
  );
};
