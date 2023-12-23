import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { RegisterForm } from "./register-form";

export const Default = () => {
  return (
    <section id="register-page" className="flex flex-col w-full">
      <Image
        src="/1.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-full bg-gradient-to-t from-[#534559]/90 via-black/30 to-transparent"></div>
      <div className="font-bold h-[30%] w-full text-center inset-y-[70%] absolute px-[200px]">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-9xl">
          PRIMEIRA VEZ?
        </h1>
        <p className="text-white relative -top-1 font-semibold text-[20px] px-5">
          Para fazer um de nossos testes de autoconhecimento totalmente de
          presente, você precisa de uma chave de acesso login que minha equipe
          irá liberar agora, basta você se cadastrar. Seja muito feliz aqui este
          site é para você;
        </p>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#registerform"
            className="relative text-[24px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text"
          >
            Registre-se
          </a>
          <FaAngleDown className="relative -top-2 text-[#D9B895]" size={30} />
        </div>
      </div>
      <section id="registerform">
        <RegisterForm />
      </section>
    </section>
  );
};
