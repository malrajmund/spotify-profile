import React from "react";
import { AnchorButtonWrapper, ButtonWrapper } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonType, isAnchor = false, href, withShadow, target }) => {
  return isAnchor ? (
    <AnchorButtonWrapper href={href} buttonType={buttonType} onClick={onClick ? onClick : undefined} withShadow={withShadow} target={target}>
      {label}
    </AnchorButtonWrapper>
  ) : (
    <ButtonWrapper buttonType={buttonType} onClick={onClick ? onClick : undefined} withShadow={withShadow}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
