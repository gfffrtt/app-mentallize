"use server";

import { db } from "../../database/connection";
import {
  INCORRECT_PASSWORD,
  INCORRECT_EMAIL,
  SUCCESS,
  NOT_AN_ADMIN,
} from "./errors";
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
    data: { role: "CLIENT", user: { connect: { id: user.id } } },
  });
  const token = signToken({ id: session.id, role: session.role });
  createCookie(token);
  return SUCCESS;
};

export const signInAdmin = async (
  email: string,
  password: string
): Promise<
  | typeof SUCCESS
  | typeof INCORRECT_EMAIL
  | typeof INCORRECT_PASSWORD
  | typeof NOT_AN_ADMIN
> => {
  const user = await db.user.findUnique({ where: { email } });
  if (!user) return INCORRECT_EMAIL;
  if (user.type === "CLIENT") return NOT_AN_ADMIN;
  if (!compareSync(password, user.password)) return INCORRECT_PASSWORD;
  const session = await db.session.create({
    data: { role: "CLIENT", user: { connect: { id: user.id } } },
  });
  const token = signToken({ id: session.id, role: session.role });
  createCookie(token);
  return SUCCESS;
};
