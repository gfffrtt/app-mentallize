import { NextRequest, NextResponse } from "next/server";
import { INCORRECT_EMAIL } from "../../../shared/functions/authentication/errors";
import { signIn } from "../../../shared/functions/authentication/signIn";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  if (typeof email !== "string" || typeof password !== "string")
    return NextResponse.json({ error: INCORRECT_EMAIL });

  try {
    signIn(email, password);
    return NextResponse.json({ message: "SUCCESS" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
