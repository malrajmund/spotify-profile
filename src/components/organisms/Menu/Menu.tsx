import React from "react";
import { Wrapper } from "./Menu.styles";
import logo from "../../../../src/images/logo.svg";
import Image from "next/image";

const Menu = () => {
  return (
    <Wrapper>
      <div>
        <Image src={logo.src} fill alt='logo' />
      </div>
    </Wrapper>
  );
};

export default Menu;
