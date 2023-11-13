import React from "react";
import { MenuItemsWrapper, Wrapper } from "./Menu.styles";
import logo from "../../../../src/images/logo.svg";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import { BUTTON_TYPE } from "../../atoms/Button/constant";
import { setIsAuthed } from "../../../redux/reducers/userDataReducer/userDataReducer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import MenuItem from "../../molecules/MenuItem/MenuItem";

const Menu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogut = () => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token");
    dispatch(setIsAuthed(false));
    router.push("/");
  };

  return (
    <Wrapper>
      <div>
        <Image src={logo.src} fill alt='logo' />
      </div>
      <MenuItemsWrapper>
        <MenuItem title='Profile' href='/profile' />
        <MenuItem title='Tracks' href='/tracks' />
        <MenuItem title='Artists' href='/artists' />
        <MenuItem title='Recent' href='/recent' />
      </MenuItemsWrapper>
      <Button onClick={handleLogut} label='Logout' buttonType={BUTTON_TYPE.PRIMARY} />
    </Wrapper>
  );
};

export default Menu;
