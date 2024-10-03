import Status from "@/shared/container/Status/Status";
import Image from "next/image";
import ArrowBackIcon from "@/assets/icons/arrow-back-icon.svg";
import ProfileIcon from "@/assets/icons/profile-icon.svg";
import { useTypeDoc } from "@/shared/usecase/useTypeDoc";
import Link from "next/link";

export default function CardDetailDocument({
  status,
  type,
  user_count,
}: {
  status: -1 | 0 | 1;
  type: "SIM" | "KTP" | "AKTA";
  user_count: number;
}) {
  const typeDoc = useTypeDoc(type);

  return (
    <div className="w-full">
      <div className="relative h-96 w-full max-w-4xl">
        <Link href="/user/document" className="z-10">
          <ArrowBackIcon className="absolute left-3 top-3 z-10" />
        </Link>
        <Image
          src={typeDoc.image!}
          alt="KTP"
          className="absolute h-full w-full object-cover"
        />
        <Status status={status} className="absolute bottom-2 right-2" />
      </div>
      <div className="flex flex-col items-start justify-start px-3 py-4">
        <h2 className="text-30 font-semibold text-baseblack">{typeDoc.text}</h2>
        <div className="mt-3 inline-flex items-center justify-start gap-2">
          <ProfileIcon className="size-7" />
          <span className="text-20 font-medium text-neutral800">
            {user_count} Pihak
          </span>
        </div>
      </div>
    </div>
  );
}
