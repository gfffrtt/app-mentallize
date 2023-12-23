"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { Modal } from "../../../../../../shared/components/Modal/Modal";
import { Select } from "../../../../../../shared/components/select";
import { Button } from "../../../../../../shared/components/button";
import { TEST_CHOICES_NO_EMPTY } from "../../../../../../shared/functions/rendering/choices";
import { Input } from "../../../../../../shared/components/input";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { api } from "../../../../../../shared/functions/api/axios";

export const Toolbar = ({ clinicId }: { clinicId: string }) => {
  const router = useRouter();
  const path = usePathname();
  const [search, setSearch] = useState<string>("");
  const [test, setTest] = useState<"MB" | "SK" | "LO" | "LI">("MB");
  const [open, setOpen] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  const handleCreateKey = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post(`/api/clinic/${clinicId}/keys/${test}`)
      .then((response) => setLink(response.data.link));
  };
  const handleSearch = () =>
    search ? router.push(`${path}?fullName=${search}`) : router.push(path);

  return (
    <div className="mb-2 w-full flex justify-between gap-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="flex flex-row items-center gap-x-2">
          <Input
            title="Nome:"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            inputClassName="px-2"
            placeholder="Pesquisar..."
          />
          <Button size="sm">
            <FaSearch className="text-white" />
          </Button>
        </div>
      </form>

      <Modal
        label="Criar chave"
        open={open}
        Icon={AiOutlinePlus}
        setOpen={setOpen}
        onClose={() => {
          if (link) window.location.reload();
        }}
      >
        {link && (
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-md border-[#534559] mt-5 border-b-2 w-full text-[#534559]">
              Link da chave:
            </h1>
            <h1
              onClick={() => {
                navigator.clipboard.writeText(link);
              }}
              className="font-bold text-[#534559] truncate px-3 hover:cursor-pointer py-1 bg-gray-200 rounded-md"
            >
              {link}
            </h1>
          </div>
        )}
        {!link && (
          <form
            onSubmit={(e) => handleCreateKey(e)}
            className="flex flex-col items-start gap-[1.2rem] w-full"
          >
            <h1 className="font-bold text-md border-[#534559] mt-4 border-b-2 w-full text-[#534559]">
              Informações da Chave:
            </h1>
            <Select
              title="Teste:"
              value={test}
              onChange={(e) =>
                setTest(e.target.value as "MB" | "SK" | "LO" | "LI")
              }
              choices={TEST_CHOICES_NO_EMPTY}
            />
            <div className="w-full flex items-center justify-center">
              <Button>Criar</Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
