// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

export default async function handler(
  req: {
    query: { code: string; refresh_token: string };
    body: { code: string };
  },
  res: NextApiResponse
) {
  const urlencoded = new URLSearchParams();
  urlencoded.append("code", req.body.code);
  urlencoded.append("redirect_uri", REDIRECT_URI!);
  urlencoded.append("grant_type", "authorization_code");

  const tokenRequest = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    mode: "cors",
    body: urlencoded,
    headers: {
      Authorization: "Basic " + new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const token = await tokenRequest.json();
  res.send({ data: token });
}
