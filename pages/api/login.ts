// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import randomstring from "randomstring";

const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const STATE = randomstring.generate(16);
const SCOPE = "user-read-private user-read-email user-top-read user-read-recently-played";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;
  res.redirect(url);
}
