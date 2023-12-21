import { isObject } from "../../../shared/functions/validators/is-object";

export type LoginData = {
  email: string;

  password: string;
};

export const isLoginData = (data: unknown): data is LoginData =>
  isObject(data) &&
  typeof data.email === "string" &&
  typeof data.password === "string";
