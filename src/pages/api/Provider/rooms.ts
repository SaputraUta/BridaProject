import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import room_validation from "@/validation/room_validation";
import multiparty from "multiparty";
import fs from "fs-extra";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dn5t3qq4v",
  api_key: "389818122558318",
  api_secret: "eOsz0o-sWWPufYTOrXjEt4LJ3RI",
})

export const config = {
  api: {
    bodyParser: false,
  },
};

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
  const roomForm = new multiparty.Form();
  const data: {
    fields: {
      nama_room?: string[];
      harga_room?: string[];
      kapasitas?: string[];
      desc_room?: string[];
    };
    files: {
      gambar_room?: Array<{
        fieldName: string;
        originalFilename: string;
        path: string;
        headers: object;
        size: number;
      }>;
    };
  } = await new Promise((resolve, reject) => {
    roomForm.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });
  const { fields, files } = data;
  const file = files.gambar_room && files.gambar_room[0];
  const nama_room = fields.nama_room && fields.nama_room[0];
  const harga_room = fields.harga_room && fields.harga_room[0];
  const kapasitas = fields.kapasitas && fields.kapasitas[0];
  const desc_room = fields.desc_room && fields.desc_room[0];
  const dataFromClient = {
    nama_room,
    harga_room,
    kapasitas,
    desc_room,
  };
  if (!file) {
    return res.status(400).json({
      message: "No image attached",
    });
  }

  if (typeof req.cookies.token === "undefined") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const validation = room_validation.safeParse(dataFromClient);

  if (validation.success === false) {
    console.log(validation.error);
    return res.status(403).json(validation.error.flatten().fieldErrors);
  }

  const venue_id = Number(req.query.venue_id);
  console.log(venue_id);

  try {
    const cloudinaryUpload = await cloudinary.uploader.upload(file.path);
    const cloudinaryUrl = cloudinaryUpload.secure_url;

    await fs.unlink(file.path);

    const result = await prisma.room.create({
      data: {
        nama_room: nama_room!,
        gambar_room: cloudinaryUrl,
        harga_room: Number(harga_room)!,
        kapasitas: kapasitas!,
        venue_Id: venue_id,
        desc_room: desc_room!,
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
