import { GET_USER_DATA, GET_USER_TOP_ITEMS } from "../../../../config/endpoints";
import { spotifyApiSlice } from "../spotifyApiSlice";

const api = spotifyApiSlice;

export const user = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => ({
        url: `${GET_USER_DATA}`,
        method: "GET",
      }),
    }),
    getUserTopItems: builder.query({
      query: ({ type }) => ({
        url: `${GET_USER_TOP_ITEMS}/${type}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserDataQuery, useLazyGetUserDataQuery } = user;
