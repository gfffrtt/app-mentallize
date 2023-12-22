import Image from "next/image";

export const Phrase = () => {
  return (
    <div className="relative w-screen pt-18">
      <Image
        src="/7.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute h-[10%] inset-0 z-10 w-screen bg-gradient-to-b from-[#534559] to-transparent"></div>
      <div className="relative h-screen w-screen bg-gradient-to-t from-[#534559] to-black/20"></div>
      <div className="font-bold w-screen text-center inset-y-[20%] absolute">
        <div className="flex flex-col">
          <p className="text-white relative mb-16 -top-3 font-bold text-[24px] px-5">
            <i>
              <strong>"</strong>
            </i>
            Não existe corpo são, sem uma mente sã{" "}
            <strong className="text-[#D1AA80]">emocionalMENTE</strong>
            <i>
              <strong>"</strong>
            </i>
          </p>
          <p className="text-white relative -top-3 font-bold text-[24px] px-5">
            <i>
              <strong>"</strong>
            </i>
            AS DÚVIDAS E O EXCESSO DE{" "}
            <strong className="text-[#D1AA80]">FUTURO</strong>, RESULTAM EM{" "}
            <strong className="text-[#D1AA80]">ANSIEDADE</strong> E FALTA DE
            FELICIDADE NO <strong className="text-[#D1AA80]">PRESENTE</strong>{" "}
            DA VIDA
            <i>
              <strong>"</strong>
            </i>
          </p>
          <h1 className="text-white text-right pr-5">- Jean Carlo Cardozo</h1>
        </div>
      </div>
    </div>
  );
};
