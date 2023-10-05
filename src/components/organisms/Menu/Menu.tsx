import React from "react";
import { Wrapper } from "./Menu.styles";
import logo from "../../../../src/images/logo.svg";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import { BUTTON_TYPE } from "../../atoms/Button/constant";
import { setIsAuthed } from "../../../redux/reducers/userDataReducer/userDataReducer";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const handleLogut = () => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token");
    dispatch(setIsAuthed(false));
  };

  return (
    <Wrapper>
      <div>
        <Image src={logo.src} fill alt='logo' />
      </div>
      <Button onClick={handleLogut} label='Logout' buttonType={BUTTON_TYPE.PRIMARY} />
    </Wrapper>
  );
};

export default Menu;
