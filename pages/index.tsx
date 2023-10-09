import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Button from "../src/components/atoms/Button/Button";
import { BUTTON_TYPE } from "../src/components/atoms/Button/constant";
import LoginTemplate from "../src/components/templates/LoginTemplate/LoginTemplate";
import logo from "../src/images/logo.svg";
import { AppState } from "../src/redux/store";
import Profile from "./profile";
import router from "next/router";
import { useEffect, useState } from "react";
import { setToken, setRefreshToken, setIsAuthed } from "../src/redux/reducers/userDataReducer/userDataReducer";

export default function Home() {
  const dispatch = useDispatch();
  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed) as UserState;

  useEffect(() => {
    if ((localStorage.getItem("refresh_token") || "") && (localStorage.getItem("token") || "")) {
      dispatch(setToken(`${localStorage.getItem("token")}`));
      dispatch(setRefreshToken(`${localStorage.getItem("refresh_token")}`));
      dispatch(setIsAuthed(true));
      router.push("/callback");
    } else {
      dispatch(setIsAuthed(false));
      router.push("/");
    }
  }, []);

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
