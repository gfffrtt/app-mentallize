"use client";

import { Key } from "@prisma/client";
import { TESTS_DICT } from "../../../shared/functions/rendering/enums";
import Link from "next/link";

type KeysProps = {
  keys: Key[];
};

export const KeysPC = ({ keys }: KeysProps) => {
  if (!keys.length) {
    return (
      <div className="flex flex-col w-full h-screen px-3">
        Parece que você não tem nenhuma chave
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen px-3">
      <div className="mx-12 py-6 px-12 my-6 border rounded-md h-full">
        <h1 className="text-[#D1AA80] text-6xl font-bold mb-12">
          Minhas chaves
        </h1>
        <div className="grid grid-cols-5 gap-12 w-full z-30">
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