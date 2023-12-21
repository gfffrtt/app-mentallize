import { TbCompass, TbDirections } from "react-icons/tb";
import { BiBrain } from "react-icons/bi";
import { GiLovers, GiUnbalanced } from "react-icons/gi";

export const Tests = () => {
  return (
    <div className="w-screen h-screen bg-[#534559] text-black">
      <h1 className="text-[45px] mb-3 bg-gradient-to-t from-[#D1AA80] via-[#D9B895] to-[#EFDFCF] inline-block text-transparent bg-clip-text font-extrabold text-center w-full leading-[3.2rem] pt-5">
        TESTES DE INTELIGÊNCIA EMOCIONAL
      </h1>
      <div className="bg-gradient-to-br from-[#f3e8dd] to-[#E2C7AB] mx-[20px] my-[20px] shadow-2xl shadow-[#414042] relative min-h-[150px] rounded-md p-1">
        <div className="bg-gradient-to-br from-[#f3e8dd] to-[#EFDFCF] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
          <BiBrain size={130} className="mr-4" />
          <div className="relative h-full w-full">
            <h1 className="text-lg font-extrabold w-full">Four Elements</h1>
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
      </div>
      <div className="bg-gradient-to-br from-[#f3e8dd] to-[#E2C7AB] mx-[20px] my-[20px] shadow-2xl shadow-[#414042] relative min-h-[150px] rounded-md p-1">
        <div className="bg-gradient-to-br from-[#f3e8dd] to-[#EFDFCF] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
          <GiUnbalanced size={130} className="mr-4" />
          <div className="relative h-full w-full">
            <h1 className="text-lg font-extrabold w-full">
              Equílibrio de Vida
            </h1>
            <p className="font-medium w-full leading-[1.2rem] line-clamp-5">
              Este teste ajudará a você a obter uma visão clara sob quais áreas
              de sua vida merecem reforços positivos por estarem bem e quais
              dela merecem uma atenção mais especial. Diante de uma vida onde
              diariamente corremos contra o tempo visando ansiosamente antecipar
              boas conquistas e também prever sérios problemas que aliás muitas
              vezes não acontecem. Esta ferramenta será sua aliada para perceber
              quais prioridades seu corpo e mente precisam hoje.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#f3e8dd] to-[#E2C7AB] mx-[20px] my-[20px] shadow-2xl shadow-[#414042] relative min-h-[150px] rounded-md p-1">
        <div className="bg-gradient-to-br from-[#f3e8dd] to-[#EFDFCF] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
          <GiLovers size={130} className="mr-4" />
          <div className="relative h-full w-full">
            <h1 className="text-lg font-extrabold w-full leading-[1.2rem]">
              Como sentir o Afeto e Amor
            </h1>
            <p className="font-medium w-full leading-[1.2rem] line-clamp-4">
              Muitas vezes nos sentimos sozinhos mesmo cercados de pessoas, isso
              se dá por inúmeros aspectos um deles é nossa incapacidade de
              perceber o afeto e amor que pessoas nos transmitem, cada qual do
              seu jeito. Nem sempre o que eu desejo é o que o meu companheiro ou
              companheira deseja e descobrir isso pode ser uma das maiores
              chaves para uma vida mais feliz e harmoniosa, a dois e também com
              toda sua família.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#f3e8dd] to-[#E2C7AB] mx-[20px] my-[20px] shadow-2xl shadow-[#414042] relative min-h-[150px] rounded-md p-1">
        <div className="bg-gradient-to-br from-[#f3e8dd] to-[#EFDFCF] relative max-h-[150px] rounded-md py-4 px-3 flex justify-center items-center">
          <TbDirections size={130} className="mr-4" />
          <div className="relative h-full w-full">
            <h1 className="text-lg font-extrabold w-full leading-[1.2rem]">
              Bússola de Referência do Aprendizado
            </h1>
            <p className="font-medium w-full leading-[1.2rem] line-clamp-3">
              Nosso corpo recebe, interpreta e envia mensagens do ambiente a
              nossa volta diretamente ao inconsciente emocional, que por sua vês
              recebe e registra todo este aprendizado quer seja negativo ou
              positivo. Descobrir como aproveitar melhor nossa capacidade de
              intercomunicação melhora nosso desempenho em todas as áreas da
              vida e principalmente na melhora da comunicação e plenitude
              emocional de aprendizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
