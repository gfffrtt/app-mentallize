import { redirect } from "next/navigation";
import { db } from "../../../shared/database/connection";
import { User } from "@prisma/client";
import { TESTS_DICT } from "../../../shared/functions/rendering/enums";

type TestsProps = {
  user: User;
};

export const Tests = async ({ user }: TestsProps) => {
  const result = await db.key.findMany({
    where: { client: { userId: user.id } },
    include: {
      circleOfLife: { include: { result: true } },
      fourElements: { include: { result: true } },
      loveLanguage: { include: { result: true } },
      selfKnowledge: { include: { result: true } },
    },
    orderBy: { type: "desc" },
  });

  if (!result.length) {
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
          {result.map((result, i) => {
            return (
              <div
                onClick={() => redirect(`/client/test?key=${result.id}`)}
                key={i}
                className="group ring-2 ring-[#534559] hover:ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
              >
                Hi
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
