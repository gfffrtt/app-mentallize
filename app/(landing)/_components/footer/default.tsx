import Image from "next/image";

export const FooterDefault = () => {
  return (
    <footer className="w-screen h-[50%]">
      <Image
        src="/logo_mentallize_principal-nlilás.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="contain"
      />
    </footer>
  );
};
