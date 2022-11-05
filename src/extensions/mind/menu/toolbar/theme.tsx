import React from "react";

import { Button, Tooltip, Popover } from "../../../../components";
import { ZINDEX_HIGHEST } from "../../../../constants";
import { IconMindTheme } from "../../../../icons";

import { THEMES } from "../constant";
import { StyledSection } from "./styled";

export const Theme = ({ editor, theme, setTheme }) => {
  return (
    <Popover
      zIndex={ZINDEX_HIGHEST}
      spacing={10}
      style={{ padding: "0 12px 12px", overflow: "hidden" }}
      position="bottomLeft"
      getPopupContainer={() => editor.options.element}
      content={
        <StyledSection>
          <span>主题</span>
          <div>
            <ul>
              {THEMES.map(item => {
                return (
                  <li
                    key={item.label}
                    style={item.style || {}}
                    onClick={() => setTheme(item.value)}>
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </StyledSection>
      }>
      <span>
        <Tooltip editor={editor} title="主题" zLevel="highest">
          <Button icon={<IconMindTheme />} size="small" />
        </Tooltip>
      </span>
    </Popover>
  );
};
