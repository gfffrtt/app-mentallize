import { NextRequest, NextResponse } from "next/server";
import {
  INCORRECT_EMAIL,
  INCORRECT_PASSWORD,
  NOT_AN_ADMIN,
  SUCCESS,
} from "../../../shared/functions/authentication/errors";
import { signInAdmin } from "../../../shared/functions/authentication/signIn";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  if (typeof email !== "string" || typeof password !== "string")
    return NextResponse.json({ error: INCORRECT_EMAIL });

  const result = await signInAdmin(email, password);
  switch (true) {
    case result === NOT_AN_ADMIN:
    case result === INCORRECT_PASSWORD:
    case result === INCORRECT_EMAIL:
      return NextResponse.json({ error: result }, { status: 401 });
    case result === SUCCESS:
      return NextResponse.json({ message: result }, { status: 200 });
  }
};
