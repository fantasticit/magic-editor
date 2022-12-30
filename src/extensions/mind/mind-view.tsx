import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import React, { useCallback, useMemo, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import deepEqual from "deep-equal";
import styled from "styled-components";

import { IconMind, IconZoomIn, IconZoomOut } from "../../icons";
import { Resizable, Space, Button, Tooltip } from "../../components";
import { MAX_ZOOM, MIN_ZOOM, ZOOM_STEP } from "../../constants";
import { clamp, svgToDataURI } from "../../utilities";
import i18n from "../../i18n";

const StyledContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow: visible;
  line-height: 0;

  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};

  overflow: hidden;
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

const _MindView: React.FC<NodeViewProps> = ({
  editor,
  getPos,
  node,
  updateAttributes
}) => {
  const { width, height, svg } = node.attrs;
  const [visible, toggleVisible] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [svgBgColor, svgToImgSrc] = useMemo(() => {
    if (!svg) return ["transparent", null];

    try {
      const matches = svg.match(/(?:background:\s)(.)+(?=;\s)/);

      return [
        matches && matches[0] ? matches[0].split(":")[1].trim() : "transparent",
        svgToDataURI(svg)
      ];
    } catch (e) {
      return "transparent";
    }
  }, [svg]);

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
    <NodeViewWrapper style={{ background: svgBgColor }}>
      <VisibilitySensor onChange={onViewportChange}>
        <Resizable
          editor={editor}
          getPos={getPos}
          width={width}
          height={height}
          minWidth={"100%"}
          onResizeStop={onResize}>
          <StyledContainer>
            {visible &&
              (svgToImgSrc ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    transition: `transform ease-in-out .2s`,
                    transform: `scale(${zoom})`
                  }}>
                  <img
                    src={svgToImgSrc}
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </div>
              ) : null)}

            <StyledTitleContainer>
              <Space>
                <StyledIconContainer>
                  <IconMind />
                </StyledIconContainer>
                {i18n('mind', 'title')}
              </Space>
            </StyledTitleContainer>

            <StyledToolbarContainer>
              <Space spacing={4}>
                <Tooltip editor={editor} title={i18n('zoomIn')}>
                  <Button
                    size="small"
                    icon={<IconZoomIn />}
                    onClick={changeZoom("in")}
                  />
                </Tooltip>

                <Tooltip editor={editor} title={i18n('zoomOut')}>
                  <Button
                    size="small"
                    icon={<IconZoomOut />}
                    onClick={changeZoom("out")}
                  />
                </Tooltip>
              </Space>
            </StyledToolbarContainer>
          </StyledContainer>
        </Resizable>
      </VisibilitySensor>
    </NodeViewWrapper>
  );
};

export const MindView = React.memo(_MindView, (prevProps, nextProps) => {
  if (deepEqual(prevProps.node.attrs, nextProps.node.attrs)) {
    return true;
  }
  return false;
});
