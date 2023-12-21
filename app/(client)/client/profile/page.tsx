import { getCurrentUserClient } from "../../../shared/functions/authentication/session";

export default async function Page() {
  const user = await getCurrentUserClient();

  return <>{user.client.fullName}</>;
}
