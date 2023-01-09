import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./reducers/userDataReducer/userDataReducer";
import { serverApiSlice } from "./services/serverApi/serverApiSlice";
import { spotifyApiSlice } from "./services/spotifyApi/spotifyApiSlice";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    [spotifyApiSlice.reducerPath]: spotifyApiSlice.reducer,
    [serverApiSlice.reducerPath]: serverApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      serverApiSlice.middleware,
      spotifyApiSlice.middleware
    ),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
