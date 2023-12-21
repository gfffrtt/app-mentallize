"use server";

import { db } from "../../database/connection";
import { hashSync } from "bcrypt";
import { ALREADY_USED_EMAIL, INCORRECT_EMAIL } from "./errors";
import { signToken } from "./jwt";
import { createCookie } from "./cookie";

export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const register = async (
  email: string,
  password: string,
  fullName: string,
  ddd: string,
  number: string
) => {
  if (!EMAIL_REGEX.test(email)) throw new Error(INCORRECT_EMAIL);
  const possibleUser = await db.user.findFirst({ where: { email } });
  if (possibleUser) throw new Error(ALREADY_USED_EMAIL);
  const user = await db.user.create({
    data: {
      email,
      password: hashSync(password, 10),
      type: "CLIENT",
      client: {
        create: {
          fullName,
          clientCellphone: {
            create: {
              ddd,
              number,
              type: number.length > 8 ? "MOBILE" : "FIXED",
            },
          },
        },
      },
    },
  });
  const session = await db.session.create({ data: { userId: user.id } });
  const token = signToken({ id: session.id });
  createCookie(token);
};
