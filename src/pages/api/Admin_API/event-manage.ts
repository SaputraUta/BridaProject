import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await prisma.event.findMany();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;

  try {
    const result = await prisma.event.create({
      data: {
        category_event: dataFromClient.category_event,
        gambar_event: dataFromClient.gambar_event,
        desc_event: dataFromClient.desc_event,
        sop: dataFromClient.sop,
        alur_perizinan: dataFromClient.alur_perizinan,
        kondisional: dataFromClient.alur_kondisional,
        template_surat: dataFromClient.alur_kondisional,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
  }
}

async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
  const idData = Number(req.query.event_id);
  try {
    const response = await prisma.event.delete({
      where: {
        event_id: idData,
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
    const result = await prisma.event.update({
      data: {
        category_event: dataFromClient.category_event,
        gambar_event: dataFromClient.gambar_event,
        desc_event: dataFromClient.desc_event,
        sop: dataFromClient.sop,
        alur_perizinan: dataFromClient.alur_perizinan,
        kondisional: dataFromClient.alur_kondisional,
      },
      where: {
        event_id: dataFromClient.event_id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat memperbarui data" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }

  if (req.method === "POST") {
    handlePostMethod(req, res);
  }

  if (req.method === "DELETE") {
    handleDeleteMethod(req, res);
  }

  if (req.method === "PUT") {
    handlePutMethod(req, res);
  }
}
