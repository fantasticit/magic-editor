import React from "react";

import { ColorPicker, Button, Tooltip } from "../../../../components";
import { IconFontColor } from "../../../../icons";

export const FontColor = ({
  editor,
  selectedNode,
  setFontColor,
  textColor
}) => {
  return (
    <ColorPicker
      onSetColor={color => {
        setFontColor(color);
      }}>
      <Tooltip editor={editor} title="文本色" zLevel="highest">
        <Button
          disabled={!selectedNode}
          icon={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
              <IconFontColor />
              <span
                style={{
                  width: 12,
                  height: 2,
                  backgroundColor: textColor
                }}></span>
            </div>
          }
        />
      </Tooltip>
    </ColorPicker>
  );
};
