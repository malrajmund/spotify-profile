import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "../src/components/atoms/Button/Button";
import { BUTTON_TYPE } from "../src/components/atoms/Button/constant";
import LoginTemplate from "../src/components/templates/LoginTemplate/LoginTemplate";
import logo from "../src/images/logo.svg";
import { AppState } from "../src/redux/store";
import Profile from "./profile";

export default function Home() {
  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed);
  return isAuthed ? (
    <Profile />
  ) : (
    <LoginTemplate>
      <div>
        <Image src={logo.src} fill alt='logo' />
      </div>
      <Button href='api/login' isAnchor buttonType={BUTTON_TYPE.PRIMARY} label='Log in to your profie' withShadow />
    </LoginTemplate>
  );
}
