import { cn } from "@/utils/cn";

export default function Status({
  status,
  className,
}: {
  status: "VERIFIKASI" | "BERHASIL" | "DITOLAK";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-4 py-2",
        status == "VERIFIKASI" && "bg-info100",
        status == "BERHASIL" && "bg-success100",
        status == "DITOLAK" && "bg-error100",
        className,
      )}
    >
      <div className="text-14 font-semibold text-baseblack">
        {status == "VERIFIKASI"
          ? "Proses verifikasi"
          : status == "BERHASIL"
            ? "Berhasil diverifikasi"
            : "Verifikasi ditolak"}
      </div>
      <div
        className={cn(
          "size-[18px] rounded-[4px]",
          status == "VERIFIKASI" && "bg-info500",
          status == "BERHASIL" && "bg-success500",
          status == "DITOLAK" && "bg-error500",
        )}
      />
    </div>
  );
}
