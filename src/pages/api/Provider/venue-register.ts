import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import venue_validation from "@/validation/venue_validation";

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
  const dataFromClient = req.body;
  console.log(req.cookies.token);

    const validation = venue_validation.safeParse(dataFromClient);
    if (validation.success === false) {
      console.log(validation.error);
      return res.status(403).json(validation.error.flatten().fieldErrors);
    }

  try {
<<<<<<< HEAD
      const result = await prisma.venue.create({
        data: {
          nama_venue: dataFromClient.nama_venue,
          gambar_venue: dataFromClient.gambar_venue,
          alamat_venue: dataFromClient.alamat_venue,
          penanggung_jawab: dataFromClient.penanggung_jawab,
          prov_Id: dataFromClient.prov_Id,
          city_name: dataFromClient.city_name,
        },
      });
=======
    // const result = await prisma.venue.create({
    //   data: {
    //     nama_venue: dataFromClient.nama_venue,
        // gambar_venue: dataFromClient.gambar_venue,
        // alamat_venue: dataFromClient.alamat_venue,
        // penanggung_jawab: dataFromClient.penanggung_jawab,
        // prov_Id: dataFromClient.prov_Id,
        // city_name: dataFromClient.city_name,
    //   },
    // });
>>>>>>> 0148affe92c213f0f71a552ae0497f2422c85e11

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
