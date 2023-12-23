import { Landing } from "./landing";
import { Phrase } from "./phrase";
import { Tests } from "./tests";
import { Who } from "./who";
import { WhoDetail } from "./who-detail";

export const Default = () => {
  return (
    <div className="flex flex-col">
      <section id="landing" className="h-full">
        <Landing />
      </section>
      <section id="tests" className="h-full">
        <Tests />
      </section>
      <section id="who" className="h-full">
        <Who />
      </section>
      <section id="whodetail" className="h-full">
        <WhoDetail />
      </section>
      <section id="phrase" className="h-full">
        <Phrase />
      </section>
    </div>
  );
};
