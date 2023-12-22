import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

const express = require('express');
const router = express.Router();

router.post('/logout', (req: any, res: { cookie: (arg0: string, arg1: string, arg2: { expires: Date; }) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
  // Mengatur cookie dengan nilai yang akan membuatnya kedaluwarsa
  res.cookie('token', '', { expires: new Date(0) });

  // Memberikan respons kepada klien
  res.status(200).json({
    message: 'Logout berhasil',
  });
});

module.exports = router;