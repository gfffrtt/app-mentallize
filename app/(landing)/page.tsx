import { Default } from "./_components/default/default";
import { Mobile } from "./_components/mobile/mobile";

export default async function Page() {
  return (
    <main>
      <div className="sm:hidden flex">
        <Mobile />
      </div>
      <div className="sm:flex hidden">
        <Default />
      </div>
    </main>
  );
}
