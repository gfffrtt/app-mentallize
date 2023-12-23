import { redirect } from "next/navigation";
import { db } from "../../../shared/database/connection";
import { getCurrentUserClient } from "../../../shared/functions/authentication/session";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { Keys } from "./keys";
import { KeysPC } from "./keys_pc";

export const Default = async () => {
  const user = await getCurrentUserClient();
  if (typeof user === "string") redirect("/");
  if (user.type === "STAFF") redirect("/staff/clinics");
  const keys = await db.key.findMany({
    where: { client: { id: user.client.id } },
  });

  return (
    <section className="w-full">
      <Image
        src="/11.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-[100%] bg-gradient-to-t from-[#534559]/90 via-black/30 to-transparent"></div>
      <div className="font-bold max-h-[30%] w-[100%] text-center inset-y-[70%] absolute">
        <h1 className="relative w-[100%] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-8xl">
          OLÁ{" "}
          {`${user.client.fullName.toUpperCase().split(" ")[0]} 
          ${
            user.client.fullName.toUpperCase().split(" ")[
              user.client.fullName.toUpperCase().split(" ").length - 1
            ]
          }`}
        </h1>
        <p className="text-white relative -top-1 font-semibold text-[24px] w-full px-5">
          Aqui você pode ver suas todas suas chaves disponíveis e devolutórias
          de testes
        </p>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#clientcontent"
            className="relative text-[19px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text"
          >
            Quero ver!
          </a>
          <FaAngleDown className="relative -top-2 text-[#D9B895]" size={30} />
        </div>
      </div>
      <div className="z-20">
        <section id="clientcontent">
          <KeysPC keys={keys} />
        </section>
      </div>
    </section>
  );
};
