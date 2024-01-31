import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import event_validation from "@/validation/event_validation";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.cookies.token === "undefined") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(req.cookies.token, "kinguta", (err) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  });
  
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
  const validation = event_validation.safeParse(dataFromClient);
  if (validation.success === false) {
    return res.status(403).json(validation.error.flatten().fieldErrors);
  }

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
