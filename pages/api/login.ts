// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import randomstring from "randomstring";
import store from "../../src/redux/store";

const CLIENT_ID = "72e72a14a818422ea80251f202add5d9";
const REDIRECT_URI = "http://localhost:3000/";
const STATE = randomstring.generate(16);
const SCOPE = "user-read-private user-read-email";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

  res.redirect(url);
}
