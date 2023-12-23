import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export const Landing = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/11.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-full bg-gradient-to-t from-[#534559] via-black/30 to-transparent"></div>
      <div className="font-bold w-full text-center inset-y-[65%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-9xl">
          A REVELAÇÃO
        </h1>
        <p className="text-white relative -top-2 font-medium text-[28px]">
          do seu inconsciente <br /> emocional será o primeiro <br /> passo na
          sua{" "}
          <strong className="underline decoration-wavy">transformação.</strong>
        </p>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#tests"
            className="relative text-[22px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text"
          >
            Conheça nosso método
          </a>
          <FaAngleDown className="relative -top-2 text-[#D9B895]" size={30} />
        </div>
      </div>
    </div>
  );
};
