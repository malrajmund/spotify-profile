import React from "react";
import Menu from "../../organisms/Menu/Menu";
import { Wrapper } from "./LoginTemplate.styles";

const LoginTemplate = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LoginTemplate;
