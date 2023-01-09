import { GET_TOKEN } from "../../../../config/endpoints";
import { serverApiSlice } from "../serverApiSlice";

const api = serverApiSlice;

export const auth = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({ code }) => ({
        url: GET_TOKEN,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { code: code },
      }),
    }),
  }),
});

export const { useGetTokenMutation } = auth;
