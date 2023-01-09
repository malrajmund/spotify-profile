import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { SERVER_API } from "../../../config/endpoints";
import { AppState } from "../../store";

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_API,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).userData.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export default baseQuery;
