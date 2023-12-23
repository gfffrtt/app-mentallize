import { hashSync } from "bcrypt";
import { db } from "../../shared/database/connection";

export default async function Page() {
  await db.user.create({
    data: {
      email: "mock.user@gmail.com",
      password: hashSync("mock", 10),
      type: "STAFF",
    },
  });

  return <h1>a</h1>;
}
