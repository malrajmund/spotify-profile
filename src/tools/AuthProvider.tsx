import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setRefreshToken, setIsAuthed } from "../redux/reducers/userDataReducer/userDataReducer";

export const AuthProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log("test", localStorage.getItem("refresh_token"));
    if (localStorage.getItem("refresh_token") !== "undefined" && localStorage.getItem("token") !== "undefined") {
      dispatch(setToken(`${localStorage.getItem("token")}`));
      dispatch(setRefreshToken(`${localStorage.getItem("refresh_token")}`));
      dispatch(setIsAuthed(true));
    } else {
      router.push("/");
    }
  }, []);
  return <>{children}</>;
};
