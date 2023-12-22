import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

export const FooterMobile = () => {
  return (
    <div className="w-screen h-[450px] bg-[#534559] relative">
      <Image
        src="/logo_mentallize_principal-nlilás.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectPosition="top"
        objectFit="contain"
      />
      <strong className="absolute w-full text-center inset-y-[90%] text-[#D1AA80]">
        1% Melhor Sempre!
      </strong>
      <div className="w-full absolute z-10 text-white mt-10 inset-y-[55%]">
        <div className="flex flex-row justify-between mx-[80px]">
          <FaFacebook size={50} />
          <GrInstagram size={50} />
          <FaYoutube size={50} />
        </div>
      </div>
    </div>
  );
};
