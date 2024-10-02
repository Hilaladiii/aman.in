import Button from "@/shared/container/Button/Button";
import ProfileIcon from "@/assets/icons/profile-icon.svg";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import Link from "next/link";
import { useGetDocumentById } from "../usecase/useGetDocumentById";
import { IDocument } from "../../model/documentInterfaces";
import CardDetailDocument from "./Card/CardDetailDocument";

export default async function UserDocumentDetailContainer({
  id,
}: {
  id: string;
}) {
  const document: IDocument = await useGetDocumentById(id);
  return (
    <div className="mt-6">
      <div className="px-[5rem]">
        <div className="flex flex-row justify-between gap-6">
          <CardDetailDocument
            status={document.status}
            type={document.type}
            user_count={document.user_count}
          />
          <div className="flex w-3/5 flex-col">
            <div className="flex flex-row justify-between">
              <h2 className="text-24 font-semibold">Riwayat Akses</h2>
              <div className="inline-flex items-center justify-start gap-2">
                <ProfileIcon className="size-7" />
                <span className="text-20 font-medium text-neutral800">
                  {Array.isArray(document.emails) ? document.emails.length : 0}{" "}
                  Pihak
                </span>
              </div>
            </div>
            <div className="mt-4">
              {Array.isArray(document.emails) &&
                document.emails.map((email, index) => (
                  <h3 className="text-18 font-medium" key={index}>
                    {email}
                  </h3>
                ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Link href={`/user/add-access/${id}`}>
                <Button className="inline-flex w-full items-center justify-center gap-2.5 rounded-full text-center">
                  <PlusIcon /> Tambah Pihak Akses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
