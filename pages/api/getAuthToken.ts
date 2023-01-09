// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";

const CLIENT_ID = "72e72a14a818422ea80251f202add5d9";
const CLIENT_SECRET = "ee9874a1afe2406ca3fbfe360d2e1cb9";
const REDIRECT_URI = "http://localhost:3000/callback";

export default async function handler(
  req: {
    query: { code: string; refresh_token: string };
    body: { code: string };
  },
  res: NextApiResponse
) {
  const urlencoded = new URLSearchParams();
  urlencoded.append("code", req.body.code);
  urlencoded.append("redirect_uri", REDIRECT_URI);
  urlencoded.append("grant_type", "authorization_code");

  const tokenRequest = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    mode: "cors",
    body: urlencoded,
    headers: {
      Authorization:
        "Basic " +
        new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const token = await tokenRequest.json();
  const response = await fetch(`https://api.spotify.com/v1/me`, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: "Bearer " + token.access_token,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  res.send({ data: data, token: token });
}
