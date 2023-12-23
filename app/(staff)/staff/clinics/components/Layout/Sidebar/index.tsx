"use client";

import { redirect, useParams, useRouter } from "next/navigation";
import { ImKey2 } from "react-icons/im";
import { MdExitToApp } from "react-icons/md";

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  const router = useRouter();
  const { clinicId } = useParams();

  return (
    <main className="flex flex-row font-medium h-full text-[#414042]">
      <div className="fixed flex flex-col items-center justify-between text-xl mr-3 pr-4 bg-white h-screen shadow-2xl z-10 border w-[15%]">
        <div className="w-full mt-[60px]">
          <h1 className="font-light uppercase text-[#c8c8c8] tracking-[5px] flex items-center ml-5 mb-[3px]">
            DADOS
          </h1>
          <div className="flex flex-col gap-[8px]">
            <button
              onClick={() => router.push(`/staff/clinics/${clinicId}/keys`)}
              className="hover:text-[#534559] hover:bg-[#e1e1e1] duration-300 py-1 px-4 rounded-r-md w-full flex justify-start items-center gap-x-2 border-dashed border-b-2"
            >
              <ImKey2 />
              Chaves
            </button>
            {/* <button
              onClick={() => router("/clinic/people")}
              className="hover:text-[#534559] hover:bg-[#e1e1e1] duration-300 py-1 px-4 rounded-r-md w-full flex justify-start items-center gap-x-2 border-dashed border-b-2"
            >
              <BsPersonBadgeFill />
              Pessoas
            </button>
            <button
              onClick={() => router("/clinic/tests")}
              className="hover:text-[#534559] hover:bg-[#e1e1e1] duration-300 py-1 px-4 rounded-r-md w-full flex justify-start items-center gap-x-2"
            >
              <TbFileSpreadsheet />
              Resultados
            </button> */}
          </div>
        </div>
        <div className="pt-[8px] w-full mb-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/staff/clinics");
            }}
            className="hover:text-[#534559] hover:bg-[#e1e1e1] duration-300 py-1 px-4 rounded-r-md w-full flex justify-between items-center gap-x-2"
          >
            Trocar de Clínica
            <MdExitToApp />
          </button>
        </div>
      </div>
      <div className="ml-[315px] w-[81%]">{children}</div>
    </main>
  );
};
