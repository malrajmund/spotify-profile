import Image from "next/image";
import Button from "../src/components/atoms/Button/Button";
import { BUTTON_TYPE } from "../src/components/atoms/Button/constant";
import LoginTemplate from "../src/components/templates/LoginTemplate/LoginTemplate";
import logo from "../src/images/logo.svg";

export default function Home() {
  return (
    <LoginTemplate>
      <div>
        <Image src={logo.src} fill alt='logo' />
      </div>
      <Button href='api/login' isAnchor buttonType={BUTTON_TYPE.PRIMARY} label='Log in to your profie' withShadow />
    </LoginTemplate>
  );
}
