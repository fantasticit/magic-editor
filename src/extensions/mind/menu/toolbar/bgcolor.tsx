import React from "react";

import { ColorPicker, Button, Tooltip } from "../../../../components";
import { IconBackgroundColor } from "../../../../icons";
import i18n from "../../../../i18n";

export const BgColor = ({
  editor,
  bgColor,
  selectedNode,
  setBackgroundColor
}) => {
  return (
    <ColorPicker
      onSetColor={color => {
        setBackgroundColor(color);
      }}>
      <Tooltip editor={editor} title={i18n('style', 'background')} zLevel="highest">
        <Button
          disabled={!selectedNode}
          icon={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
              <IconBackgroundColor />
              <span
                style={{
                  width: 12,
                  height: 2,
                  backgroundColor: bgColor
                }}></span>
            </div>
          }
        />
      </Tooltip>
    </ColorPicker>
  );
};
