import { RegisterData } from "../types/register-data";
import { api } from "../../../shared/functions/api/axios";
import React, { MouseEvent } from "react";
import { redirect } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const registerClient = (
  e: MouseEvent<HTMLButtonElement>,
  registerData: RegisterData,
  setError: React.Dispatch<React.SetStateAction<string>>,
  router: AppRouterInstance
) => {
  e.preventDefault();

  if (
    !registerData.ddd ||
    !registerData.email ||
    !registerData.fullName ||
    !registerData.number ||
    !registerData.password
  ) {
    setError("Por favor preencha os dados que estão faltando");
    return;
  }
  api
    .post("/api/auth/register", registerData)
    .then((response) => {
      if (response.status === 200) {
        router.push("/client");
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
