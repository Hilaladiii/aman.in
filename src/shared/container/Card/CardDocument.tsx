import Image from "next/image";
import ProfileIcon from "@/assets/icons/profile-icon.svg";
import Status from "@/shared/container/Status/Status";
import Link from "next/link";
import { useTypeDoc } from "@/shared/usecase/useTypeDoc";

interface CardDocumentProps {
  id: string;
  type: "KTP" | "SIM" | "AKTA" | "LAINNYA";
  totalAccessed: string;
  status: -1 | 0 | 1;
}

export default function CardDocument({
  id,
  status,
  totalAccessed,
  type,
}: CardDocumentProps) {
  const typeDoc = useTypeDoc(type);
  return (
    <div className="w-fit overflow-hidden rounded-lg bg-white shadow-card">
      <Link href={`/user/document/${id}`} className="relative">
        <Image
          src={typeDoc.image!}
          alt={typeDoc.text}
          width={236}
          height={100}
        />
        <Status status={status} className="absolute bottom-2 left-2" />
      </Link>
      <div className="flex flex-col items-start justify-start px-3 py-4">
        <h2 className="text-20 font-semibold text-baseblack">{typeDoc.text}</h2>
        <div className="mt-3 inline-flex items-center justify-start gap-2">
          <ProfileIcon className="size-6" />
          <span className="text-16 font-medium text-neutral800">
            {totalAccessed} Pihak
          </span>
        </div>
      </div>
    </div>
  );
}
