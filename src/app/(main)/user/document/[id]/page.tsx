"use client";

import Status from "@/components/ui/Status";
import Button from "@/components/ui/Button";
import Image from "next/image";
import KtpImage from "@/assets/images/ktp.png";
import ArrowBackIcon from "@/assets/icons/arrow-back-icon.svg";
import ProfileIcon from "@/assets/icons/profile-icon.svg";
import RequestDocumentIcon from "@/assets/icons/request-document-icon.svg";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import { useState } from "react";
import ModalAddAccess from "./_components/ModalAddAccess";

export default function DetailDocumentPage({
  params,
}: {
  params: { id: string };
}) {
  const [show, setShow] = useState(false);
  console.log(params.id);
  return (
    <>
      <ModalAddAccess show={show} onClose={() => setShow(false)} />
      <div className="mt-6">
        <div className="px-[5rem]">
          <div className="flex flex-row justify-between gap-6">
            <div className="w-full">
              <div className="relative -z-10 h-96 w-full max-w-4xl">
                <ArrowBackIcon className="absolute left-3 top-3 z-10" />
                <Image
                  src={KtpImage}
                  alt="KTP"
                  className="absolute h-full w-full"
                />
                <Status
                  status="VERIFIKASI"
                  className="absolute bottom-2 right-2"
                />
              </div>
              <div className="flex flex-col items-start justify-start px-3 py-4">
                <h2 className="text-30 font-semibold text-baseblack">
                  Kartu Tanda Penduduk
                </h2>
                <div className="mt-3 inline-flex items-center justify-start gap-2">
                  <ProfileIcon className="size-7" />
                  <span className="text-20 font-medium text-neutral800">
                    0 Pihak
                  </span>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 pl-0.5">
                  <RequestDocumentIcon className="h-5 w-6" />
                  <span className="pl-0.5 text-20 font-medium text-neutral800">
                    0 Permohonan
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-3/5 flex-col">
              <div className="flex flex-row justify-between">
                <h2 className="text-24 font-semibold">Riwayat Akses</h2>
                <div className="inline-flex items-center justify-start gap-2">
                  <ProfileIcon className="size-7" />
                  <span className="text-20 font-medium text-neutral800">
                    0 Pihak
                  </span>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full text-center"
                  onClick={() => setShow(true)}
                >
                  <PlusIcon /> Tambah Pihak Akses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
