import { type NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  console.log("REQUEST");
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
  console.log(user.id);

  try {
    const result = await prisma.transaksi.findMany({
      where: {
        prov_Id: user.id,
      },
    });
    res.status(200).json(result);
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil data, coba lagi nanti",
    });
  }
}

async function handlePatchMethod(req: NextApiRequest, res: NextApiResponse) {
  console.log("req");
  const id = req.query.id;
  if (typeof req.cookies.token === "undefined") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const updatedTransaction = await prisma.transaksi.update({
      where: { id: Number(id) },
      data: { is_approved: true },
    });
    res.status(200).json(updatedTransaction);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Terjadi kesalahan pada server, coba lagi nanti",
    });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }
  if (req.method === "PATCH") {
    handlePatchMethod(req, res);
  }
}
