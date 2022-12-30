import React from "react";

import { Dropdown, Button, Tooltip } from "../../../../components";
import { IconProgress } from "../../../../icons";

import { PROGRESSES } from "../constant";
import i18n from "../../../../i18n";

export const Progress = ({ editor, selectedNode, setProgress }) => {
  return (
    <Dropdown
      trigger="click"
      render={
        <Dropdown.Menu>
          {PROGRESSES.map(progress => {
            return (
              <Dropdown.Item
                key={progress.value}
                onClick={setProgress(progress.value)}>
                {progress.text}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      }>
      <span>
        <Tooltip editor={editor} title={i18n('mind', 'setProgress')} zLevel="highest">
          <Button
            size="small"
            disabled={!selectedNode}
            icon={<IconProgress />}
          />
        </Tooltip>
      </span>
    </Dropdown>
  );
};
