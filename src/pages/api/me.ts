import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function getUserLogged(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof req.cookies.token === "undefined") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = jwt.verify(req.cookies.token, "kinguta") as {
    id: number;
    username: string;
    email: string;
    role: string;
  };

  console.log(user);
  res.status(200).json({
    user: user,
  });
}
