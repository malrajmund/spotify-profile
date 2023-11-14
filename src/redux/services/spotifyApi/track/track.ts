import { AUDIO_ANALYSIS, AUDIO_FEATURES, TRACK } from "../../../../config/endpoints";
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
    getTrackAudioFeatures: builder.query({
      query: ({ id }) => ({
        url: `${AUDIO_FEATURES}/${id}`,
        method: "GET",
      }),
    }),
    getTrackAudioAnalysis: builder.query({
      query: ({ id }) => ({
        url: `${AUDIO_ANALYSIS}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTrackDataQuery, useGetTrackAudioAnalysisQuery, useGetTrackAudioFeaturesQuery } = track;
