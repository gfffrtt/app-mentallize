import { Default } from "./_components/default";
import { Mobile } from "./_components/mobile";

export default async function Page() {
  return (
    <div>
      <div className="sm:hidden flex">
        <Mobile />
      </div>
      <div className="hidden sm:flex">
        <Default />
      </div>
    </div>
  );
}
