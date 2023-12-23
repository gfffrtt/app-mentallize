import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { RegisterForm } from "./components/register-form";
import { getCurrentUserClient } from "../../shared/functions/authentication/session";
import { redirect } from "next/navigation";
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
      <div className="hidden sm:flex">
        <Default />
      </div>
    </div>
  );
}
