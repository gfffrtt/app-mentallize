import Image from "next/image";

export const WhoDetail = () => {
  return (
    <div className="relative h-full w-full">
      <div className="relative font-bold w-full h-full bg-[#534559] inset-0 items-center justify-center px-4">
        <div className="text-white relative p-1 bg-gradient-to-tl mb-5 from-[#534559] to-[#9A8A9D] rounded-md mx-[200px]">
          <p className="text-white relative font-medium w-full text-[24px] px-6 py-4 bg-gradient-to-tl from-[#534559] to-[#816F86] rounded-md">
            Em meus 15 anos de experiência em treinamento e desenvolvimento
            humano, que resultam em mais de{" "}
            <strong className="text-[#D1AA80]">
              12 mil profissionais da saúde
            </strong>{" "}
            e empreendedores já treinados, em mais de{" "}
            <strong className="text-[#D1AA80]">
              230 cidades ao redor do mundo
            </strong>
            .
          </p>
        </div>
        <div className="text-white relative p-1 bg-gradient-to-tl mb-5 from-[#534559] to-[#9A8A9D] rounded-md mx-[200px]">
          <p className="text-white relative font-medium w-full text-[24px] px-6 py-4 bg-gradient-to-tl from-[#534559] to-[#816F86] rounded-md">
            Psicanalista com especialização em análise de comportamento humano,{" "}
            <strong className="text-[#D1AA80]">Master Coach</strong>, Master
            Trainer em Inteligência Emocional, e{" "}
            <strong className="text-[#D1AA80]">
              Master Instructor Neurolinguística
            </strong>
            .
          </p>
        </div>
        <div className="text-white relative p-1 bg-gradient-to-tl mb-5 from-[#534559] to-[#9A8A9D] rounded-md mx-[200px]">
          <p className="text-white relative font-medium w-full text-[24px] px-6 py-4 bg-gradient-to-tl from-[#534559] to-[#816F86] rounded-md">
            Autor de dezenas de metodologias e campanhas{" "}
            <strong className="text-[#D1AA80]">psicodinâmicas</strong> para uso
            em ambientes clínicos de saúde.
          </p>
        </div>
      </div>
    </div>
  );
};
