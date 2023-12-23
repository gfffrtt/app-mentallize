"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AdminLoginData } from "../types/login-data";
import { Input } from "../../../../shared/components/input";
import { Button } from "../../../../shared/components/button";
import { loginAdmin } from "../functions/login-admin";

export const AdminLoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [registerData, setRegisterData] = useState<AdminLoginData>({
    email: "",
    password: "",
  });
  return (
    <form className="flex flex-col justify-center items-center gap-y-[1.6rem] px-5 pb-7 rounded-md pt-16 border shadow-xl shadow-[#414042]/50">
      {error && (
        <div className="text-red-600 text-center ring-2 ring-offset-2 ring-red-600 rounded-md mb-4">
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
      <Button onClick={(e) => loginAdmin(e, registerData, setError, router)}>
        Entrar em sua conta
      </Button>
    </form>
  );
};
