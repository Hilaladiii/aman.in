import Link from "next/link";
import Button from "@/shared/container/Button/Button";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import CardDocument from "@/shared/container/Card/CardDocument";
import EmptyDocument from "./EmptyDocument/EmptyDocument";
import { Suspense } from "react";
import { IDocument } from "../model/documentInterfaces";
import { useGetDocuments } from "../usecase/useGetDocuments";
import CardDocumentSkeleton from "@/shared/container/Skeleton/CardDocumentSkeleton";

export default async function UserDocumentContainer() {
  const documents = await useGetDocuments();
  return (
    <div className="mx-10 mt-10">
      <Suspense
        fallback={
          <div className="mx-auto flex max-w-6xl flex-wrap justify-start gap-6">
            {[...new Array(4)].map((_, index) => (
              <CardDocumentSkeleton key={index} />
            ))}
          </div>
        }
      >
        {Array.isArray(documents.data) ? (
          <>
            <div className="mx-auto flex max-w-6xl flex-wrap justify-start gap-6">
              {documents.data.map((document: IDocument, index: number) => (
                <CardDocument
                  id={document.id}
                  status={document.status}
                  type={document.type}
                  totalAccessed={document.user_count.toString()}
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
      </Suspense>
    </div>
  );
}
