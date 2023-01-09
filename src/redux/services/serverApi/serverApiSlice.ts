import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./reauth";

export const serverApiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
