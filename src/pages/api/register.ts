import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import argon2 from "argon2";
import { getUserFromToken } from "./getUserFromToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  console.log(data);

  try {
    const hashPassword = await argon2.hash(data.password);
    const response = await prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        passwordHash: hashPassword,
        role: data.role,
      },
    });

    res.status(200).json({
      username: response.username,
      email: response.email,
      role: response.role,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Terjadi kesalahan saat menyimpan data",
    });
  }
}
