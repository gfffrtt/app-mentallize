import { redirect } from "next/navigation";
import { getCurrentUserClient } from "../../../../shared/functions/authentication/session";
import { db } from "../../../../shared/database/connection";
import { LoginOrRegister } from "./components/login-or-register";
import { FourElementsMobile } from "./components/four_elements";
import { handleRelations } from "./functions/handle_relations";
import { FourElementsDefault } from "./components/four_elements_default";

export default async function Page({
  params: { keyId },
}: {
  params: { keyId: string };
}) {
  const user = await getCurrentUserClient();
  if (typeof user === "string") return <LoginOrRegister />;
  if (user.type === "STAFF") redirect("/staff/clinics");

  const key = await db.key.findFirstOrThrow({ where: { id: keyId } });
  if (!!key.clientId && key.clientId !== user.client.id) redirect("/client");
  if (key.testTaken) redirect("/client");
  if (!key.clientId) handleRelations(key.clinicId, user.client.id, key.id);

  switch (true) {
    case key.type === "FOUR_ELEMENTS":
    case key.type === "CIRCLE_OF_LIFE":
    case key.type === "LOVE_LANGUAGE":
    case key.type === "SELF_KNOWLEDGE":
      return (
        <>
          <div className="sm:hidden flex">
            <FourElementsMobile
              clientId={user.client.id}
              clinicId={key.clinicId}
              keyId={key.id}
            />
          </div>
          <div className="sm:flex hidden justify-center items-center">
            <FourElementsDefault
              clientId={user.client.id}
              clinicId={key.clinicId}
              keyId={key.id}
            />
          </div>
        </>
      );
  }
}
