import React from "react";

import { Dropdown, Button, Tooltip, Upload } from "../../../../components";
import { IconImage } from "../../../../icons";
import i18n from "../../../../i18n";

export const Image = ({ editor, disabled, image, setImage }) => {
  return (
    <Dropdown
      stopPropagation
      zIndex={10000}
      trigger="click"
      position={"bottomLeft"}
      render={
        <div style={{ padding: 12 }}>
          <Upload editor={editor} mimeTypes={["image/*"]} onOK={setImage} />
        </div>
      }>
      <span style={{ display: "inline-block" }}>
        <Tooltip editor={editor} title={i18n('mind', 'image')} zLevel="highest">
          <Button disabled={disabled} icon={<IconImage />} />
        </Tooltip>
      </span>
    </Dropdown>
  );
};
