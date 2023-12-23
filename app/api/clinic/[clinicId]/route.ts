import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../shared/database/connection";
import { $Enums } from "@prisma/client";

export const GET = async (
  req: NextRequest,
  { params: { clinicId } }: { params: { clinicId: string } }
) => {
  const clinic = await db.clinic.findFirst({
    where: { id: clinicId },
  });
  return NextResponse.json(clinic);
};

export const TEST_DICT = {
  AR: $Enums.ELEMENTS.AIR,
  WA: $Enums.ELEMENTS.WATER,
  FI: $Enums.ELEMENTS.FIRE,
  EA: $Enums.ELEMENTS.EARTH,
};

export const POST = async (req: NextRequest) => {
  const { fourElements, key } = await req.json();
  if (!fourElements || !key)
    return NextResponse.json(
      { error: "UNPROCESSABLE ENTITY" },
      { status: 422 }
    );
  if (key.testTaken)
    return NextResponse.json({ message: "Success" }, { status: 200 });
  switch (key.test as "MB" | "SK" | "LO" | "LI") {
    case "MB":
      await db.key.update({
        where: { id: key.id },
        data: {
          testTaken: true,
        },
      });
      await db.result.create({
        data: {
          analyzed: false,
          finishedAt: new Date(),
          startedAt: new Date(),
          fourElements: {
            create: {
              keyId: key.id as string,
              first: TEST_DICT[fourElements.first] as $Enums.ELEMENTS,
              second: TEST_DICT[fourElements.second] as $Enums.ELEMENTS,
              third: TEST_DICT[fourElements.third] as $Enums.ELEMENTS,
              fourth: TEST_DICT[fourElements.fourth] as $Enums.ELEMENTS,
              firstScore: fourElements.firstScore as number,
              secondScore: fourElements.secondScore as number,
              thirdScore: fourElements.thirdScore as number,
              fourthScore: fourElements.fourthScore as number,
            },
          },
        },
      });
      break;
    case "SK":
    case "LO":
    case "LI":
      break;
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
};
