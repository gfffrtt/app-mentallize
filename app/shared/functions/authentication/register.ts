"use server";

import { db } from "../../database/connection";
import { hashSync } from "bcrypt";
import { EMAIL_ALREADY_USED, INCORRECT_EMAIL, SUCCESS } from "./errors";
import { signToken } from "./jwt";
import { createCookie } from "./cookie";

export const register = async (
  email: string,
  password: string,
  fullName: string,
  ddd: string,
  number: string
): Promise<
  typeof INCORRECT_EMAIL | typeof EMAIL_ALREADY_USED | typeof SUCCESS
> => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!EMAIL_REGEX.test(email)) return INCORRECT_EMAIL;
  const possibleUser = await db.user.findFirst({ where: { email } });
  if (possibleUser) return EMAIL_ALREADY_USED;
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
  const session = await db.session.create({
    data: { role: "CLIENT", userId: user.id },
  });
  const token = signToken({ id: session.id, role: session.role });
  createCookie(token);
  return SUCCESS;
};
