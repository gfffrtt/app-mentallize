import { TbCompass, TbDirections } from "react-icons/tb";
import { BiBrain } from "react-icons/bi";
import { GiLovers, GiUnbalanced } from "react-icons/gi";
import Link from "next/link";

export const Tests = () => {
  return (
    <div className="w-screen pb-5 bg-[#534559] text-white">
      <h1 className="text-[45px] mb-3 bg-gradient-to-t from-[#D1AA80] via-[#D9B895] to-[#EFDFCF] inline-block text-transparent bg-clip-text font-extrabold text-center w-full leading-[3.2rem] pt-5">
        TESTES DE INTELIGÊNCIA EMOCIONAL
      </h1>
      <div className="bg-gradient-to-tl from-[#534559] to-[#9A8A9D] mx-[20px] my-[20px] relative min-h-[150px] rounded-md p-1">
        <Link href="/register">
          <div className="bg-gradient-to-tl from-[#534559] to-[#816F86] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
            <BiBrain size={130} className="mr-4" />
            <div className="relative h-full w-full">
              <h1 className="text-lg font-extrabold w-full bg-gradient-to-t from-[#D1AA80] via-[#D9B895] to-[#EFDFCF] inline-block text-transparent bg-clip-text">
                Four Elements
              </h1>
              <p className="font-medium w-full leading-[1.2rem] line-clamp-5">
                Nossa metodologia já foi aplicada em mais de 10 mil pessoas
                diretamente pelo interprete e Instrutor Jean Carlo Cardozo ao
                longo de anos de pesquisa e treinamentos. Nossa base de
                conhecimento está diretamente ligada ao estudo da psicanálise do
                Doutor Sigmund Freud ID, EGO, SUPER EGO, consciente e
                inconsciente. Também a uma profunda avalição da teoria dos tipos
                psicológicos do Doutor Carl Jung.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-gradient-to-tl from-[#534559] to-[#9A8A9D] mx-[20px] my-[20px] relative min-h-[150px] rounded-md p-1">
        <Link href="/register">
          <div className="bg-gradient-to-tl from-[#534559] to-[#816F86] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
            <GiUnbalanced size={130} className="mr-4" />
            <div className="relative h-full w-full">
              <h1 className="text-lg font-extrabold w-full bg-gradient-to-tr from-[#D1AA80] via-[#D9B895] to-[#EFDFCF] inline-block text-transparent bg-clip-text">
                Equílibrio de Vida
              </h1>
              <p className="font-medium w-full leading-[1.2rem] line-clamp-5">
                Este teste ajudará a você a obter uma visão clara sob quais
                áreas de sua vida merecem reforços positivos por estarem bem e
                quais dela merecem uma atenção mais especial. Diante de uma vida
                onde diariamente corremos contra o tempo visando ansiosamente
                antecipar boas conquistas e também prever sérios problemas que
                aliás muitas vezes não acontecem. Esta ferramenta será sua
                aliada para perceber quais prioridades seu corpo e mente
                precisam hoje.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-gradient-to-tl from-[#534559] to-[#9A8A9D] mx-[20px] my-[20px] relative min-h-[150px] rounded-md p-1">
        <Link href="/register">
          <div className="bg-gradient-to-tl from-[#534559] to-[#816F86] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
            <GiLovers size={130} className="mr-4" />
            <div className="relative h-full w-full">
              <h1 className="text-lg font-extrabold w-full bg-gradient-to-tr from-[#D1AA80] via-[#D9B895] to-[#EFDFCF] inline-block text-transparent bg-clip-text leading-[1.2rem]">
                Como sentir o Afeto e Amor
              </h1>
              <p className="font-medium w-full leading-[1.2rem] line-clamp-4">
                Muitas vezes nos sentimos sozinhos mesmo cercados de pessoas,
                isso se dá por inúmeros aspectos um deles é nossa incapacidade
                de perceber o afeto e amor que pessoas nos transmitem, cada qual
                do seu jeito. Nem sempre o que eu desejo é o que o meu
                companheiro ou companheira deseja e descobrir isso pode ser uma
                das maiores chaves para uma vida mais feliz e harmoniosa, a dois
                e também com toda sua família.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-gradient-to-tl from-[#534559] to-[#9A8A9D] mx-[20px] my-[20px] relative min-h-[150px] rounded-md p-1">
        <Link href="/register">
          <div className="bg-gradient-to-tl from-[#534559] to-[#816F86] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
            <TbDirections size={130} className="mr-4" />
            <div className="relative h-full w-full">
              <h1 className="text-lg font-extrabold w-full bg-gradient-to-t from-[#D1AA80] via-[#D9B895] to-[#EFDFCF] inline-block text-transparent bg-clip-text leading-[1.2rem]">
                Bússola de Referência do Aprendizado
              </h1>
              <p className="font-medium w-full leading-[1.2rem] line-clamp-3">
                Nosso corpo recebe, interpreta e envia mensagens do ambiente a
                nossa volta diretamente ao inconsciente emocional, que por sua
                vês recebe e registra todo este aprendizado quer seja negativo
                ou positivo. Descobrir como aproveitar melhor nossa capacidade
                de intercomunicação melhora nosso desempenho em todas as áreas
                da vida e principalmente na melhora da comunicação e plenitude
                emocional de aprendizado.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
