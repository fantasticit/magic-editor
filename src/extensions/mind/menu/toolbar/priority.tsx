// import { IconClock } from "@douyinfe/semi-icons";
// import { Button, Dropdown, Tooltip } from "@douyinfe/semi-ui";
import React from "react";

import { Dropdown, Button, Tooltip } from "../../../../components";
import { IconPriority } from "../../../../icons";

import { PRIORITIES } from "../constant";
import i18n from "../../../../i18n";

export const Priority = ({ editor, selectedNode, setPriority }) => {
  return (
    <Dropdown
      trigger="click"
      render={
        <Dropdown.Menu>
          {PRIORITIES.map(item => {
            return (
              <Dropdown.Item key={item.value} onClick={setPriority(item.value)}>
                {item.text}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      }>
      <span>
        <Tooltip editor={editor} title={i18n('mind', 'priority')} zLevel="highest">
          <Button
            size="small"
            disabled={!selectedNode}
            icon={<IconPriority />}
          />
        </Tooltip>
      </span>
    </Dropdown>
  );
};
