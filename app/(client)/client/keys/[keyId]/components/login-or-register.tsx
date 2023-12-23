"use client";

import { useState } from "react";
import { LoginForm, RegisterForm } from "./actions";

export const LoginOrRegister = () => {
  const [register, setRegister] = useState<boolean>(true);

  if (register) return <RegisterForm setRegister={setRegister} />;

  return <LoginForm setRegister={setRegister} />;
};
