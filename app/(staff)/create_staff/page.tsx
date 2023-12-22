import { hashSync } from "bcrypt";
import { db } from "../../shared/database/connection";

export default async function Page() {
  const user = await db.user.create({
    data: {
      email: "mock.user@gmail.com",
      password: hashSync("mock", 10),
      type: "STAFF",
      staff: {
        create: { group: "GLOBAL", role: "ADMIN" },
      },
    },
  });
  return <div></div>;
}
