import { redirect } from "next/navigation";
import { getCurrentUserClient } from "../../shared/functions/authentication/session";
import { LoginForm } from "./components/login-form";

export default async function Page() {
  const user = getCurrentUserClient();
  if (typeof user !== "string") redirect("/client");

  return <LoginForm />;
}
