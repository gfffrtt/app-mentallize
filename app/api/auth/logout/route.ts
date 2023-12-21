import { NextResponse } from "next/server";
import { signOut } from "../../../shared/functions/authentication/signOut";

export const DELETE = async () => {
  try {
    signOut();
    return NextResponse.json({ message: "SUCCESS" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
