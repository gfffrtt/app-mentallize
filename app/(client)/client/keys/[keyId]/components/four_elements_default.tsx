"use client";

import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { Button } from "../../../../../shared/components/button";
import { api } from "../../../../../shared/functions/api/axios";
import { MbtiResultShow } from "./four_elements_result";
import { $Enums } from "@prisma/client";

const WORDS = [
  {
    air: "Idealismo",
    earth: "Meticulosidade",
    water: "Diversão",
    fire: "Persistência",
  },
  {
    air: "Inovação",
    earth: "Organização",
    water: "Integração",
    fire: "Execução",
  },
  {
    air: "Antecipação",
    earth: "Regras",
    water: "Acordo",
    fire: "Persistência",
  },
  {
    air: "Complexidade",
    earth: "Sistematização",
    water: "Interatividade",
    fire: "Objetividade",
  },
  {
    air: "Curiosidade",
    earth: "Planejamento",
    water: "Relacionamento",
    fire: "Direção",
  },
  {
    air: "Questionamento",
    earth: "Detalhamento",
    water: "Participação",
    fire: "Impulsividade",
  },
  {
    air: "Liberdade",
    earth: "Controle",
    water: "Compreensão",
    fire: "Paciência",
  },
  {
    air: "Descobertas",
    earth: "Previsão",
    water: "Naturalidade",
    fire: "Determinação",
  },
  {
    air: "Irrelevância",
    earth: "Inevitabilidade",
    water: "Socialização",
    fire: "Facilidade",
  },
  { air: "Revolução", earth: "Lógica", water: "Tradição", fire: "Quantidade" },
  {
    air: "Independência",
    earth: "Acúmulo",
    water: "Assistência",
    fire: "Empreendimento",
  },
  { air: "Escolha", earth: "Melhoria", water: "Lazer", fire: "Autonomia" },
  { air: "Aventura", earth: "Ordem", water: "Cooperação", fire: "Execução" },
  {
    air: "Novidade",
    earth: "Controle",
    water: "Solidariedade",
    fire: "Atuação",
  },
  {
    air: "Criatividade",
    earth: "Pontualidade",
    water: "Parceria",
    fire: "Vantagem",
  },
  { air: "Adaptação", earth: "Consistência", water: "Equipe", fire: "Líder" },
  { air: "Desafio", earth: "Estratégia", water: "Percurso", fire: "Chegada" },
  { air: "Desconfiança", earth: "Prevenção", water: "União", fire: "Ataque" },
  {
    air: "Mistério",
    earth: "Compreensão",
    water: "Reencontro",
    fire: "Pressa",
  },
  { air: "Mudança", earth: "Rotina", water: "Amizade", fire: "Produtividade" },
  {
    air: "Estranheza",
    earth: "Perfeição",
    water: "Envolvimento",
    fire: "Foco",
  },
  { air: "Eficácia", earth: "Perícia", water: "Experiência", fire: "Sucesso" },
  { air: "Desligado", earth: "Gradativo", water: "Justiça", fire: "Firmeza" },
  {
    air: "Multiplicidade",
    earth: "Cautela",
    water: "Conjunto",
    fire: "Competição",
  },
];

function calculatePorcentages({
  air,
  airWeight,
  earth,
  earthWeight,
  fire,
  fireWeight,
  water,
  waterWeight,
}: MbtiValue) {
  const AIR_SCORE = air * airWeight;
  const FIRE_SCORE = fire * fireWeight;
  const WATER_SCORE = water * waterWeight;
  const EARTH_SCORE = earth * earthWeight;
  const TOTAL = AIR_SCORE + EARTH_SCORE + WATER_SCORE + FIRE_SCORE;

  return {
    airPorcentage: (AIR_SCORE / TOTAL) * 100,
    firePorcentage: (FIRE_SCORE / TOTAL) * 100,
    waterPorcentage: (WATER_SCORE / TOTAL) * 100,
    earthPorcentage: (EARTH_SCORE / TOTAL) * 100,
  };
}

function sortPorcentagesWithType({
  airPorcentage,
  earthPorcentage,
  firePorcentage,
  waterPorcentage,
}: ReturnType<typeof calculatePorcentages>): {
  first: "AR" | "EA" | "FI" | "WA";
  second: "AR" | "EA" | "FI" | "WA";
  third: "AR" | "EA" | "FI" | "WA";
  fourth: "AR" | "EA" | "FI" | "WA";
  firstScore: number;
  secondScore: number;
  thirdScore: number;
  fourthScore: number;
} {
  const values: { type: "AR" | "EA" | "FI" | "WA"; porcentage: number }[] = [
    { type: "AR", porcentage: airPorcentage },
    { type: "WA", porcentage: waterPorcentage },
    { type: "EA", porcentage: earthPorcentage },
    { type: "FI", porcentage: firePorcentage },
  ];

  for (var i = 0; i <= values.length - 1; i++) {
    for (var j = 0; j < values.length - i - 1; j++) {
      if (values[j].porcentage < values[j + 1].porcentage) {
        const temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
    }
  }

  return {
    first: values[0].type,
    second: values[1].type,
    third: values[2].type,
    fourth: values[3].type,
    firstScore: values[0].porcentage,
    secondScore: values[1].porcentage,
    thirdScore: values[2].porcentage,
    fourthScore: values[3].porcentage,
  };
}

type MbtiValue = {
  air: number;
  airWeight: number;
  water: number;
  waterWeight: number;
  earth: number;
  earthWeight: number;
  fire: number;
  fireWeight: number;
};

type Word = {
  air: string;
  earth: string;
  fire: string;
  water: string;
};

type HelperProps = {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
};

type ResultProps = {
  values: MbtiValue;
  clinicId: string;
  keyId: string;
  clientId: string;
};

type MbtiWordsProps = {
  air: string;
  earth: string;
  fire: string;
  water: string;
  values: MbtiValue;
  setValues: React.Dispatch<SetStateAction<MbtiValue>>;
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  clinicId: string;
  keyId: string;
  clientId: string;
};

type MbtiSectionsProps = {
  words: Word[];
  values: MbtiValue;
  setValues: React.Dispatch<SetStateAction<MbtiValue>>;
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  clinicId: string;
  keyId: string;
  clientId: string;
};

type MbtiTestProps = {
  keyId: string;
  clientId: string;
  clinicId: string;
};

export const FourElementsDefault = ({
  keyId,
  clientId,
  clinicId,
}: MbtiTestProps) => {
  const router = useRouter();

  const [values, setValues] = useState<MbtiValue>({
    air: 1,
    airWeight: 1,
    water: 1,
    waterWeight: 1,
    earth: 1,
    earthWeight: 1,
    fire: 1,
    fireWeight: 1,
  });

  const [step, setStep] = useState<number>(0);

  return (
    <div className="h-screen">
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push("/client");
        }}
        Icon={BiLogOutCircle}
        variant="outline"
        className="relative mt-[80px] -left-[30%]"
      >
        Sair
      </Button>
      <main className="h-screen w-full bg-white flex flex-col justify-center items-center text-[#414042] font-bold">
        {step === 0 && <Helper step={step} setStep={setStep} />}
        {step <= 24 && step > 0 && (
          <MbtiSections
            words={WORDS}
            step={step}
            setStep={setStep}
            values={values}
            setValues={setValues}
            clientId={clientId}
            clinicId={clinicId}
            keyId={keyId}
          />
        )}
        {step === 24 && (
          <Result
            clientId={clientId}
            clinicId={clinicId}
            keyId={keyId}
            values={values}
          />
        )}
      </main>
    </div>
  );
};

function MbtiWords({
  air,
  earth,
  fire,
  water,
  setValues,
  values,
  step,
  setStep,
}: MbtiWordsProps) {
  const [choice, setChoice] = useState<"air" | "earth" | "water" | "fire">(
    "air"
  );

  const [weight, setWeight] = useState<{
    air: string;
    water: string;
    earth: string;
    fire: string;
  }>({ air: "0", water: "10", earth: "0", fire: "0" });

  const handleNext = () => {
    if (
      parseInt(weight.air) +
        parseInt(weight.water) +
        parseInt(weight.earth) +
        parseInt(weight.fire) ===
      10
    ) {
      setValues({
        ...values,
        [choice]: values[choice] + 1,
        fireWeight: values.fireWeight + parseInt(weight.fire),
        waterWeight: values.waterWeight + parseInt(weight.water),
        earthWeight: values.earthWeight + parseInt(weight.earth),
        airWeight: values.airWeight + parseInt(weight.air),
      });
      setStep(step + 1);
    }
  };

  return (
    <main className="h-screen pt-12 w-full mx-auto">
      <div className="w-full grid grid-cols-2 gap-x-24 gap-y-16">
        <div
          className={
            choice === "air"
              ? "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
              : "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#534559] hover:ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
          }
          onClick={() => setChoice("air")}
        >
          <h1
            className={
              choice === "air"
                ? "text-5xl hover:cursor-pointer text-[#BB926B] font-bold duration-300 ease-in-out"
                : "text-5xl hover:cursor-pointer group-hover:text-[#BB926B] font-bold text-[#534559] duration-300 ease-in-out"
            }
          >
            {air}
          </h1>
          <div className="flex pt-5 items-center w-[30%]">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="flex w-full flex-col justify-center outline-none text-center text-md font-medium border-b-[#534559] border-2 border-white"
              value={weight.air}
              onChange={(e) =>
                isNaN(parseInt(weight.air)) &&
                e.target.value.length <= 2 &&
                setWeight({ ...weight, air: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className={
            choice === "earth"
              ? "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
              : "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#534559] hover:ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
          }
          onClick={() => setChoice("earth")}
        >
          <h1
            className={
              choice === "earth"
                ? "text-5xl hover:cursor-pointer text-[#BB926B] font-bold duration-300 ease-in-out"
                : "text-5xl hover:cursor-pointer group-hover:text-[#BB926B] font-bold text-[#534559] duration-300 ease-in-out"
            }
          >
            {earth}
          </h1>
          <div className="flex pt-5 items-center w-[30%]">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="flex w-full flex-col justify-center outline-none text-center text-md font-medium border-b-[#534559] border-2 border-white"
              value={weight.earth}
              onChange={(e) =>
                isNaN(parseInt(weight.earth)) &&
                e.target.value.length <= 2 &&
                setWeight({ ...weight, earth: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className={
            choice === "fire"
              ? "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
              : "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#534559] hover:ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
          }
          onClick={() => setChoice("fire")}
        >
          <h1
            className={
              choice === "fire"
                ? "text-5xl hover:cursor-pointer text-[#BB926B] font-bold duration-300 ease-in-out"
                : "text-5xl hover:cursor-pointer group-hover:text-[#BB926B] font-bold text-[#534559] duration-300 ease-in-out"
            }
          >
            {fire}
          </h1>
          <div className="flex pt-5 items-center w-[30%]">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="flex w-full flex-col justify-center outline-none text-center text-md font-medium border-b-[#534559] border-2 border-white"
              value={weight.fire}
              onChange={(e) =>
                isNaN(parseInt(weight.fire)) &&
                e.target.value.length <= 2 &&
                setWeight({ ...weight, fire: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className={
            choice === "water"
              ? "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
              : "flex justify-center items-center flex-col w-[500px] h-[300px] group ring-2 ring-[#534559] hover:ring-[#BB926B] ring-offset-2 rounded-md p-2 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
          }
          onClick={() => setChoice("water")}
        >
          <h1
            className={
              choice === "water"
                ? "text-5xl hover:cursor-pointer text-[#BB926B] font-bold duration-300 ease-in-out"
                : "text-5xl hover:cursor-pointer group-hover:text-[#BB926B] font-bold text-[#534559] duration-300 ease-in-out"
            }
          >
            {water}
          </h1>
          <div className="flex pt-5 items-center w-[30%]">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="flex w-full flex-col justify-center outline-none text-center text-md font-medium border-b-[#534559] border-2 border-white"
              value={weight.water}
              onChange={(e) =>
                isNaN(parseInt(weight.water)) &&
                e.target.value.length <= 2 &&
                setWeight({ ...weight, water: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center pt-8">
        <Button onClick={() => handleNext()}>Próximo</Button>
      </div>
    </main>
  );
}

function MbtiSections({
  words,
  setValues,
  values,
  step,
  setStep,
  clientId,
  clinicId,
  keyId,
}: MbtiSectionsProps) {
  return (
    <div>
      {words.map(({ air, earth, fire, water }, i) => {
        if (step === i)
          return (
            <div key={i}>
              <MbtiWords
                air={air}
                earth={earth}
                water={water}
                fire={fire}
                setValues={setValues}
                values={values}
                step={step}
                setStep={setStep}
                clientId={clientId}
                clinicId={clinicId}
                keyId={keyId}
              />
            </div>
          );
      })}
    </div>
  );
}

const Helper = ({ step, setStep }: HelperProps) => {
  return (
    <div className="relative -top-[10%] mx-36 h-screen w-[70%] flex flex-col justify-center items-center gap-y-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-14 text-6xl text-[#bfa15e]">COMO FUNCIONA</h1>
        <p className="font-semibold text-lg">
          Para fazer este teste, você precisa dar pontos para as palvras, de
          jeito que a soma de todas suas pontuações seja igual a 10, após isso,
          escolha qual das palavras você mais se identifica.
        </p>
      </div>
      <div>
        <Button onClick={() => setStep(step + 1)}>Próximo</Button>
      </div>
    </div>
  );
};

const Result = ({ values, clientId, clinicId, keyId }: ResultProps) => {
  const [result, setResult] = useState<{
    first: "AR" | "EA" | "WA" | "FI";
    second: "AR" | "EA" | "WA" | "FI";
    third: "AR" | "EA" | "WA" | "FI";
    fourth: "AR" | "EA" | "WA" | "FI";
    firstScore: number;
    secondScore: number;
    thirdScore: number;
    fourthScore: number;
  }>({
    first: "AR",
    second: "AR",
    third: "AR",
    fourth: "AR",
    firstScore: 0,
    secondScore: 0,
    thirdScore: 0,
    fourthScore: 0,
  });

  useEffect(() => {
    const { airPorcentage, earthPorcentage, firePorcentage, waterPorcentage } =
      calculatePorcentages(values);
    const data = sortPorcentagesWithType({
      airPorcentage: parseInt(airPorcentage.toFixed(3)),
      earthPorcentage: parseInt(earthPorcentage.toFixed(3)),
      firePorcentage: parseInt(firePorcentage.toFixed(3)),
      waterPorcentage: parseInt(waterPorcentage.toFixed(3)),
    });

    async function createResultMbti() {
      await api.post(`/api/clinic/${clinicId}`, {
        fourElements: {
          ...data,
          keyId,
        },
        key: {
          id: keyId,
          test: "MB",
          testTaken: true,
        },
      });
    }

    setResult(data);
    createResultMbti();
  }, []);

  return <MbtiResultShow result={result} />;
};
