import { getCurrentUserClient } from "../../../shared/functions/authentication/session";
import { HeaderDefault } from "./default";
import { HeaderMobile } from "./mobile";

export default async function Header() {
  const user = await getCurrentUserClient();
  return (
    <>
      <div className="sm:hidden flex">
        <HeaderMobile user={user} />
      </div>
      <div className="sm:flex hidden">
        <HeaderDefault user={user} />
      </div>
    </>
  );
}
