import React from "react";
import { Spin } from "@douyinfe/semi-ui";

const LoadingWrapStyle = {
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export const Loading = () => {
  return (
    <div style={LoadingWrapStyle}>
      <Spin></Spin>
    </div>
  );
};
