import { Editor } from "@tiptap/core";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import styled from "styled-components";

import { SlashMenuItem } from "./slash";

interface IProps {
  editor: Editor;
  items: SlashMenuItem[];
  command: (command) => void;
}

const StyledContainer = styled.div`
  width: 254px;
  max-height: 240px;
  overflow: auto;

  box-shadow: ${props => props.theme.slashMenuBoxshadow};
  background-color: ${props => props.theme.background};
  border-radius: ${props => props.theme.borderRadius};
`;

const StyledTitle = styled.div`
  padding: 8px 16px;

  color: ${props => props.theme.slashMenuTitleColor};
`;

const StyledItem = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;

  padding: 8px 16px;
  height: 32px;
  color: ${props => props.theme.slashMenuColor};

  background-color: ${props =>
    props.active ? props.theme.slashMenuHoverBgColor : "transparent"};

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.slashMenuHoverBgColor};
  }

  > div {
    display: flex;
    align-items: center;
  }
`;

const StyledText = styled.div`
  margin-left: 8px;
`;

const StyledSlash = styled.div`
  color: ${props => props.theme.slashMenuTitleColor};
`;

export const SlashMenuView: React.FC<IProps> = forwardRef((props, ref) => {
  const $container = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = index => {
    const command = props.items[index];

    if (command) {
      props.command(command);
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useEffect(() => {
    if (Number.isNaN(selectedIndex + 1)) return;
    const el = $container?.current?.querySelector(
      `.slash-menu-item:nth-of-type(${selectedIndex + 1})`
    );
    el && scrollIntoView(el, { behavior: "smooth", scrollMode: "if-needed" });
  }, [selectedIndex]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    }
  }));

  return (
    <StyledContainer ref={$container}>
      {props.items.length ? (
        props.items.map((item, index) => {
          return "divider" in item ? (
            <StyledTitle className="slash-menu-item">{item.title}</StyledTitle>
          ) : (
            <StyledItem
              className="slash-menu-item"
              active={selectedIndex === index}
              onClick={() => selectItem(index)}>
              <div>
                {item.icon}
                <StyledText>{item.text}</StyledText>
              </div>
              <div>
                <StyledSlash>{item.slash}</StyledSlash>
              </div>
            </StyledItem>
          );
        })
      ) : (
        <StyledTitle>没有找到结果</StyledTitle>
      )}
    </StyledContainer>
  );
});

SlashMenuView.displayName = "SlashMenuView";
