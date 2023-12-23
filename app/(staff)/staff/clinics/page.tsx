import { redirect } from "next/navigation";
import { getCurrentUserStaff } from "../../../shared/functions/authentication/session";
import { getClinics } from "./functions/get_clinics";
import { FaClinicMedical } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import Link from "next/link";

export default async function Page() {
  const user = await getCurrentUserStaff();
  if (typeof user === "string") redirect("/");
  if (user.type === "CLIENT") redirect("/client");

  const clinics = await getClinics(user.staff);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-5xl font-bold text-[#534559] mb-12">
        Minhas clínicas
      </h1>
      <div className="grid grid-cols-4 gap-x-10 gap-y-5">
        {clinics.map((clinic) => (
          <Link href={`/staff/clinics/${clinic.id}/keys`}>
            <div className="w-[250px] h-[250px] flex flex-col items-center duration-500 justify-center hover:text-[#D9B895] hover:border-[#D9B895] p-6 text-[#534559] rounded-3xl border-4 border-[#534559] ">
              <FaClinicMedical size={175} />
              <h1 className="max-w-[230px] truncate font-bold text-3xl">
                {clinic.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      {!clinics.length && (
        <div>
          <IoWarningOutline
            size={100}
            className="text-red-600 w-full text-center mb-8"
          />
          <h1 className="text-red-600 flex flex-col text-center font-extrabold rounded-md mb-4 w-[400px]">
            Parece que você não está registrado em nenhuma clínica, se isso não
            era para estar acontecendo, por favor entrar em contato com o
            suporte
          </h1>
        </div>
      )}
    </div>
  );
}
