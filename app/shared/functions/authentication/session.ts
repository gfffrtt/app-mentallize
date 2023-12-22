"use server";

import { db } from "../../database/connection";
import { getSessionId } from "./cookie";
import { UNAUTHORIZED } from "./errors";

export const getCurrentUserClient = async () => {
  const payload = getSessionId();
  if (typeof payload === "string") return UNAUTHORIZED;
  const { id } = payload;
  const session = await db.session.findFirst({
    where: { id },
    include: { user: { include: { client: true } } },
  });
  if (!session) return UNAUTHORIZED;
  return session.user;
};

export const getCurrentUserStaff = async () => {
  const payload = getSessionId();
  if (typeof payload === "string") return UNAUTHORIZED;
  const { id } = payload;
  const session = await db.session.findFirst({
    where: { id },
    include: { user: { include: { staff: true } } },
  });
  if (!session) return UNAUTHORIZED;
  if (session.role === "CLIENT") return UNAUTHORIZED;
  return session.user;
};

export const deleteCurrentSession = async () => {
  const payload = getSessionId();
  if (typeof payload === "string") return UNAUTHORIZED;
  const { id } = payload;
  await db.session.delete({ where: { id } });
};
