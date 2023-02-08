import React from "react";
import { AnchorButtonWrapper, ButtonWrapper } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonType, isAnchor, href, withShadow }) => {
  return isAnchor ? (
    <AnchorButtonWrapper href={href} buttonType={buttonType} onClick={onClick ? onClick : undefined} withShadow={withShadow}>
      {label}
    </AnchorButtonWrapper>
  ) : (
    <ButtonWrapper buttonType={buttonType} onClick={onClick ? onClick : undefined} withShadow={withShadow}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
