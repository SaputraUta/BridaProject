import { type NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
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
  console.log(data.room_Id);

  try {
    const result = await prisma.transaksi.create({
      data: {
        nama_room: data.nama_room,
        nama_venue: data.nama_venue,
        tgl_booking: data.tgl_booking,
        venue_id: Number(data.venue_id),
        cust_Id: user.id,
        prov_Id: Number(data.prov_Id),
        room_Id: Number(data.room_Id),
      },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Terjadi kesalahan saat menyimpan data",
    });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    handlePostMethod(req, res);
  }
}
