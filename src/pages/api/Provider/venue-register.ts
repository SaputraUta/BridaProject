import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import venue_validation from "@/validation/venue_validation";
import multiparty from "multiparty";
import fs from "fs-extra";
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
    const response = await prisma.venue.findMany();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const form = new multiparty.Form();
  const data: {
    fields: {
      city_name?: string[];
      nama_venue?: string[];
      alamat_venue?: string[];
      penanggung_jawab?: string[];
    };
    files: {
      gambar_venue?: Array<{
        fieldName: string;
        originalFilename: string;
        path: string;
        headers: object;
        size: number;
      }>;
    };
  } = await new Promise((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });
  const { fields, files } = data;
  const file = files.gambar_venue && files.gambar_venue[0];
  const city_name = fields.city_name && fields.city_name[0];
  const nama_venue = fields.nama_venue && fields.nama_venue[0];
  const alamat_venue = fields.alamat_venue && fields.alamat_venue[0];
  const penanggung_jawab =
    fields.penanggung_jawab && fields.penanggung_jawab[0];
  const dataFromClient = {
    city_name,
    nama_venue,
    alamat_venue,
    penanggung_jawab,
  };
  if (!file) {
    return res.status(400).json({
      message: "No image attached",
    });
  }

  if (typeof req.cookies.token === "undefined") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = jwt.verify(req.cookies.token, "kinguta") as { id: number };
  const validation = venue_validation.safeParse(dataFromClient);

  if (validation.success === false) {
    console.log(validation.error);
    return res.status(403).json(validation.error.flatten().fieldErrors);
  }

  try {
    const cloudinaryUpload = await cloudinary.uploader.upload(file.path);
    const cloudinaryUrl = cloudinaryUpload.secure_url;

    await fs.unlink(file.path);

    const result = await prisma.venue.create({
      data: {
        nama_venue: nama_venue!,
        gambar_venue: cloudinaryUrl,
        alamat_venue: alamat_venue!,
        penanggung_jawab: penanggung_jawab!,
        prov_Id: user.id,
        city_name: city_name!,
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
        penanggung_jawab: dataFromClient.penanggung_jawab,
      },
      where: {
        venue_id: dataFromClient.venue_id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat memperbarui data" });
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
