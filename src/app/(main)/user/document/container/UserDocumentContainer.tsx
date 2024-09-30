import Link from "next/link";
import CardDocument from "@/components/CardDocument";
import Button from "@/components/ui/Button";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import EmptyDocument from "./EmptyDocument/EmptyDocument";
import { IDocument } from "../model/documentInterfaces";
import { useGetDocuments } from "../usecase/useGetDocuments";

export default async function UserDocumentContainer() {
  const documents = await useGetDocuments();
  return (
    <div className="mx-10 mt-10">
      {Array.isArray(documents.data) ? (
        <>
          <div className="mx-auto flex flex-wrap justify-center gap-6">
            {documents.data.map((document: IDocument, index: number) => (
              <CardDocument
                status={document.status}
                type={document.type}
                totalAccessed="9"
                totalRequest="10"
                key={index}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Link href="/user/add-document">
              <Button className="mt-6 inline-flex items-center gap-2 rounded-full">
                <PlusIcon /> Tambah Dokumen
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <EmptyDocument />
      )}
    </div>
  );
}
