import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Button } from "../button";

type ModalProps = {
  open: boolean;
  Icon?: React.ElementType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export const Modal = ({
  open,
  setOpen,
  children,
  label,
  Icon,
  onClose,
}: ModalProps) => {
  if (!open)
    return (
      <Button
        variant="outline"
        size="default"
        className="gap-2"
        onClick={(e) => {
          e.preventDefault();
          if (onClose) onClose();
          setOpen(!open);
        }}
      >
        {label}
        {Icon && <Icon />}
      </Button>
    );

  return (
    <div className="fixed flex inset-0 items-center justify-center h-screen z-40 bg-black backdrop-blur-sm text-[#414042] bg-opacity-70">
      <div className="bg-white rounded-md ring-2 ring-offset-2 ring-white px-10 py-5 w-[500px] h-fit">
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (onClose) onClose();
              setOpen(!open);
            }}
            className="text-[#534559]"
          >
            <IoMdCloseCircleOutline size={30} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
