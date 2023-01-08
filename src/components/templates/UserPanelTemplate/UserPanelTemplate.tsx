import React from "react";
import Menu from "../../organisms/Menu/Menu";
import { Main, Wrapper } from "./UserPanelTemplate.styles";

const UserPanelTemplate = ({ children }: any) => {
  return (
    <Wrapper>
      <Menu />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default UserPanelTemplate;
