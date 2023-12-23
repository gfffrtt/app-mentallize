import Image from "next/image";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export const FooterDefault = () => {
  return (
    <div className="w-screen h-[450px] bg-[#534559] relative">
      <Image
        src="/logo_mentallize_principal-nlilás.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectPosition="left"
        objectFit="contain"
      />
      <strong className="absolute w-full text-5xl text-center inset-y-[50%] text-[#D1AA80]">
        1% Melhor Sempre!
      </strong>
      <div className="w-full relative z-10 mt-[10%] text-white">
        <div className="flex flex-row gap-x-12 ml-[70%]">
          <FaFacebook size={100} />
          <GrInstagram size={100} />
          <FaYoutube size={100} />
        </div>
      </div>
    </div>
  );
};
