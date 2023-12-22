import { redirect } from "next/navigation";
import { getCurrentUserClient } from "../../shared/functions/authentication/session";
import { LoginForm } from "./components/login-form";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export default async function Page() {
  const user = await getCurrentUserClient();
  if (typeof user !== "string") redirect("/client");

  return (
    <section>
      <Image
        src="/2.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-screen bg-gradient-to-t from-[#534559]/90 via-black/30 to-transparent"></div>
      <div className="font-bold h-screen w-screen text-center inset-y-[60%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-[50px]">
          BEM VINDO DEVOLTA
        </h1>
        <p className="text-white relative -top-3 font-semibold text-[16px] px-5">
          Para acessar seus testes, chaves, e devolutórias e necessário fazer
          seu login!
        </p>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#loginform"
            className="relative text-[19px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text"
          >
            Entre em sua conta
          </a>
          <FaAngleDown className="relative -top-2 text-[#D9B895]" size={30} />
        </div>
      </div>
      <section id="loginform">
        <LoginForm />
      </section>
    </section>
  );
}
