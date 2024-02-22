import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Handling logout request...");
  try {
    const logoutCookie = serialize("token", "", {
      httpOnly: true,
      path: "/",
      maxAge: -1,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    res.setHeader("Set-Cookie", logoutCookie);

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
