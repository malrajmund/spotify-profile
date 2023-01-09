import { AnyAction } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import {
  REFRESH_TOKEN,
  SERVER_API,
  SPOTIFY_API,
} from "../../../config/endpoints";
import {
  setIsAuthed,
  setToken,
} from "../../reducers/userDataReducer/userDataReducer";
import { AppState } from "../../store";

export const baseQuery = fetchBaseQuery({
  baseUrl: SPOTIFY_API,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).userData.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithReauth: any = async (
  args: any,
  api: any,
  extraOptions: AnyAction
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    let refreshToken = JSON.parse(localStorage.getItem("refresh_token")!);
    const refreshReq: any = await fetch(
      SERVER_API + REFRESH_TOKEN + `?refresh_token=${refreshToken}`
    );

    if (refreshReq.data) {
      // api.dispatch(setIsAuthed(true));
      // api.dispatch(setToken(refreshReq.data.token));
      // localStorage.setItem(
      //   "refreshToken",
      //   JSON.stringify(refreshReq.data.refresh_token)
      // );
      // localStorage.setItem("token", refreshReq.data.token);
      // result = await baseQuery(args, api, extraOptions);
      console.log(refreshReq.data);
    }
  }

  return result;
};

export default baseQueryWithReauth;
