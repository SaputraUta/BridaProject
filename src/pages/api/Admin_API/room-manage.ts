import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

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
    const response = await prisma.room.findMany();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const dataFromClient = req.body;

  try {
    const result = await prisma.room.create({
      data: {
        nama_room: dataFromClient.nama_room,
        gambar_room: dataFromClient.gambar_room,
        harga_room: dataFromClient.harga_room,
        kapasitas: dataFromClient.kapasitas,
        desc_room: dataFromClient.desc_room,
        venue_Id: dataFromClient.venue_Id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
  }
}

async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
  const idData = Number(req.query.room_id);
  try {
    const response = await prisma.room.delete({
      where: {
        room_id: idData,
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
    const result = await prisma.room.update({
      data: {
        nama_room: dataFromClient.nama_room,
        gambar_room: dataFromClient.gambar_room,
        harga_room: dataFromClient.harga_room,
        kapasitas: dataFromClient.kapasitas,
        desc_room: dataFromClient.desc_room,
      },
      where: {
        room_id: dataFromClient.room_id,
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
