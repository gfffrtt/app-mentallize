import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export const Who = () => {
  return (
    <div className="relative w-full pt-10">
      <Image
        src="/8.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute h-[10%] inset-0 z-10 w-full bg-gradient-to-b from-[#534559] to-transparent"></div>
      <div className="relative h-screen w-full bg-gradient-to-t from-[#534559] via-transparent to-transparent"></div>
      <div className="font-bold w-full text-center inset-y-[70%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-9xl">
          QUEM SOU
        </h1>
        <p className="text-white relative -top-1 font-bold text-[28px]">
          Empresário, especialista em franchising com mais de{" "}
          <strong className="underline decoration-wavy">15 anos</strong> de
          experiência
        </p>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#whodetail"
            className="relative text-[22px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text"
          >
            Mais sobre mim
          </a>
          <FaAngleDown className="relative -top-2 text-[#D9B895]" size={30} />
        </div>
      </div>
    </div>
  );
};