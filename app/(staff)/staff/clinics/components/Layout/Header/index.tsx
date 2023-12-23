"use client";

import { useParams } from "next/navigation";
import { BiLogOutCircle } from "react-icons/bi";
import { api } from "../../../../../../shared/functions/api/axios";
import { useEffect, useState } from "react";
import { Clinic } from "@prisma/client";

export const Header = () => {
  const [clinic, setClinic] = useState<Clinic>({
    id: "",
    name: "",
  });
  const { clinicId } = useParams();

  useEffect(() => {
    async function getClinic() {
      const res = await api.get(`/api/clinic/${clinicId}`);
      setClinic(res.data);
    }
    getClinic();
  }, []);

  return (
    <main className="h-[55px] z-20 w-full border-b bg-[#534559] font-bold fixed">
      <div className="h-full w-full text-[#D1AA80] flex items-center justify-center text-4xl">
        <h1>{clinic.name}</h1>
        <h1
          onClick={() =>
            api.delete("/api/auth/logout").then(() => window.location.reload())
          }
          className="fixed text-lg right-0 mr-5 hover:cursor-pointer hover:bg-[#816F86] px-3 py-2 rounded-md flex items-center gap-2"
        >
          Sair
          <BiLogOutCircle size={25} />
        </h1>
      </div>
    </main>
  );
};
