import { getCurrentUserClient } from "../../../shared/functions/authentication/session";

type HeaderDefaultProps = {
  user: Awaited<ReturnType<typeof getCurrentUserClient>>;
};
export const HeaderDefault = ({ user }: HeaderDefaultProps) => {
  return <div></div>;
};
