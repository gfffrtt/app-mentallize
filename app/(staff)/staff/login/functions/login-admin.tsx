import React, { MouseEvent } from "react";
import { AdminLoginData } from "../types/login-data";
import { api } from "../../../../shared/functions/api/axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const loginAdmin = async (
  e: MouseEvent<HTMLButtonElement>,
  loginData: AdminLoginData,
  setError: React.Dispatch<React.SetStateAction<string>>,
  router: AppRouterInstance
) => {
  e.preventDefault();
  api
    .post("/api/auth/login", loginData)
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
