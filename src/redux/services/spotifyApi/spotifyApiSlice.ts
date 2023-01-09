import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./reauth";

export const spotifyApiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: () => ({}),
});
