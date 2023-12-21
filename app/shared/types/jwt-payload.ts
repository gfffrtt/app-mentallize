import { isObject } from "../functions/validators/is-object";

export type JwtPayload = {
  id: string;
};

export const isJwtPayload = (data: unknown): data is JwtPayload =>
  isObject(data) && typeof data.id === "string";
