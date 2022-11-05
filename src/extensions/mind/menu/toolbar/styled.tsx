import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 16px;

  > div {
    display: flex;
    width: 192px;
    margin-top: 8px;
    flex-wrap: wrap;

    ul {
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
      flex-wrap: wrap;

      li {
        width: 80px;
        height: 30px;
        padding: 0 5px;
        font-size: 12px;
        line-height: 30px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: 1px solid rgb(28 31 35 / 8%);

        * {
          font-size: inherit;
        }

        &.active {
          border: 1px solid rgb(0 101 255);
        }

        &:nth-of-type(2n) {
          margin-left: 8px;
        }

        &:nth-of-type(n + 3) {
          margin-top: 8px;
        }
      }
    }
  }
`;
