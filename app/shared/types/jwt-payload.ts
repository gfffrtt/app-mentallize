import { $Enums } from "@prisma/client";
import { isObject } from "../functions/validators/is-object";

export type JwtPayload = {
  id: string;
  role: $Enums.ROLE;
};

export const isJwtPayload = (data: unknown): data is JwtPayload =>
  isObject(data) &&
  typeof data.id === "string" &&
  typeof data.role === "string";
