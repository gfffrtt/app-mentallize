"use server";

import { db } from "../../../../../shared/database/connection";

export const handleRelations = async (
  clinicId: string,
  clientId: string,
  keyId: string
) => {
  await db.clientClinic.create({
    data: {
      joinDate: new Date(),
      clientId,
      clinicId,
    },
  });
  await db.key.update({
    where: { id: keyId },
    data: { clientId, clinicId },
  });
};
