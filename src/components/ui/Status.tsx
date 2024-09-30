import { cn } from "@/utils/cn";

export default function Status({
  status,
  className,
}: {
  status: 0 | 1 | -1;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-4 py-2",
        status == 0 && "bg-info100",
        status == 1 && "bg-success100",
        status == -1 && "bg-error100",
        className,
      )}
    >
      <div className="text-14 font-semibold text-baseblack">
        {status == 0
          ? "Proses verifikasi"
          : status == 1
            ? "Berhasil diverifikasi"
            : "Verifikasi ditolak"}
      </div>
      <div
        className={cn(
          "size-[18px] rounded-[4px]",
          status == 0 && "bg-info500",
          status == 1 && "bg-success500",
          status == -1 && "bg-error500",
        )}
      />
    </div>
  );
}
