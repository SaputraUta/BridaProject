import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;

  try {
    const result = await prisma.transaksi.create({
      data: {
        metode: dataFromClient.metode,
        total: dataFromClient.total,
        cust_Id: dataFromClient.cust_Id,
        room_Id: dataFromClient.room_Id,
        notif_Id: dataFromClient.notif_Id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
  }
}

async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
  const idData = Number(req.query.venue_id);
  try {
    const response = await prisma.venue.delete({
      where: {
        venue_id: idData,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handlePutMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;

  try {
    const result = await prisma.venue.update({
      data: {
        nama_venue: dataFromClient.nama_venue,
        gambar_venue: dataFromClient.gambar_venue,
        alamat_venue: dataFromClient.alamat_venue,
        link_maps: dataFromClient.link_maps,
        penanggung_jawab: dataFromClient.penanggung_jawab,
      },
      where: {
        venue_id: dataFromClient.venue_id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat memperbarui data" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    handlePostMethod(req, res);
  }
}

