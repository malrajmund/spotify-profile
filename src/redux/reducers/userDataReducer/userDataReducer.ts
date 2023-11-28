import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserId: (state: UserState, action: PayloadAction<number>) => ({
      ...state,
      userId: action.payload,
    }),
    setToken: (state: UserState, action: PayloadAction<string | null>) => ({
      ...state,
      token: action.payload,
    }),
    setRefreshToken: (state: UserState, action: PayloadAction<string>) => ({
      ...state,
      refreshToken: action.payload,
    }),
    setIsAuthed: (state: UserState, action: PayloadAction<boolean>) => ({
      ...state,
      isAuthed: action.payload,
    }),
    setRoles: (state: UserState, action: PayloadAction<string[]>) => ({
      ...state,
      roles: action.payload,
    }),
    setUserData: (state: UserState, action: PayloadAction<any>) => ({
      ...state,
      info: action.payload,
    }),
  },
});

export const { setUserId, setToken, setRefreshToken, setIsAuthed, setRoles, setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
