import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { LoginForm } from "./login-form";

export const Default = () => {
  return (
    <section className="w-full">
      <Image
        src="/9.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-full bg-gradient-to-t from-[#534559]/90 via-black/30 to-transparent"></div>
      <div className="font-bold h-screen w-full text-center inset-y-[73%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] px-[200px] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-9xl">
          BEM VINDO DE VOLTA
        </h1>
        <p className="text-white relative -top-1 font-semibold text-[24px] px-5">
          Para acessar seus testes, chaves, e devolutórias e necessário fazer
          seu login!
        </p>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#loginform"
            className="relative text-[24px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text"
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
};
