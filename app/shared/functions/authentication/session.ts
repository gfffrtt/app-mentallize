"use server";

import { db } from "../../database/connection";
import { getSessionId } from "./cookie";
import { UNAUTHORIZED } from "./errors";

export const getCurrentUserClient = async () => {
  const id = getSessionId();
  const session = await db.session.findFirst({
    where: { id },
    include: { user: { include: { client: true } } },
  });
  if (!session) throw new Error(UNAUTHORIZED);
  return session.user;
};

export const deleteCurrentSession = async () => {
  const id = getSessionId();
  await db.session.delete({ where: { id } });
};
