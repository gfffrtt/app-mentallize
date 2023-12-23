import { MAP } from "../functions/map";
import { Air } from "./elements/air";
import { Earth } from "./elements/earth";
import { Fire } from "./elements/fire";
import { Water } from "./elements/water";
import { FaList } from "react-icons/fa6";
import { MdChecklist } from "react-icons/md";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";

type Props = {
  result: {
    first: "AR" | "EA" | "WA" | "FI";
    second: "AR" | "EA" | "WA" | "FI";
    third: "AR" | "EA" | "WA" | "FI";
    fourth: "AR" | "EA" | "WA" | "FI";
    firstScore: number;
    secondScore: number;
    thirdScore: number;
    fourthScore: number;
  };
};

export const MbtiResultShow = ({ result }: Props) => {
  return (
    <div className="h-full flex flex-col sm:w-full w-screen text-lg px-10 pt-12 pb-12">
      <div className="flex flex-col gap-y-6 mb-6">
        <h1 className="text-4xl mb-4 bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text">
          Olá {MAP[result.first]}:{" "}
        </h1>
        <p>
          Antes de mais nada quero reforçar que este resultado de análise de
          perfil comportamental de preferência não deve servir para você se
          desmotivar ou duvidar de suas capacidades. O que vou revelar sobre
          suas preferências é fruto de anos de estudo e interpretação porém o
          resultado completo dele e o aprofundamento neste teste serão feitos ao
          logo dos meses de seu tratamento em nossa clinica por minhas
          profissinais de saúde.
        </p>
      </div>
      {result.first === "AR" && <Air />}
      {result.first === "EA" && <Earth />}
      {result.first === "FI" && <Fire />}
      {result.first === "WA" && <Water />}
      <div className="flex flex-col gap-y-6">
        <p>
          Ao ler até aqui muita coisa bateu com você outras já não tanto e sabe
          porquê? Bom {MAP[result.first]}! É que ninguém é 100% de um só perfil
          então não são todas as características que estão somente nesta
          primeira etapa. Também existem varianças entre homens e mulheres o que
          acaba atenuando alguns comportamentos frente também ao modelo mental
          de admiração ou do PAI ou da MÃE potencializando o perfil e suas
          preferências para mais masculino ou feminino em suas decisões. Ao logo
          de se programa e do tratamento completo você receberá de minhas
          profissinais da saúde,mais ferramentas como esta e será encorajado a
          mergulhar cada vez mais neste mundo de Inteligência Emocional
          Psicanalítica.
        </p>
        <h1 className="text-4xl mb-4 bg-gradient-to-t from-[#D1AA80] via-[#D1AA80] to-[#E2C7AB] inline-block text-transparent bg-clip-text">
          Próximas etapas:
        </h1>
        <div className="flex flex-col gap-y-3">
          <h1 className="flex flex-row gap-x-2 items-center">
            Principais pontos fortes.
          </h1>
          <h1 className="flex flex-row gap-x-2 items-center">
            Principais pontos fracos ou curvas escuras emocionais.
          </h1>
          <h1 className="flex flex-row gap-x-2 items-center">
            Principais pontos de motivação diaria e como potencializar isso.
          </h1>
          <h1 className="flex flex-row gap-x-2 items-center">
            Como escolher preferências de uma melhor forma em seus habitos.
          </h1>
        </div>
        <p>
          Então {MAP[result.first]} este é um dos 4 testes comportamentais que
          você irá realizar, em modelo Assesment, imagine decifrar como você
          percebe o amor de sua familia viver estas experiências sempre!
          Parabéns pelo primeiro passo eu e minha equipe te aguardamos.
        </p>
        <p className="font-extrabold">
          Caso você tenha percebido neste pré relatório de devolutiva 0,0% de
          caracteristicas de você, não fique triste realizaremos outro teste com
          você em nossa clínica sem custo algum, apenas para asegurarmos a você
          nossa qualidade metodológica. Algumas pessoas podem ter a visão turva
          durante o teste ou ficarem nervosas e ancisosas para terminar o que
          altera suas escolhas e modifica o tipo de resultado.
        </p>
      </div>
    </div>
  );
};
