import styled, { css } from "styled-components";
import COLORS from "../../../config/styles/colors";
import { BUTTON_TYPE } from "./constant";

const primaryButtonStyles = css`
  border-radius: 500px;
  font-size: inherit;
  padding-block: 14px;
  padding-inline: 32px;
  background-color: ${COLORS.SECONDARY};
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`;
const secondaryButtonStyles = css``;

const selectButtonType = (buttonType: string) => {
  switch (buttonType) {
    case BUTTON_TYPE.PRIMARY:
      return primaryButtonStyles;
    case BUTTON_TYPE.SECONDARY:
      return secondaryButtonStyles;
    default:
      return primaryButtonStyles;
  }
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${(props) => props.withShadow && `    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 0px -12px, #1ED760 0px 18px 36px -18px;`};

  ${(props) => selectButtonType(props.buttonType)};
`;

export const AnchorButtonWrapper = styled.a<ButtonWrapperProps>`
  position: relative;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: inherit;
    box-shadow: 0px 0px 400px 5px #1ed760;
    transition: opacity 0.5s ease-in-out;
  }
  :hover:after {
    opacity: 1;
  }

  ${(props) => selectButtonType(props.buttonType)};
`;
