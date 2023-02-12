import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setRefreshToken, setIsAuthed } from "../redux/reducers/userDataReducer/userDataReducer";
import { AppState } from "../redux/store";

export const AuthProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed) as UserState;

  useEffect(() => {
    if (
      localStorage.getItem("refresh_token") !== "undefined" &&
      localStorage.getItem("token") !== "undefined" &&
      localStorage.getItem("refresh_token") !== null &&
      localStorage.getItem("token") !== null
    ) {
      dispatch(setToken(`${localStorage.getItem("token")}`));
      dispatch(setRefreshToken(`${localStorage.getItem("refresh_token")}`));
      dispatch(setIsAuthed(true));
      router.push("/callback");
    } else {
      dispatch(setIsAuthed(false));
      router.push("/");
    }
    setIsLoading(false);
  }, [isAuthed]);

  return !isLoading && <>{children}</>;
};
