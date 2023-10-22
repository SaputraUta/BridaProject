import bcrypt from "bcryptjs";
import prisma from "@/pages/lib/prisma";

export const signUp = async (email: string, password: string) => {
  const users = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (users) {
    return "User with that email already exist.";
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });
  return "Succesfully create new user!";
};