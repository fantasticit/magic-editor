import React, { forwardRef } from "react";
import styled from "styled-components";

export type IconProps = {
  style?: React.CSSProperties;
  onClick?: () => void;
  svg: React.ReactNode;
};

const DEFAULT_EMPTY_STYLE = {};

const StyledSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ style = DEFAULT_EMPTY_STYLE, svg }, ref) => {
    return (
      <StyledSpan ref={ref} style={style}>
        {svg}
      </StyledSpan>
    );
  }
);

export const buildIcon = (svg: IconProps["svg"]) =>
  forwardRef<HTMLSpanElement, Omit<IconProps, "svg">>((props, ref) => (
    <Icon ref={ref} svg={svg} {...props}></Icon>
  ));
