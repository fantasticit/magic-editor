// import { Button, Popover, Typography } from "@douyinfe/semi-ui";
// import cls from "classnames";
// import { IconStructure } from "components/icons";

import React from "react";

import { Tooltip, Button, Popover } from "../../../../components";
import { ZINDEX_HIGHEST } from "../../../../constants";
import { IconMindTemplate } from "../../../../icons";

import { TEMPLATES } from "../constant";
import { StyledSection } from "./styled";
import i18n from "../../../../i18n";

export const Template = ({ editor, template, setTemplate }) => {
  return (
    <Popover
      zIndex={ZINDEX_HIGHEST}
      spacing={10}
      style={{ padding: "0 12px 12px", overflow: "hidden" }}
      position="bottomLeft"
      trigger="hover"
      getPopupContainer={() => editor.options.element}
      content={
        <StyledSection>
          <span>布局</span>
          <div>
            <ul>
              {TEMPLATES.map(item => {
                return (
                  <li key={item.label} onClick={() => setTemplate(item.value)}>
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </StyledSection>
      }>
      <span>
        <Tooltip editor={editor} title={i18n('mind', 'place')} zLevel="highest">
          <Button icon={<IconMindTemplate />} size="small" />
        </Tooltip>
      </span>
    </Popover>
  );
};
