import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Button from "../src/components/atoms/Button/Button";
import { BUTTON_TYPE } from "../src/components/atoms/Button/constant";
import LoginTemplate from "../src/components/templates/LoginTemplate/LoginTemplate";
import logo from "../src/images/logo.svg";
import { AppState } from "../src/redux/store";
import Profile from "./profile";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setToken, setRefreshToken, setIsAuthed, setUserData } from "../src/redux/reducers/userDataReducer/userDataReducer";
import { useGetTokenMutation } from "../src/redux/services/serverApi/auth/auth";
import { useLazyGetUserDataQuery } from "../src/redux/services/spotifyApi/user/user";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed) as UserState;
  const userData = useSelector<AppState>((state) => state.userData) as UserState;

  const [getUserData] = useLazyGetUserDataQuery();
  const [getToken] = useGetTokenMutation();

  useEffect(() => {
    if (userData.isAuthed) {
      getUserData({})
        .unwrap()
        .then((fulfilled) => {
          dispatch(setUserData(fulfilled));
        });
    }
  }, [userData.isAuthed]);

  useEffect(() => {
    if (router.query.code && !(localStorage.getItem("token") || "")) {
      getToken({ code: router.query.code })
        .unwrap()
        .then((fulfilled) => {
          const data = fulfilled.data;
          console.log(data);
          if (!data.error) {
            console.log(data);
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            dispatch(setToken(data.access_token));
            dispatch(setRefreshToken(data.refresh_token));
            dispatch(setIsAuthed(true));
            router.push("/profile");
          }
        })
        .catch((error) => console.error(error));
    }
  }, [router.query]);

  useEffect(() => {
    if ((localStorage.getItem("refresh_token") || "") && (localStorage.getItem("token") || "")) {
      dispatch(setToken(localStorage.getItem("token")));
      dispatch(setRefreshToken(`${localStorage.getItem("refresh_token")}`));
      dispatch(setIsAuthed(true));
      router.push("/profile");
    } else {
      dispatch(setIsAuthed(false));
    }
  }, []);

  return (
    <LoginTemplate>
      <div>
        <Image src={logo.src} fill alt='logo' />
      </div>
      <Button href='api/login' isAnchor buttonType={BUTTON_TYPE.PRIMARY} label='Log in to your profie' withShadow />
    </LoginTemplate>
  );
}
