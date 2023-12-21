import { isObject } from "../../../shared/functions/validators/is-object";

export type RegisterData = {
  fullName: string;
  email: string;
  number: string;
  ddd: string;
  password: string;
};

export const isRegisterData = (data: unknown): data is RegisterData =>
  isObject(data) &&
  typeof data.fullName === "string" &&
  typeof data.email === "string" &&
  typeof data.number === "string" &&
  typeof data.ddd === "string" &&
  typeof data.password === "string";
