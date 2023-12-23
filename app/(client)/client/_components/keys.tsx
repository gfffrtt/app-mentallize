"use client";

import { Key } from "@prisma/client";
import { TESTS_DICT } from "../../../shared/functions/rendering/enums";
import Link from "next/link";
import { IoWarningOutline } from "react-icons/io5";

type KeysProps = {
  keys: Key[];
};

export const Keys = ({ keys }: KeysProps) => {
  if (!keys.length) {
    return (
      <div className="flex flex-col w-full h-screen my-6 z-10 px-3">
        <div>
          <h1 className="text-[#D1AA80] text-3xl font-bold mb-5">
            Suas chaves
          </h1>
          <div className="h-screen w-full flex flex-col text-center items-center justify-center">
            <IoWarningOutline
              size={100}
              className="text-red-600 w-full text-center mb-8"
            />
            <h1 className="text-red-600 flex flex-col text-center w-[80%] font-extrabold rounded-md mb-4">
              Parece que você não tem nenhuma chave, entre em contato para
              conseguir chaves!
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen my-6 z-10 px-3">
      <div>
        <h1 className="text-[#D1AA80] text-3xl font-bold mb-5">Suas chaves</h1>
        <div className="grid grid-cols-2 gap-2 w-full">
          {keys.map((key, i) => {
            return (
              <Link
                href={
                  Math.ceil(key.expiresAt.getTime() - new Date().getTime()) <= 0
                    ? "/client"
                    : `/client/keys/${key.id}`
                }
              >
                <div
                  key={i}
                  className="group ring-2 ring-[#534559] hover:ring-[#D1AA80] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
                >
                  <h1 className="group-hover:text-[#D1AA80] font-bold text-[#534559] text-lg duration-300 ease-in-out">
                    {TESTS_DICT[key.type]}
                  </h1>
                  <label className="text-sm">
                    Situação:{" "}
                    {Math.ceil(
                      key.expiresAt.getTime() - new Date().getTime()
                    ) <= 0
                      ? "Expirado"
                      : "Válido"}
                  </label>
                  <p className="flex font-light text-sm items-center">
                    Data de Vencimento:{" "}
                    {key.expiresAt.toLocaleDateString("pt-br")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
