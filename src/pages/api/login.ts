import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import argon from "argon2";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const loginData = req.body;

  const userData = await prisma.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  if (!userData) return res.status(404).json({ message: "User Not Found" });

  const jwtToken = jwt.sign(
    {
      email: userData.email,
      username: userData.username,
      role: userData.role,
    },
    "kinguta"
  );

  // check password
  const passwordValidate = await argon.verify(userData.passwordHash, loginData.passwordHash);
  if (!passwordValidate) return res.status(401).json({ message: "Unauthorized" });

  res.setHeader("Set-Cookie", `token=${jwtToken}; HttpOnly; path="/"; SameSite=Lax; Secure`);
  res.status(200).json({
    email: userData.email,
    username: userData.username,
    role: userData.role,
    token: jwtToken,
  });
}
