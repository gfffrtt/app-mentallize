"use client";

import { LoginData } from "../types/login-data";
import { useState } from "react";
import { loginClient } from "../functions/login";
import { Button } from "../../../shared/components/button";
import Link from "next/link";
import { Input } from "../../../shared/components/input";

export const LoginForm = () => {
  const [error, setError] = useState<string>("");
  const [registerData, setRegisterData] = useState<LoginData>({
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen z-10">
      <h1 className="relative font-bold text-4xl bg-white top-5 px-2 text-[#D9B895]">
        Entrar em sua conta
      </h1>
      <form className="flex flex-col justify-center items-center gap-y-[1.6rem] px-5 rounded-md pt-16 border shadow-xl shadow-[#414042]/50">
        {error && <h1>{error}</h1>}

        <Input
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          title="Email:"
          className="w-full"
          required
        />
        <Input
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          title="Senha:"
          type="password"
          className="w-full"
          required
        />
        <Button onClick={(e) => loginClient(e, registerData, setError)}>
          Entrar em sua conta
        </Button>
        <Link
          href="/login"
          className="relative h-min font-medium -top-4 text-[#414042]"
        >
          Não tem uma conta? Faça seu cadastro!
        </Link>
      </form>
    </div>
  );
};
