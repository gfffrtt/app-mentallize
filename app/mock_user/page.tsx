import { hashSync } from "bcrypt";
import { db } from "../shared/database/connection";

export default async function Page() {
  await db.user.create({
    data: {
      email: "admin@gmail.com",
      password: hashSync("admin", 10),
      type: "STAFF",
    },
  });
  return <div></div>;
}
