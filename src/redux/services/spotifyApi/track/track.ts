import { TRACK } from "../../../../config/endpoints";
import { spotifyApiSlice } from "../spotifyApiSlice";

const api = spotifyApiSlice;

export const track = api.injectEndpoints({
  endpoints: (builder) => ({
    getTrackData: builder.query({
      query: ({ id }) => ({
        url: `${TRACK}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTrackDataQuery } = track;
