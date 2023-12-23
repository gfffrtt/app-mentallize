import { db } from "../../../../../../shared/database/connection";

export const getKeys = async (clinicId: string, fullName?: string) => {
  switch (true) {
    case !fullName:
      return await db.key.findMany({
        where: { clinic: { id: clinicId } },
        include: {
          client: true,
          circleOfLife: { include: { result: true } },
          fourElements: { include: { result: true } },
          loveLanguage: { include: { result: true } },
          selfKnowledge: { include: { result: true } },
        },
      });
    case typeof fullName === "string":
      return await db.key.findMany({
        where: { clinic: { id: clinicId }, client: { fullName } },
        include: {
          client: true,
          circleOfLife: { include: { result: true } },
          fourElements: { include: { result: true } },
          loveLanguage: { include: { result: true } },
          selfKnowledge: { include: { result: true } },
        },
      });
  }
};
