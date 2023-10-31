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
      query: ({ type, limit = "10" }) => ({
        url: `${GET_USER_TOP_ITEMS}/${type}?limit=${limit}&time_range=long_term`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserDataQuery, useLazyGetUserDataQuery, useGetUserTopItemsQuery } = user;
