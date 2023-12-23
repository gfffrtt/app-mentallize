"use client";

import { Key } from "@prisma/client";
import { DataTable } from "../../../../../../shared/components/DataTable";
import { DataTableBody } from "../../../../../../shared/components/DataTable/DataTableBody";
import { DataTableHead } from "../../../../../../shared/components/DataTable/DataTableHead";
import { DataTableHeadLabels } from "../../../../../../shared/components/DataTable/DataTableHead/DataTableHeadLabels";
import { getKeys } from "../functions/get-keys";
import { redirect, useRouter } from "next/navigation";
import { TESTS_DICT } from "../../../../../../shared/functions/rendering/enums";
import { handleReviewedIcon } from "../functions/handle-review-icon";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export type TableProps = {
  clinicId: string;
  keys: Awaited<ReturnType<typeof getKeys>>;
};

export const Table = ({ clinicId, keys }: TableProps) => {
  const router = useRouter();

  const handleKeyRedirect = (key: Key) => {
    redirect(`/staff/clinic/${clinicId}/keys/${key.id}`);
  };

  return (
    <DataTable>
      <DataTableHead>
        <DataTableHeadLabels>
          <td className="border-r px-2 pb-1">Usado:</td>
          <td className="border-r px-2 pb-1">Pessoa:</td>
          <td className="border-r px-2 pb-1">Teste:</td>
          <td className="border-r px-2 pb-1">Review:</td>
          <td className="border-r px-2 pb-1">Vencido:</td>
          <td className="border-r px-2 pb-1">Dia de vencimento:</td>
        </DataTableHeadLabels>
      </DataTableHead>
      <DataTableBody>
        {keys.map((key, index) => (
          <tr key={index}>
            <td
              className="text-center border"
              onClick={() => router.push(handleKeyRedirect(key))}
            >
              {key.testTaken ? (
                <FaCheck className="text-[#80825C]" />
              ) : (
                <IoClose className="text-red-600" />
              )}
            </td>
            <td
              className="text-center border"
              onClick={() => router.push(handleKeyRedirect(key))}
            >
              {!key.client ? "Chave não atrbuída" : key.client.fullName}
            </td>
            <td
              className="text-center border"
              onClick={() => router.push(handleKeyRedirect(key))}
            >
              {TESTS_DICT[key.type]}
            </td>
            <td
              className="text-center border"
              onClick={() => router.push(handleKeyRedirect(key))}
            >
              {handleReviewedIcon(key)}
            </td>
            <td
              className="text-center border"
              onClick={() => router.push(handleKeyRedirect(key))}
            >
              {Math.ceil(key.expiresAt.getTime() - new Date().getTime()) < 0 ? (
                <FaCheck className="text-[#80825C]" />
              ) : (
                <IoClose className="text-red-600" />
              )}
            </td>
            <td
              className="text-center border"
              onClick={() => router.push(handleKeyRedirect(key))}
            >
              {key.expiresAt.toLocaleDateString("pt-br")}
            </td>
          </tr>
        ))}
      </DataTableBody>
    </DataTable>
  );
};
