import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ExportOpts } from "@excalidraw/excalidraw/types/types";
import deepEqual from "deep-equal";
import styled from "styled-components";

import { IconExcalidraw, IconZoomIn, IconZoomOut } from "../../icons";
import { Resizable, Space, Loading, Button, Tooltip } from "../../components";
import { MAX_ZOOM, MIN_ZOOM, ZOOM_STEP } from "../../constants";
import { clamp, svgToDataURI } from "../../utilities";

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

const _ExcalidrawView: React.FC<NodeViewProps> = ({
  editor,
  getPos,
  node,
  updateAttributes
}) => {
  const exportToSvgRef = useRef<
    | ((
        arg: Omit<ExportOpts, "getDimensions"> & {
          exportPadding?: number | undefined;
        }
      ) => Promise<SVGSVGElement>)
    | null
  >(null);
  const { data, width, height } = node.attrs;
  const [svg, setSvg] = useState<string | null>(null);
  const [loading, toggleLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
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

  useEffect(() => {
    import("@excalidraw/excalidraw")
      .then(res => {
        // @ts-ignore
        exportToSvgRef.current = res.exportToSvg;
      })
      .catch(setError)
      .finally(() => toggleLoading(false));
  }, [toggleLoading, data]);

  useEffect(() => {
    const setContent = async () => {
      if (loading || error || !visible || !data) return;

      // @ts-ignore
      const svg: SVGElement = await exportToSvgRef.current(JSON.parse(data));
      svg.setAttribute("display", "block");
      setSvg(svgToDataURI(svg?.outerHTML));
    };

    setContent();
  }, [data, loading, error, visible]);

  return (
    <NodeViewWrapper>
      <VisibilitySensor onChange={onViewportChange}>
        <Resizable
          editor={editor}
          getPos={getPos}
          width={width}
          height={height}
          minWidth={"100%"}
          onResizeStop={onResize}>
          <StyledContainer>
            {error && (
              <div
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <span>{error.message || error}</span>
              </div>
            )}

            {loading && <Loading></Loading>}

            {!loading && !error && visible && (
              <div
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: `scale(${zoom})`,
                  transition: `transform ease-in-out .2s`
                }}>
                {svg ? <img src={svg} /> : null}
              </div>
            )}

            <StyledTitleContainer>
              <Space>
                <StyledIconContainer>
                  <IconExcalidraw />
                </StyledIconContainer>
                绘图
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
          </StyledContainer>
        </Resizable>
      </VisibilitySensor>
    </NodeViewWrapper>
  );
};

export const ExcalidrawView = React.memo(
  _ExcalidrawView,
  (prevProps, nextProps) => {
    if (deepEqual(prevProps.node.attrs.svg, nextProps.node.attrs)) {
      return true;
    }
    return false;
  }
);
