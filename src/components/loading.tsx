import React from "react";
import { Spin } from "@douyinfe/semi-ui";

const LoadingWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
};

export const Loading = ({ text }: { text?: string }) => {
  return (
    <div style={LoadingWrapStyle}>
      <Spin spinning></Spin>
      <p style={{ marginTop: "1em" }}>{text}</p>
    </div>
  );
};
