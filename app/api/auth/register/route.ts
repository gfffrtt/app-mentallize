import { NextRequest, NextResponse } from "next/server";

import { register } from "../../../shared/functions/authentication/register";
import { isRegisterData } from "../../../(client)/register/types/register-data";

export const POST = async (req: NextRequest) => {
  const registerData = await req.json();
  if (!isRegisterData(registerData)) return NextResponse.json({ status: 422 });
  try {
    register(
      registerData.email,
      registerData.password,
      registerData.fullName,
      registerData.ddd,
      registerData.number
    );
    return NextResponse.json({ message: "SUCCESS" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
