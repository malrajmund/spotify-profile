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
  cursor: pointer;
  text-align: center;
`;
const secondaryButtonStyles = css`
  border-radius: 10px;
  font-size: inherit;
  padding-block: 12px;
  padding-inline: 26px;
  background-color: ${COLORS.TERTIARY};
  border: 1px solid ${COLORS.GRAY};
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
`;
const secondaryActiveButtonStyles = css`
  border-radius: 10px;
  font-size: inherit;
  padding-block: 12px;
  padding-inline: 26px;
  background-color: ${COLORS.SECONDARY};
  border: 1px solid ${COLORS.TERTIARY};
  color: ${COLORS.TERTIARY};
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
`;

const selectButtonType = (buttonType: string) => {
  switch (buttonType) {
    case BUTTON_TYPE.PRIMARY:
      return primaryButtonStyles;
    case BUTTON_TYPE.SECONDARY:
      return secondaryButtonStyles;
    case BUTTON_TYPE.SECONDARY_ACTIVE:
      return secondaryActiveButtonStyles;
    default:
      return primaryButtonStyles;
  }
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${(props) => props.withShadow && `box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 0px -12px, #1ED760 0px 18px 36px -18px;`};
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
