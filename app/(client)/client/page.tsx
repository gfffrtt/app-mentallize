import { redirect } from "next/navigation";
import { getCurrentUserClient } from "../../shared/functions/authentication/session";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { Keys } from "./_components/keys";
import { Tests } from "./_components/tests";
import { SelectBar } from "./_components/select-bar";

export default async function Page({
  searchParams,
}: {
  searchParams: { display: string | undefined };
}) {
  const { display } = searchParams;
  const user = await getCurrentUserClient();
  if (typeof user === "string") redirect("/");
  if (user.type === "STAFF") redirect("/staff/clinics");

  return (
    <section>
      <Image
        src="/11.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-screen bg-gradient-to-t from-[#534559]/90 via-black/30 to-transparent"></div>
      <div className="font-bold h-screen w-screen text-center inset-y-[58%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-[50px]">
          OLÁ{" "}
          {`${user.client.fullName.toUpperCase().split(" ")[0]} 
            ${
              user.client.fullName.toUpperCase().split(" ")[
                user.client.fullName.toUpperCase().split(" ").length - 1
              ]
            }`}
        </h1>
        <p className="text-white relative -top-3 font-semibold text-[16px] px-5">
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
      <section id="clientcontent">
        <SelectBar />
        {!display && <Keys user={user} />}
        {display && display === "keys" && <Keys user={user} />}
        {display && display === "tests" && <Tests user={user} />}
      </section>
    </section>
  );
}
