import { FormEvent } from "react";
import { LoginData } from "../types/login-data";
import { api } from "../../../shared/functions/api/axios";
import { redirect } from "next/navigation";

export const loginClient = async (
  e: FormEvent<HTMLFormElement>,
  loginData: LoginData
) => {
  e.preventDefault();
  api
    .post("/api/auth/register", loginData)
    .then((response) => response.status === 200 && redirect("/client/profile"));
};
