import Image from "next/image";
import KTPImage from "@/assets/images/ktp.png";
import ProfileIcon from "@/assets/icons/profile-icon.svg";
import RequestDocumentIcon from "@/assets/icons/request-document-icon.svg";
import Status from "./ui/Status";

interface CardDocumentProps {
  type: "KTP" | "SIM" | "AKTA" | "LAINNYA";
  totalAccessed: string;
  totalRequest: string;
  status: -1 | 0 | 1;
}

export default function CardDocument({
  status,
  totalAccessed,
  totalRequest,
  type,
}: CardDocumentProps) {
  return (
    <div className="w-fit overflow-hidden rounded-lg bg-white shadow-card">
      <div className="relative">
        <Image src={KTPImage} alt="ktp" />
        <Status status={status} className="absolute bottom-2 left-2" />
      </div>
      <div className="flex flex-col items-start justify-start px-3 py-4">
        <h2 className="text-20 font-semibold text-baseblack">
          Kartu Tanda Penduduk
        </h2>
        <div className="mt-3 inline-flex items-center justify-start gap-2">
          <ProfileIcon className="size-6" />
          <span className="text-16 font-medium text-neutral800">0 Pihak</span>
        </div>
        <div className="mt-2 inline-flex items-center gap-2 pl-0.5">
          <RequestDocumentIcon className="h-4 w-5" />
          <span className="pl-0.5 text-16 font-medium text-neutral800">
            0 Permohonan
          </span>
        </div>
      </div>
    </div>
  );
}
