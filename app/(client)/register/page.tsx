"use client";

import Link from "next/link";
import { Input } from "../../shared/components/input";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { RegisterData } from "./types/register-data";
import { useState } from "react";
import { registerClient } from "./functions/register";

export default function Page() {
  const [registerData, setRegisterData] = useState<RegisterData>({
    ddd: "",
    email: "",
    fullName: "",
    number: "",
    password: "",
  });

  return (
    <section id="register-page" className="flex flex-col">
      <Image
        src="/4.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-screen bg-gradient-to-t from-[#534559]/90 via-black/30 to-transparent"></div>
      <div className="font-bold h-screen w-screen text-center inset-y-[70%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-[50px]">
          PRIMEIRA VEZ?
        </h1>
        <p className="text-white relative -top-3 font-semibold text-[16px] px-5">
          Para fazer um de nossos testes de autoconhecimento totalmente de
          presente, você precisa de uma chave de acesso login que minha equipe
          irá liberar agora, basta você se cadastrar. Seja muito feliz aqui este
          site é para você;
        </p>
        <div className="flex flex-col justify-center items-center">
          <button className="relative text-[19px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text">
            Registre-se
          </button>
          <FaAngleDown className="relative -top-2 text-[#D9B895]" size={30} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="relative font-bold text-4xl bg-white top-5 px-2 text-[#D9B895]">
          Crie sua conta
        </h1>
        <form
          onSubmit={(e) => registerClient(e, registerData)}
          className="flex flex-col justify-center items-center gap-y-[1.6rem] px-5 rounded-md pt-16 border shadow-xl shadow-[#414042]/50"
        >
          <Input title="Nome:" className="w-full" required />
          <Input title="Email:" className="w-full" required />
          <div className="flex flex-row gap-x-[1.5rem] items-center">
            <Input title="DDD:" className="max-w-[6ch]" required />
            <Input title="Telefone:" required />
          </div>
          <Input title="Senha:" type="password" className="w-full" required />
          <button
            className="bg-[#534559] inline-flex items-center h-10 py-1 px-3 gap-2 justify-center rounded-md text-text-lg font-medium transition-colors  text-white hover:bg-[#816F86] focus:ring-2 focus:ring-[#816F86] focus:ring-offset-2"
            type="submit"
          >
            Criar conta
          </button>
          <Link
            href="/login"
            className="relative h-min font-medium text-[#414042]"
          >
            Já tem uma conta? Faça login
          </Link>
        </form>
      </div>
    </section>
  );
}
