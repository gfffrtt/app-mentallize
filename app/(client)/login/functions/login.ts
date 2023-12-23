import React, { MouseEvent } from "react";
import { LoginData } from "../types/login-data";
import { api } from "../../../shared/functions/api/axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const loginClient = async (
  e: MouseEvent<HTMLButtonElement>,
  loginData: LoginData,
  setError: React.Dispatch<React.SetStateAction<string>>,
  router: AppRouterInstance
) => {
  e.preventDefault();

  if (!loginData.email || !loginData.password) {
    setError("Por favor preencha os dados que estão faltando");
    return;
  }

  api
    .post("/api/auth/login", loginData)
    .then((response) => {
      if (response.status === 200) {
        router.push("/staff/clinics");
      }
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data.error === "string"
      )
        setError(error.response.data.error);
    });
};
