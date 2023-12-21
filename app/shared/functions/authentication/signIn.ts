"use server";

import { db } from "../../database/connection";
import { INCORRECT_PASSWORD, INCORRECT_EMAIL } from "./errors";
import { compareSync } from "bcrypt";
import { signToken } from "./jwt";
import { createCookie } from "./cookie";

export const signIn = async (email: string, password: string) => {
  const user = await db.user.findUnique({ where: { email } });
  if (!user) throw new Error(INCORRECT_EMAIL);
  if (!compareSync(password, user.password))
    throw new Error(INCORRECT_PASSWORD);
  const session = await db.session.create({ data: { userId: user.id } });
  const token = signToken({ id: session.id });
  createCookie(token);
};
