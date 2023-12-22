"use server";

import { Staff } from "@prisma/client";
import { db } from "../../../../shared/database/connection";

export const getClinics = async (staff: Staff) => {
  switch (true) {
    case staff.group === "GLOBAL":
      return await db.clinic.findMany();
    case staff.group === "SCOPED":
      return await db.clinic.findMany({
        where: { staffClinic: { some: { staffId: staff.id } } },
      });
  }
};
