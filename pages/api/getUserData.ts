// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";

export default async function handler(
  req: { query: { token: string } },
  res: NextApiResponse
) {
  const response = await fetch(`https://api.spotify.com/v1/me`, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: "Bearer " + req.query.token,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  res.send({ data: data });
}
