"use client";
import ModalReport from "@/app/(main)/user/history/_components/ModalReport";
import Button from "./ui/Button";
import { useState } from "react";

export default function Table() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ModalReport show={show} onClose={() => setShow(false)} />
      <table className="w-full">
        <thead>
          <tr className="border-b border-b-neutral500 pb-4">
            <th>Nama Pengakses</th>
            <th>Jenis Dokumen</th>
            <th>Nomor Dokumen</th>
            <th>Tanggal Akses</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {[...new Array(5)].map((_, index) => (
            <tr key={index}>
              <td>Andi Pratama</td>
              <td>Kartu Tanda Penduduk</td>
              <td>1234567890123456</td>
              <td>30 Agustus 2024</td>
              <td>
                <Button className="rounded-lg bg-tertiary500 px-2 py-1.5 text-base">
                  Hapus akses
                </Button>
                <Button
                  className="rounded-lg bg-secondary500 px-2 py-1.5 text-base"
                  onClick={() => setShow(true)}
                >
                  Laporkan
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
