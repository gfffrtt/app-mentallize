import { RegisterData } from "../types/register-data";
import { api } from "../../../shared/functions/api/axios";
import React, { MouseEvent } from "react";
import { redirect } from "next/navigation";

export const registerClient = (
  e: MouseEvent<HTMLButtonElement>,
  registerData: RegisterData,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();

  api
    .post("/api/auth/register", registerData)
    .then((response) => {
      if (response.status === 200) redirect("/client");
    })
    .catch((error) => setError(error.response.data.error));
};
