import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-block;
  width: 1px;
  height: 18px;
  background: #dee0e3;
`;

export const _Divider = ({ vertical = false, margin = 2 }) => {
  return (
    <StyledDiv
      style={{
        margin: `0 ${margin}px`,
        transform: `rotate(${vertical ? 90 : 0}deg)`
      }}
    />
  );
};

export const Divider = React.memo(_Divider, (prevProps, nextProps) => {
  return prevProps.vertical === nextProps.vertical;
});
