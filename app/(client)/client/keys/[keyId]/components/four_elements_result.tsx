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

export const MBTI_DICT = {
  AR: "Ar",
  EA: "Terra",
  FI: "Fogo",
  WA: "Água",
};

export const MbtiResultShow = ({ result }: Props) => {
  return (
    <div className="h-screen flex flex-col sm:w-full w-screen text-center">
      <h1 className="text-9xl text-[#bfa15e] uppercase">
        {MBTI_DICT[result.first]}
      </h1>
    </div>
  );
};
