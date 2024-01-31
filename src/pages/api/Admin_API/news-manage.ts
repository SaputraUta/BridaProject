import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import news_validation from "@/validation/news_validation";

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
    const response = await prisma.news.findMany();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;
  const validation = news_validation.safeParse(dataFromClient);
  if (validation.success === false) {
    return res.status(403).json(validation.error.flatten().fieldErrors);
  }

  try {
    const result = await prisma.news.create({
      data: {
        judul_news: dataFromClient.judul_news,
        gambar_news: dataFromClient.gambar_news,
        isi_berita: dataFromClient.isi_berita,
        tgl_berita: dataFromClient.tgl_berita,
        admin_Id: dataFromClient.admin_Id,
        event_Id: dataFromClient.event_Id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
  }
}

async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
  const idData = Number(req.query.id);
  try {
    const response = await prisma.news.delete({
      where: {
        id: idData,
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
    const result = await prisma.news.update({
      data: {
        judul_news: dataFromClient.judul_news,
        gambar_news: dataFromClient.gambar_news,
        isi_berita: dataFromClient.isi_berita,
      },
      where: {
        id: dataFromClient.id,
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
