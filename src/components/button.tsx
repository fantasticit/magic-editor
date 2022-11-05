import React from "react";
import styled from "styled-components";

type Size = "small" | "normal" | "large";
const SizeMap: Record<Size, number> = {
  small: 4,
  normal: 6,
  large: 10
};

type ButtonType = "primary" | "normal";

type Props = {
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: Size;
  type?: ButtonType;
  onClick?: () => void;
  style?: React.CSSProperties;
};

type StyledButtonProps = Pick<Props, "active" | "size"> & {
  buttonType: ButtonType;
};

const StyledButton = styled.button<StyledButtonProps>`
  margin: 0;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: ${props => (props.size ? SizeMap[props.size] : 6)}px;
  background: ${props =>
    props.buttonType !== "normal"
      ? props.theme[props.buttonType!]
      : "transparent"};
  border: 0 solid transparent;
  border-radius: 2px;

  box-shadow: none;
  outline: none;

  user-select: none;
  cursor: pointer;

  color: ${props =>
    props.buttonType === "normal" ? "hsl(214deg 11% 12% / 80%)" : "#fff"};
  font-size: 14px;
  font-weight: 600;

  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: ${props =>
      props.buttonType === "normal"
        ? "rgb(46 50 56 / 15%)"
        : props.theme[props.buttonType!]};
  }

  ${props =>
    props.active &&
    `color: rgb(51 112 255);
      background: rgb(51 112 255 / 10%);
      `}
`;

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  active,
  disabled,
  icon,
  size = "normal",
  type = "normal",
  onClick,
  style,
  children
}) => {
  return (
    <StyledButton
      size={size}
      active={active}
      buttonType={type}
      style={style}
      disabled={disabled}
      onClick={onClick}>
      {icon || children}
    </StyledButton>
  );
};
