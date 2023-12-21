import { redirect } from "next/navigation";
import { getCurrentUserClient } from "../../shared/functions/authentication/session";

export default async function Page() {
  const user = await getCurrentUserClient();
  if (typeof user === "string") redirect("/");

  return <h1>{user.client.fullName}</h1>;
}
