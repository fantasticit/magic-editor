import React from "react";

import { Button, Popover } from "../../../../components";
import { IconHelpCircle } from "../../../../icons";
import i18n from "../../../../i18n";

const HELP_MESSAGE = [
  { key: i18n('mind', 'help', 'addSame'), value: i18n('mind', 'help', 'addSameHelp') },
  { key: i18n('mind', 'help', 'addChild'), value: i18n('mind', 'help', 'addChildHelp') },
  { key: i18n('mind', 'help', 'editText'), value: i18n('mind', 'help', 'editTextHelp') },
  { key: i18n('mind', 'help', 'editMenu'), value: i18n('mind', 'help', 'editMenuHelp') }
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
