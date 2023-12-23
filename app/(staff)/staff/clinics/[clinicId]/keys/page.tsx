import { redirect } from "next/navigation";
import { getCurrentUserStaff } from "../../../../../shared/functions/authentication/session";
import { Toolbar } from "./components/tool-bar";
import { Table } from "./components/table";
import { getKeys } from "./functions/get-keys";

export default async function Page({
  params: { clinicId },
  searchParams: { fullName },
}: {
  params: { clinicId: string };
  searchParams: { fullName?: string };
}) {
  const user = await getCurrentUserStaff();
  if (typeof user === "string") redirect("/");
  if (user.type === "CLIENT") redirect("/client");
  const keys = await getKeys(clinicId, fullName);

  return (
    <div className="text-[#414042] bg-white rounded-md border w-full p-5 mt-[80px]">
      <h1 className="text-[#BB926B] text-4xl mb-20 font-bold">Chaves</h1>
      <Toolbar clinicId={clinicId} />
      <Table clinicId={clinicId} keys={keys} />
    </div>
  );
}
