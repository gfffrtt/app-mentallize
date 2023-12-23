"use client";

import Link from "next/link";
import { api } from "../../../shared/functions/api/axios";
import { getCurrentUserClient } from "../../../shared/functions/authentication/session";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type HeaderDefaultProps = {
  user: Awaited<ReturnType<typeof getCurrentUserClient>>;
};
export const HeaderDefault = ({ user }: HeaderDefaultProps) => {
  const path = usePathname();
  const [trigger, setTrigger] = useState<boolean>(true);

  const handleTrigger = () => {
    if (path.length === 1) setTrigger(window.scrollY >= window.innerHeight);
  };

  useEffect(() => {
    handleTrigger();
  }, []);

  window.addEventListener("scroll", handleTrigger);

  return (
    <main
      className={
        trigger
          ? "h-[55px] z-20 w-full bg-[#534559] font-bold fixed duration-300"
          : "h-[55px] z-20 w-full bg-gradient-to-b from-[#534559]/90 via-[#534559]/70 to-transparent font-bold fixed duration-300"
      }
    >
      <div className="h-full w-full text-[#D1AA80] flex items-center justify-between text-4xl px-[250px]">
        <h1>Mentallize</h1>
        <div className="flex flex-row gap-x-8">
          <Link
            className="text-2xl duration-300 right-0 hover:cursor-pointer hover:scale-110 rounded-md flex items-center"
            href="/"
          >
            Início
          </Link>
          <Link
            className="text-2xl duration-300 right-0 hover:cursor-pointer hover:scale-110 rounded-md flex items-center"
            href="/client"
          >
            Testes
          </Link>
          {typeof user !== "string" && (
            <h1
              onClick={() =>
                api
                  .delete("/api/auth/logout")
                  .then(() => window.location.reload())
              }
              className="text-2xl duration-300 right-0 hover:cursor-pointer hover:scale-110 rounded-md flex items-center"
            >
              Sair
            </h1>
          )}
          {typeof user === "string" && (
            <h1
              onClick={() =>
                api
                  .delete("/api/auth/logout")
                  .then(() => window.location.reload())
              }
              className=" text-2xl duration-300 right-0 hover:cursor-pointer hover:scale-110 rounded-md flex items-center"
            >
              Entrar
            </h1>
          )}
        </div>
      </div>
    </main>
  );
};
