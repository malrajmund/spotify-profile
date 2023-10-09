import React, { useEffect } from "react";
import Menu from "../../organisms/Menu/Menu";
import { Wrapper } from "./LoginTemplate.styles";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

const LoginTemplate = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LoginTemplate;
