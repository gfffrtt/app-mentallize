"use client";

import { useRouter } from "next/navigation";
import { Select } from "../../../shared/components/select";

export const SelectBar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col mt-12 w-screen h-[40px]">
      <div className="flex mx-3 items-center flex-col">
        <h1 className="flex text-2xl text-left w-full font-bold mb-1 text-[#534559]">
          Oque você deseja ver:
        </h1>
        <Select
          choices={[
            { choice: "Chaves", value: "keys" },
            { choice: "Testes", value: "tests" },
          ]}
          title=""
          onChange={(e) => router.push(`/client?display=${e.target.value}`)}
        />
      </div>
    </div>
  );
};
