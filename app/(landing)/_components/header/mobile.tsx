"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { api } from "../../../shared/functions/api/axios";
import Link from "next/link";
import { getCurrentUserClient } from "../../../shared/functions/authentication/session";
import { IoClose } from "react-icons/io5";

type HeaderMobileProps = {
  user: Awaited<ReturnType<typeof getCurrentUserClient>>;
};

export const HeaderMobile = ({ user }: HeaderMobileProps) => {
  const [open, setOpen] = useState<boolean>(false);

  if (open) {
    return (
      <div className="fixed z-20 w-screen h-screen right-0 p-3 bg-black/20 backdrop-blur-sm">
        <div className="flex flex-col bg-gradient-to-tl from-[#534559]  via-[#816F86] to-[#9A8A9D] rounded-md h-full p-[1px]">
          <div className="flex flex-col justify-between py-10 text-left bg-[#534559] rounded-md h-full px-5 text-white font-extrabold text-2xl tracking-wide">
            <div className="absolute w-[40px] h-[40px] inset-x-[84%] top-4 z-40">
              <button
                className="flex text-center items-center"
                onClick={() => setOpen(!open)}
              >
                <IoClose size={40} />
              </button>
            </div>
            <div className="flex flex-col mt-5">
              <Link
                onClick={() => setOpen(!open)}
                href="/"
                className="px-auto py-2 border-b border-dashed hover:rounded-md hover:bg-[#816F86] hover:scale-110 focus:scale-110"
              >
                Início
              </Link>
              <Link
                onClick={() => setOpen(!open)}
                href="/client"
                className="px-auto py-2 border-b hover:rounded-md hover:bg-[#816F86] hover:scale-110 focus:scale-110"
              >
                Testes
              </Link>
              {/* <Link
                onClick={() => setOpen(!open)}
                href="/clinics"
                className="px-auto py-2 hover:rounded-md hover:bg-[#816F86] hover:scale-110 focus:scale-110"
              >
                Clínicas
              </Link> */}
            </div>
            <div>
              {typeof user !== "string" && (
                <button
                  onClick={() =>
                    api
                      .delete("/api/auth/logout")
                      .then(() => window.location.reload())
                  }
                  className="relative bottom-0"
                >
                  Sair
                </button>
              )}
              {typeof user === "string" && (
                <Link
                  onClick={() => setOpen(!open)}
                  href="/register"
                  className="px-auto py-2 hover:scale-110 "
                >
                  Entrar
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed z-20 right-0 p-1">
      <div className="relative rounded-full bg-[#D1AA80]/40 px-1 h-[50px] w-[50px] blur-xl backdrop-blur-2xl"></div>
      <IoMenu
        onClick={() => setOpen(!open)}
        size={50}
        className="text-white absolute top-1 left-1 inset-0 px-1 flex justify-center items-center"
      />
    </div>
  );
};
