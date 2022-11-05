import React from "react";

import { Button, Popover } from "../../../../components";
import { IconHelpCircle } from "../../../../icons";

const HELP_MESSAGE = [
  { key: "新增同级节点", value: "Enter 键" },
  { key: "新增子节点", value: "Tab 键" },
  { key: "编辑节点文字", value: "双击节点" },
  { key: "编辑节点菜单", value: "在节点右键" }
];

const HELP_MESSAGE_STYLE = {
  width: "200px"
};

export const Help = () => {
  return (
    <Popover
      zIndex={10000}
      spacing={10}
      style={{ padding: 12, overflow: "hidden" }}
      position="bottomLeft"
      content={
        <section>
          {HELP_MESSAGE.map(msg => {
            return (
              <div>
                {msg.key}：{msg.value}
              </div>
            );
          })}
        </section>
      }>
      <Button size="small" icon={<IconHelpCircle />} />
    </Popover>
  );
};
