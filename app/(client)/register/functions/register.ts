import { FormEvent } from "react";
import { RegisterData } from "../types/register-data";
import { api } from "../../../shared/functions/api/axios";
import { redirect } from "next/navigation";

export const registerClient = async (
  e: FormEvent<HTMLFormElement>,
  registerData: RegisterData
) => {
  e.preventDefault();
  api
    .post("/api/auth/register", registerData)
    .then((response) => response.status === 200 && redirect("/client/profile"));
};
