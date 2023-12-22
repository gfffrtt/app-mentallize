import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { RegisterForm } from "./components/register-form";
import { getCurrentUserClient } from "../../shared/functions/authentication/session";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getCurrentUserClient();
  if (typeof user !== "string") redirect("/client");

  return (
    <section id="register-page" className="flex flex-col">
      <Image
        src="/4.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-screen bg-gradient-to-t from-[#534559]/90 via-black/30 to-transparent"></div>
      <div className="font-bold h-screen w-screen text-center inset-y-[47%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-[50px]">
          PRIMEIRA VEZ?
        </h1>
        <p className="text-white relative -top-3 font-semibold text-[16px] px-5">
          Para fazer um de nossos testes de autoconhecimento totalmente de
          presente, você precisa de uma chave de acesso login que minha equipe
          irá liberar agora, basta você se cadastrar. Seja muito feliz aqui este
          site é para você;
        </p>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#registerform"
            className="relative text-[19px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text"
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
}
