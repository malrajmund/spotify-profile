import { GET_USER_DATA, GET_USER_TOP_ITEMS, PLAYER } from "../../../../config/endpoints";
import { spotifyApiSlice } from "../spotifyApiSlice";

const api = spotifyApiSlice;

export const player = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserRecentlyPlayedTracks: builder.query({
      query: ({ limit = "10" }) => ({
        url: `${PLAYER}/recently-played?limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserRecentlyPlayedTracksQuery } = player;
