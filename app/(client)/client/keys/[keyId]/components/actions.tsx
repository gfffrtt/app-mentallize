"use client";

import React, { useState } from "react";
import { LoginData } from "../../../../login/types/login-data";
import { loginClient, registerClient } from "../functions/actions";
import { RegisterData } from "../../../../register/types/register-data";
import { Input } from "../../../../../shared/components/input";
import { Button } from "../../../../../shared/components/button";

type Props = {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegisterForm = ({ setRegister }: Props) => {
  const [error, setError] = useState<string>("");
  const [registerData, setRegisterData] = useState<RegisterData>({
    ddd: "",
    email: "",
    fullName: "",
    number: "",
    password: "",
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen z-10 px-3">
      <h1 className="relative font-bold text-4xl bg-white top-5 px-2 text-[#D9B895]">
        Crie sua conta
      </h1>
      <form className="flex flex-col justify-center items-center gap-y-[1.6rem] px-5 rounded-md pt-12 border ">
        {error && (
          <div className="text-red-600 ring-2 ring-offset-2 ring-red-600 rounded-md mb-4">
            {error}
          </div>
        )}
        <Input
          title="Nome Completo:"
          value={registerData.fullName}
          onChange={(e) =>
            setRegisterData({ ...registerData, fullName: e.target.value })
          }
          className="w-full"
          required
        />
        <Input
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          title="Email:"
          className="w-full"
          required
        />
        <div className="flex flex-row gap-x-[1.5rem] items-center">
          <Input
            value={registerData.ddd}
            onChange={(e) =>
              e.target.value.length <= 2 &&
              setRegisterData({ ...registerData, ddd: e.target.value })
            }
            title="DDD:"
            className="max-w-[6ch]"
            required
          />
          <Input
            value={registerData.number}
            onChange={(e) =>
              e.target.value.length <= 9 &&
              setRegisterData({ ...registerData, number: e.target.value })
            }
            title="Telefone:"
            required
          />
        </div>
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
        <Button onClick={(e) => registerClient(e, registerData, setError)}>
          Criar conta
        </Button>

        <button
          onClick={() => setRegister(false)}
          className="relative h-min font-medium -top-4 text-[#414042]"
        >
          Já tem uma conta? Faça login
        </button>
      </form>
    </div>
  );
};

export const LoginForm = ({ setRegister }: Props) => {
  const [error, setError] = useState<string>("");
  const [registerData, setRegisterData] = useState<LoginData>({
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen z-10">
      <h1 className="relative font-bold text-4xl bg-white top-5 px-2 text-[#D9B895]">
        Entrar na conta
      </h1>
      <form className="flex flex-col justify-center items-center gap-y-[1.6rem] px-5 rounded-md pt-16 border shadow-xl shadow-[#414042]/50">
        {error && (
          <div className="text-red-600 ring-2 ring-offset-2 ring-red-600 rounded-md mb-4">
            {error}
          </div>
        )}

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

        <button
          onClick={() => setRegister(true)}
          className="relative h-min font-medium -top-4 text-[#414042]"
        >
          Não tem uma conta? Faça login!
        </button>
      </form>
    </div>
  );
};