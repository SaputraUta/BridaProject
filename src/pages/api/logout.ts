import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Handling logout request...");
  const jwtToken = req.cookies.token;
  try {
    res.setHeader(
      "Set-Cookie",
      `token=${jwtToken}; HttpOnly; path=/; max-age=-1; SameSite=Lax; Secure`
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
