"use server";

import { deleteCookie } from "./cookie";
import { deleteCurrentSession } from "./session";

export const signOut = () => {
  deleteCurrentSession();
  deleteCookie();
};
