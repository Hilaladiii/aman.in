import Button from "@/components/ui/Button";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import Link from "next/link";

export default function EmptyDocument() {
  return (
    <>
      <div className="flex h-[39vh] w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="text-36 font-semibold text-baseblack">Yahh...</p>
          <h2 className="mt-1 text-18 font-medium text-neutral700">
            Kamu belum memiliki dokumen, tambahkan dokumenmu melalui tombol di
            bawah
          </h2>
          <Link href="/user/add-document">
            <Button className="mt-6 inline-flex items-center gap-2 rounded-full">
              <PlusIcon /> Tambah Dokumen
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
