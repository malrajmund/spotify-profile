import styled, { css } from "styled-components";
import COLORS from "../../../config/styles/colors";

export const MenuItemWrapper = styled.div<MenuItemWrapper>`
  height: 70px;
  background-color: ${(props) => (props.isActive ? `${COLORS.TERTIARY}` : `${COLORS.BLACK}`)};
  position: relative;
  transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    height: 100%;
    width: 100%;
    color: ${COLORS.GRAY};
    font-weight: 600;
    font-size: 14px;
  }
  ::after {
    display: ${(props) => (props.isActive ? "block" : `none`)};
    height: 100%;
    position: absolute;
    width: 3px;
    content: " ";
    background-color: ${COLORS.SECONDARY};
    right: 0;
    top: 0;
  }
  :hover {
    transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
    background-color: ${COLORS.TERTIARY};
    ::after {
      display: block;
      height: 100%;
      position: absolute;
      width: 3px;
      content: " ";
      background-color: ${COLORS.SECONDARY};
      right: 0;
      top: 0;
    }
  }
`;
