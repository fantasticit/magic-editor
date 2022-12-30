import React from "react";

import { ColorPicker, Button, Tooltip } from "../../../../components";
import { IconFontColor } from "../../../../icons";
import i18n from "../../../../i18n";

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
      <Tooltip editor={editor} title={i18n('color')} zLevel="highest">
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
