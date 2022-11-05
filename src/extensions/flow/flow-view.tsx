import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import React, { useCallback, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import deepEqual from "deep-equal";
import styled from "styled-components";

import { IconFlow, IconZoomIn, IconZoomOut } from "../../icons";
import { Resizable, Space, Button, Tooltip } from "../../components";
import { MAX_ZOOM, MIN_ZOOM, ZOOM_STEP } from "../../constants";
import { clamp } from "../../utilities";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  max-width: 100%;
  width: 100%;
  height: 100%;
  line-height: 0;

  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};

  overflow: auto;
`;

const StyledTitleContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`;

const StyledIconContainer = styled.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

const StyledToolbarContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  padding: 2px 4px;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

const _FlowView: React.FC<NodeViewProps> = ({
  editor,
  getPos,
  node,
  updateAttributes
}) => {
  const { width, height, svg } = node.attrs;
  const [visible, toggleVisible] = useState(false);
  const [zoom, setZoom] = useState(0.85);

  const changeZoom = useCallback((type: "in" | "out") => {
    return () => {
      setZoom(currentZoom => {
        const nextZoom = clamp(
          type === "out" ? currentZoom - ZOOM_STEP : currentZoom + ZOOM_STEP,
          MIN_ZOOM,
          MAX_ZOOM
        );
        return nextZoom;
      });
    };
  }, []);

  const onResize = useCallback(
    size => {
      updateAttributes({ width: size.width, height: size.height });
    },
    [updateAttributes]
  );

  const onViewportChange = useCallback(
    visible => {
      if (visible) {
        toggleVisible(true);
      }
    },
    [toggleVisible]
  );

  return (
    <NodeViewWrapper>
      <VisibilitySensor onChange={onViewportChange}>
        {/* <div style={{ height: 240 }}>1</div> */}
        <Resizable
          editor={editor}
          getPos={getPos}
          width={width}
          height={height}
          minWidth={"100%"}
          onResizeStop={onResize}>
          <StyledTitleContainer>
            <Space>
              <StyledIconContainer>
                <IconFlow />
              </StyledIconContainer>
              流程图
            </Space>
          </StyledTitleContainer>

          <StyledToolbarContainer>
            <Space spacing={4}>
              <Tooltip editor={editor} title="放大">
                <Button
                  size="small"
                  icon={<IconZoomIn />}
                  onClick={changeZoom("in")}
                />
              </Tooltip>

              <Tooltip editor={editor} title="缩小">
                <Button
                  size="small"
                  icon={<IconZoomOut />}
                  onClick={changeZoom("out")}
                />
              </Tooltip>
            </Space>
          </StyledToolbarContainer>

          <StyledContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "100%",
                minHeight: "100%"
              }}>
              {visible && (
                <div
                  style={{
                    transform: `scale(${zoom})`,
                    transition: `transform ease-in-out .2s`
                  }}>
                  <img src={svg} />
                </div>
              )}
            </div>
          </StyledContainer>
        </Resizable>
      </VisibilitySensor>
    </NodeViewWrapper>
  );
};

export const FlowView = React.memo(_FlowView, (prevProps, nextProps) => {
  if (deepEqual(prevProps.node.attrs, nextProps.node.attrs)) {
    return true;
  }
  return false;
});
