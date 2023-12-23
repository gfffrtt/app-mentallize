import { redirect } from "next/navigation";
import { getCurrentUserClient } from "../../shared/functions/authentication/session";
import { Mobile } from "./components/mobile";
import { Default } from "./components/default";

export default async function Page() {
  const user = await getCurrentUserClient();
  if (typeof user !== "string") redirect("/client");

  return (
    <div>
      <div className="flex sm:hidden">
        <Mobile />
      </div>
      <div className="sm:flex hidden">
        <Default />
      </div>
    </div>
  );
}
