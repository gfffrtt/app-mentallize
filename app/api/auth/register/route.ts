import { NextRequest, NextResponse } from "next/server";

import { register } from "../../../shared/functions/authentication/register";
import { isRegisterData } from "../../../(client)/register/types/register-data";
import {
  EMAIL_ALREADY_USED,
  INCORRECT_EMAIL,
  SUCCESS,
} from "../../../shared/functions/authentication/errors";

export const POST = async (req: NextRequest) => {
  const registerData = await req.json();
  if (!isRegisterData(registerData))
    return NextResponse.json(
      { error: "UNPROCESSABLE ENTITY" },
      { status: 422 }
    );

  const result = await register(
    registerData.email,
    registerData.password,
    registerData.fullName,
    registerData.ddd,
    registerData.number
  );
  switch (true) {
    case result === SUCCESS:
      return NextResponse.json({ message: result }, { status: 200 });
    case result === EMAIL_ALREADY_USED:
    case result === INCORRECT_EMAIL:
      return NextResponse.json({ error: result }, { status: 500 });
  }
};
