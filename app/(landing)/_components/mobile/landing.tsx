import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export const Landing = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/2.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative h-screen w-screen bg-gradient-to-t from-[#534559] via-black/30 to-transparent"></div>
      <div className="font-bold h-screen w-screen text-center inset-y-[70%] absolute">
        <h1 className="relative bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text text-[50px]">
          A REVELAÇÃO
        </h1>
        <p className="text-white relative -top-3 font-medium text-[24px]">
          do seu inconsciente <br /> emocional será o primeiro <br /> passo na
          sua{" "}
          <strong className="underline decoration-wavy">transformação.</strong>
        </p>
        <div className="flex flex-col justify-center items-center">
          <button className="relative text-[19px] bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#D9B895] inline-block text-transparent bg-clip-text">
            Conheça nosso método
          </button>
          <FaAngleDown className="relative -top-2 text-[#D9B895]" size={30} />
        </div>
      </div>
    </div>
  );
};
