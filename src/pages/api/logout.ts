import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Handling logout request...");
  try {
    res.setHeader(
      "Set-Cookie",
      `token=; HttpOnly; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure`
    );

    res.status(200).json({
      message: "Logout berhasil",
    });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({
      message: "Terjadi kesalahan saat logout",
    });
  }
}
