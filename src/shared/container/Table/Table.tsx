import Link from "next/link";
import Button from "../Button/Button";

export default function Table() {
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
          {[...new Array(5)].map((_, index) => (
            <tr key={index}>
              <td>Andi Pratama</td>
              <td>Kartu Tanda Penduduk</td>
              <td>1234567890123456</td>
              <td>30 Agustus 2024</td>
              <td>
                <Button variant="danger">Hapus akses</Button>
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
