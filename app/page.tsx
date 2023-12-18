import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

export default async function Page() {
  const db = new PrismaClient();

  await db.user.create({
    data: { email: `${randomUUID()}@gmail.com`, password: randomUUID() },
  });
  const users = await db.user.findMany();

  return (
    users && (
      <div>
        {users.map((user) => (
          <p>
            #{user.id}: {user.email}
          </p>
        ))}
      </div>
    )
  );
}
