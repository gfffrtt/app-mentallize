import { redirect } from "next/navigation";
import { getCurrentUserClient } from "../../../shared/functions/authentication/session";
import { AdminLoginForm } from "./components/admin-login-form";

export default async function Page() {
  const user = await getCurrentUserClient();
  if (typeof user !== "string") redirect("/staff/clinics");

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen z-10">
      <h1 className="relative font-bold text-4xl bg-white top-5 px-2 text-[#D9B895]">
        Entrar na conta
      </h1>
      <AdminLoginForm />
    </div>
  );
}
