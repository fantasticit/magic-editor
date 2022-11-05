import React, { useCallback, useEffect, useRef, useState } from "react";
import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import styled from "styled-components";

import { getEditorProvider } from "../../editor/provider";
import { Input, Popover, Space, Tag } from "../../components";
import { IconCheck } from "../../icons";

const StyledTag = styled.span`
  font-size: 12px;
  line-height: 16px;
  padding: 2px 4px;
  border-radius: ${props => props.theme.borderRadius};
  vertical-align: text-top;
  cursor: pointer;
`;

export const STATUS_COLORS: Array<[string, string, string, string]> = [
  // 按钮背景 文字颜色 背景颜色 边框颜色
  ["rgb(223, 225, 230)", "#42526E", "#DFE1E6", "rgb(80, 95, 121)"],
  ["rgb(234, 230, 255)", "#403294", "#EAE6FF", "rgb(82, 67, 170)"],
  ["rgb(222, 235, 255)", "#0747A6", "#DEEBFF", "rgb(0, 82, 204)"],
  ["rgb(255, 235, 230)", "#BF2600", "#FFECE6", "rgb(222, 53, 11)"],
  ["rgb(255, 240, 179)", "#172B4D", "#FFF0B3", "rgb(255, 153, 31)"],
  ["rgb(227, 252, 239)", "#006644", "#E3FCEF", "rgb(0, 135, 90)"]
];

export const StatusView: React.FC<NodeViewProps> = ({
  editor,
  node,
  updateAttributes
}) => {
  const isEditable = editor.isEditable;
  const {
    createUserId,
    showPickerOnCreate,
    color,
    bgcolor,
    borderColor,
    text
  } = node.attrs;

  const ref = useRef<HTMLInputElement>(null);
  const [visible, toggleVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentBgColor, setCurrentBgColor] = useState(bgcolor);
  const [currentBorderColor, setCurrentBorderColorColor] = useState(
    borderColor
  );
  const [currentText, setCurrentText] = useState(text);

  const content = (
    <StyledTag
      style={{
        backgroundColor: currentBgColor,
        border: `1px solid ${currentBorderColor}`
      }}
      onClick={() => toggleVisible(true)}>
      <span style={{ color: currentColor }}>
        {currentText || "请设置状态内容"}
      </span>
    </StyledTag>
  );

  const setColor = useCallback(
    (color: typeof STATUS_COLORS[0]) => () => {
      setCurrentColor(color[1]);
      setCurrentBgColor(color[2]);
      setCurrentBorderColorColor(color[3]);
    },
    [updateAttributes]
  );

  const onVisibleChange = useCallback(
    (value: boolean) => {
      toggleVisible(value);

      if (!value) {
        updateAttributes({
          showPickerOnCreate: false,
          color: currentColor,
          bgcolor: currentBgColor,
          borderColor: currentBorderColor,
          text: currentText
        });
      }
    },
    [currentColor, currentBgColor, currentBorderColor, currentText]
  );

  useEffect(() => {
    const editorProvider = getEditorProvider(editor);
    const currentUser = editorProvider.userProvider.getCurrentUser();

    if (showPickerOnCreate && currentUser && currentUser.id === createUserId) {
      toggleVisible(true);
      setTimeout(() => ref.current?.focus(), 200);
    }
  }, [editor, updateAttributes, showPickerOnCreate, createUserId]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        ref.current?.focus();
      }, 200);
    }
  }, [visible]);

  return (
    <NodeViewWrapper as="span">
      {isEditable ? (
        <Popover
          showArrow
          position="bottomLeft"
          trigger={"custom"}
          visible={visible}
          onVisibleChange={onVisibleChange}
          onClickOutSide={() => {
            onVisibleChange(false);
          }}
          content={
            <div style={{ width: 184, height: 65 }}>
              <div style={{ marginBottom: 8 }}>
                <Input
                  ref={ref}
                  placeholder="输入状态"
                  value={currentText}
                  onChange={setCurrentText}
                />
              </div>
              <Space>
                {STATUS_COLORS.map(color => {
                  return (
                    <Tag
                      key={color[0]}
                      style={{
                        width: 24,
                        height: 24,
                        cursor: "pointer",
                        background: color[0],
                        border: `1px solid ${color[3]}`
                      }}
                      type="solid"
                      onClick={setColor(color)}>
                      {currentColor === color[1] ? (
                        <IconCheck style={{ color: color[1] }} />
                      ) : null}
                    </Tag>
                  );
                })}
              </Space>
            </div>
          }>
          {content}
        </Popover>
      ) : (
        content
      )}
    </NodeViewWrapper>
  );
};
