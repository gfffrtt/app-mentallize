import { NextResponse } from "next/server";
import { db } from "../../../../../shared/database/connection";

export const POST = async (
  req: Request,
  {
    params: { test, clinicId },
  }: {
    params: { test: "MB" | "SK" | "LO" | "LI"; clinicId: string };
  }
) => {
  const now = new Date();
  const future = new Date(now);
  future.setDate(now.getDate() + 30);
  switch (test) {
    case "MB":
    case "SK":
    case "LO":
    case "LI":
      const key = await db.key.create({
        data: {
          testTaken: false,
          expiresAt: future,
          type: "FOUR_ELEMENTS",
          clinic: { connect: { id: clinicId } },
        },
      });
      return NextResponse.json({
        link: `${process.env.BASE_URL}/client/keys/${key.id}`,
      });
  }
};
