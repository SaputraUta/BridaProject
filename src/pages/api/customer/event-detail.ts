import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.cookies.token === "undefined") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const idData = Number(req.query.event_id);
    const response = await prisma.event.findUnique({
    where: {
      event_id : idData,
    }});
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }
}