import { GET_USER_DATA } from "../../../../config/endpoints";
import { spotifyApiSlice } from "../spotifyApiSlice";

const api = spotifyApiSlice;

export const user = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: ({ code }) => ({
        url: `${GET_USER_DATA}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserDataQuery } = user;
