"use client";

import Link from "next/link";
import Button from "../Button/Button";
import { dateTimeFormatter } from "@/shared/usecase/dateTimeFormatter";
import { useDeleteAccess } from "@/app/(main)/user/history/usecase/useDeleteAccess";

interface ITableProps {
  doc_id: string;
  accessor_name: string;
  type: string;
  number: string;
  access_time: string;
  acessor_id: string;
}

export default function Table({ data }: { data: ITableProps[] | null }) {
  if (data == null) {
    return <div>Tidak ada history akses</div>;
  }
  const { deleteAccess } = useDeleteAccess();
  const onDelete = async (doc_id: string, accessor_id: string) => {
    await deleteAccess({ doc_id, accessor_id });
  };
  return (
    <>
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
          {data.map((document, index) => (
            <tr key={index}>
              <td>{document.accessor_name}</td>
              <td>{document.type}</td>
              <td>{document.number}</td>
              <td>{dateTimeFormatter(document.access_time)}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => onDelete(document.doc_id, document.acessor_id)}
                >
                  Hapus akses
                </Button>
                <Link href={"/user/report"}>
                  <Button variant="warning">Laporkan</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
