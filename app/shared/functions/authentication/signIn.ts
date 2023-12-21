"use server";

import { db } from "../../database/connection";
import { INCORRECT_PASSWORD, INCORRECT_EMAIL, SUCCESS } from "./errors";
import { compareSync } from "bcrypt";
import { signToken } from "./jwt";
import { createCookie } from "./cookie";

export const signIn = async (
  email: string,
  password: string
): Promise<
  typeof SUCCESS | typeof INCORRECT_EMAIL | typeof INCORRECT_PASSWORD
> => {
  const user = await db.user.findUnique({ where: { email } });
  if (!user) return INCORRECT_EMAIL;
  if (!compareSync(password, user.password)) return INCORRECT_PASSWORD;
  const session = await db.session.create({
    data: { role: "CLIENT", userId: user.id },
  });
  const token = signToken({ id: session.id });
  createCookie(token);
  return SUCCESS;
};
