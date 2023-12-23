import Image from "next/image";

export const Phrase = () => {
  return (
    <div className="relative w-full pt-18">
      <Image
        src="/3.jpeg"
        alt="Jean Carlo Cardozo"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute h-[10%] inset-0 z-10 w-full bg-gradient-to-b from-[#534559] to-transparent"></div>
      <div className="relative h-screen w-full bg-gradient-to-t from-[#534559] to-black/20"></div>
      <div className="font-bold w-full h-screen text-center inset-y-[40%] absolute">
        <div className="flex flex-col mx-[250px]">
          <div className="flex flex-col justify-between">
            <p className="text-white relative uppercase font-bold text-5xl px-5 mb-32">
              <i>
                <strong>"</strong>
              </i>
              Não existe corpo são, sem uma mente sã{" "}
              <strong className="text-[#D1AA80]">emocionalMENTE</strong>
              <i>
                <strong>"</strong>
              </i>
            </p>
            <p className="text-white relative font-bold text-5xl px-5">
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
          </div>
          <h1 className="text-white text-right text-3xl">
            - Jean Carlo Cardozo
          </h1>
        </div>
      </div>
    </div>
  );
};
