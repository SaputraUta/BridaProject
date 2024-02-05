import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  const prov_Id = Number(req.query.provId);
  console.log(prov_Id);

  if (!prov_Id) {
    return res.status(401).json({
      message: "Unauhtorized",
    });
  }
  if (typeof req.cookies.token === "undefined") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(req.cookies.token, "kinguta", (err) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  });

  try {
    const venues = await prisma.venue.findMany({
      where: {
        prov_Id: prov_Id,
      },
    });
    res.status(200).json(venues);
    console.log(venues);
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
