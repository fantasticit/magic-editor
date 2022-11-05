import styled from "styled-components";

export const StyledEmptyWrap = styled.div`
  display: flex;
  cursor: pointer;
  border: 1px solid transparent;
  flex-wrap: nowrap;

  &:hover {
    background-color: var(--semi-color-fill-1);
  }

  > span:first-child {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 8px 0 1px;
    border: 1px solid #e8e8e8;
    border-radius: 2px;

    &::after {
      position: absolute;
      top: 8px;
      left: 0;
      display: block;
      width: 17px;
      height: 0;
      content: "";
      transform: rotate(45deg);
      border-bottom: 2px solid #ff5151;
    }
  }
`;

export const StyledColorWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const StyledColorItemWrap = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  &:nth-of-type(n + 11) {
    margin-top: 4px;
  }

  &:hover {
    border-color: rgb(193 199 208);
  }

  > span {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid var(--semi-color-border);
    border-radius: 2px;
  }
`;
