import { api } from "../../../../../shared/functions/api/axios";
import { RegisterData } from "../../../../register/types/register-data";
import { MouseEvent } from "react";
import { LoginData } from "../../../../login/types/login-data";

export const registerClient = (
  e: MouseEvent<HTMLButtonElement>,
  registerData: RegisterData,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();

  api
    .post("/api/auth/register", registerData)
    .then((response) => {
      if (response.status === 200) {
        window.location.reload();
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

export const loginClient = async (
  e: MouseEvent<HTMLButtonElement>,
  loginData: LoginData,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  api
    .post("/api/auth/login", loginData)
    .then((response) => {
      if (response.status === 200) {
        window.location.reload();
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
