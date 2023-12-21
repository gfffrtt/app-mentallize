import { Landing } from "./landing";
import { Tests } from "./tests";

export const Mobile = () => {
  return (
    <div className="flex flex-col">
      <section id="landing" className="h-screen">
        <Landing />
      </section>
      <section id="tests" className="h-screen">
        <Tests />
      </section>
    </div>
  );
};
