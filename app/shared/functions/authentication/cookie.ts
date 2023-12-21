"use server";

import { cookies } from "next/headers";
import { UNAUTHORIZED } from "./errors";
import { tokenPayload } from "./jwt";

export const AUTH_COOKIE = "auth";

export const createCookie = (token: string) => {
  const cookie = cookies();
  if (cookie.get(AUTH_COOKIE)) cookie.delete(AUTH_COOKIE);
  cookie.set(AUTH_COOKIE, token, {
    httpOnly: true,
    path: "/",
  });
};

export const deleteCookie = () => {
  const cookie = cookies();
  if (cookie.get(AUTH_COOKIE)) cookie.delete(AUTH_COOKIE);
};

export const getSessionId = () => {
  const cookie = cookies();
  if (!cookie.get(AUTH_COOKIE)) throw new Error(UNAUTHORIZED);
  const { value: token } = cookie.get(AUTH_COOKIE);
  return tokenPayload(token);
};
