"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ModalAddComponent from "../Modal/ModalAddDocument";
import PlusIcon from "@/assets/icons/plus-icon.svg";

export default function EmptyDocument() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <ModalAddComponent show={show} onClose={() => setShow(false)} />
      <div className="flex h-[39vh] w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="text-36 font-semibold text-baseblack">Yahh...</p>
          <h2 className="mt-1 text-18 font-medium text-neutral700">
            Kamu belum memiliki dokumen, tambahkan dokumenmu melalui tombol di
            bawah
          </h2>
          <Button
            className="mt-6 inline-flex items-center gap-2 rounded-full"
            onClick={() => setShow(true)}
          >
            <PlusIcon /> Tambah Dokumen
          </Button>
        </div>
      </div>
    </>
  );
}
