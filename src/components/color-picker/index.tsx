import React, { useMemo, useState } from "react";

import { Dropdown } from "../";

import { StyledEmptyWrap, StyledColorWrap, StyledColorItemWrap } from "./style";

import i18n from "../../i18n";

const colors = [
  "#000000",
  "#262626",
  "#595959",
  "#8C8C8C",
  "#BFBFBF",
  "#D9D9D9",
  "#E9E9E9",
  "#F5F5F5",
  "#FAFAFA",
  "#FFFFFF",
  "#F5222D",
  "#FA541C",
  "#FA8C16",
  "#FADB14",
  "#52C41A",
  "#13C2C2",
  "#1890FF",
  "#2F54EB",
  "#722ED1",
  "#EB2F96",
  "#FFE8E6",
  "#FFECE0",
  "#FFEFD1",
  "#FCFCCA",
  "#E4F7D2",
  "#D3F5F0",
  "#D4EEFC",
  "#DEE8FC",
  "#EFE1FA",
  "#FAE1EB",
  "#FFA39E",
  "#FFBB96",
  "#FFD591",
  "#FFFB8F",
  "#B7EB8F",
  "#87E8DE",
  "#91D5FF",
  "#ADC6FF",
  "#D3ADF7",
  "#FFADD2",
  "#FF4D4F",
  "#FF7A45",
  "#FFA940",
  "#FFEC3D",
  "#73D13D",
  "#36CFC9",
  "#40A9FF",
  "#597EF7",
  "#9254DE",
  "#F759AB",
  "#CF1322",
  "#D4380D",
  "#D46B08",
  "#D4B106",
  "#389E0D",
  "#08979C",
  "#096DD9",
  "#1D39C4",
  "#531DAB",
  "#C41D7F",
  "#820014",
  "#871400",
  "#873800",
  "#614700",
  "#135200",
  "#00474F",
  "#003A8C",
  "#061178",
  "#22075E",
  "#780650"
];

export const ColorPicker: React.FC<{
  title?: string;
  onSetColor: (arg: string | null) => void;
  disabled?: boolean;
}> = ({ children, title = i18n('colorConfig'), onSetColor, disabled = false }) => {
  const [visible, toggleVisible] = useState(false);

  const content = useMemo(
    () =>
      !visible ? null : (
        <div
          style={{
            padding: "12px 16px",
            width: 272
          }}>
          <StyledEmptyWrap onClick={() => onSetColor(null)}>
            <span></span>
            <span>{i18n('components', 'colorPicker', 'transparent')}</span>
          </StyledEmptyWrap>

          <StyledColorWrap>
            {colors.map(color => {
              return (
                <StyledColorItemWrap
                  key={color}
                  onClick={() => onSetColor(color)}>
                  <span style={{ backgroundColor: color }}></span>
                </StyledColorItemWrap>
              );
            })}
          </StyledColorWrap>
        </div>
      ),
    [onSetColor, visible]
  );

  if (disabled)
    return <span style={{ display: "inline-block" }}>{children}</span>;

  return (
    <span>
      <Dropdown
        visible={visible}
        onVisibleChange={toggleVisible}
        zIndex={10000}
        trigger="click"
        position={"bottomLeft"}
        render={content}>
        <span style={{ display: "inline-block" }}>{children}</span>
      </Dropdown>
    </span>
  );
};
