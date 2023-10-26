import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export const signUp = async (email: string, username: string, password: string) => {
  const users = await prisma.user_Cust.findUnique({
    where: {
      email,
    },
  });
  if (users) {
    return "User with that email already exist.";
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  await prisma.user_Cust.create({
    data: {
      email,
      username,
      passwordHash,
    },
  });
  return "Succesfully create new user!";
};