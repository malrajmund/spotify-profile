import styled from "styled-components";
import COLORS from "../../../config/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BLACK};
  position: fixed;
  justify-content: space-between;
  height: 100%;
  width: 200px;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.75);
  clip-path: inset(0px -15px 0px 0px);
  > div:first-of-type {
    margin: 50px 20px;
    height: 45px;
    > img {
      position: static !important;
    }
  }
  > button {
    margin: 50px 20px;
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 30%;
`;
