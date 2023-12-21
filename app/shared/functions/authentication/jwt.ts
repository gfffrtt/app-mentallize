"use server";

import { JwtPayload, isJwtPayload } from "../../types/jwt-payload";
import { sign, verify } from "jsonwebtoken";
import { INVALID_COOKIE } from "./errors";

export const signToken = (payload: JwtPayload) => {
  return sign(payload, process.env.JWT_SECRET);
};

export const tokenPayload = (token: string) => {
  const payload = verify(token, process.env.JWT_SECRET);
  if (!isJwtPayload(payload)) throw new Error(INVALID_COOKIE);
  return payload;
};
