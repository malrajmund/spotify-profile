import React from "react";
import Menu from "../../organisms/Menu/Menu";
import { Main, Wrapper } from "./UserPanelTemplate.styles";
import ProtectedPage from "../../../tools/ProtectedPage/ProtectedPage";

const UserPanelTemplate = ({ children }: any) => {
  return (
    <ProtectedPage>
      <Wrapper>
        <Menu />
        <Main>{children}</Main>
      </Wrapper>
    </ProtectedPage>
  );
};

export default UserPanelTemplate;
