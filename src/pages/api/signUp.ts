import { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "../actions/users/signUp";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, username, password } = req.body;
    const result = await signUp(email, username, password);
    res.status(200).json({ message: result });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};