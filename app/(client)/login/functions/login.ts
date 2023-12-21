import React, { MouseEvent } from "react";
import { LoginData } from "../types/login-data";
import { api } from "../../../shared/functions/api/axios";
import { redirect } from "next/navigation";

export const loginClient = async (
  e: MouseEvent<HTMLButtonElement>,
  loginData: LoginData,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  api
    .post("/api/auth/register", loginData)
    .then((response) => {
      if (response.status === 200) redirect("/client");
    })
    .catch((error) => setError(error.response.data.error));
};
