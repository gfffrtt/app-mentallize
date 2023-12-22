import { User } from "@prisma/client";
import { db } from "../../../shared/database/connection";
import { redirect } from "next/navigation";
import { TESTS_DICT } from "../../../shared/functions/rendering/enums";

type KeysProps = {
  user: User;
};

export const Keys = async ({ user }: KeysProps) => {
  const keys = await db.key.findMany({
    where: { client: { userId: user.id } },
  });
  console.log(keys.length);
  if (!keys.length) {
    return (
      <div className="flex flex-col  w-screen h-screen z-10 px-3">
        Parece que você não tem nenhuma chave
      </div>
    );
  }

  return (
    <div className="flex flex-col  w-screen h-screen z-10 px-3">
      <div>
        <h1>Minhas chaves</h1>
        <div className="grid grid-cols-2 gap-10 w-full">
          {keys.map((key, i) => {
            return (
              <div
                onClick={() => redirect(`/client/tests?key=${key.id}`)}
                key={i}
                className="group ring-2 ring-[#534559] hover:ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
              >
                <h1 className="group-hover:text-[#BB926B] font-bold text-[#534559] text-lg duration-300 ease-in-out">
                  {TESTS_DICT[key.type]}
                </h1>
                <label className="text-sm">
                  Situação:{" "}
                  {Math.ceil(key.expiresAt.getDate() - Date.now()) <= 0
                    ? "Expirado"
                    : "Válido"}
                </label>
                <p className="flex font-light text-sm items-center">
                  Data de Vencimento:{" "}
                  {key.expiresAt.toLocaleDateString("pt-br")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
