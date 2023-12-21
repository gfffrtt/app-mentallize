import { NextResponse } from "next/server";
import { signOut } from "../../../shared/functions/authentication/signOut";
import { SUCCESS } from "../../../shared/functions/authentication/errors";

export const DELETE = async () => {
  signOut();
  return NextResponse.json({ message: SUCCESS }, { status: 200 });
};
