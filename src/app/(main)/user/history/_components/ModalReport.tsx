import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const reportSchema = z.object({
  alasan: z.string().min(1, "Alasan wajib diisi"),
});

type TReport = z.infer<typeof reportSchema>;

export default function ModalReport({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TReport>({
    resolver: zodResolver(reportSchema),
  });
  const onSubmit: SubmitHandler<TReport> = () => {};
  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex w-[50rem] flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-30 font-semibold text-baseblack">
            Laporkan Akses
          </h1>
          <p className="mt-0.5 text-18 text-neutral700">
            Lengkapi alasan di bawah untuk memperkuat laporan anda
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="alasan" className="text-18">
              Alasan
            </label>
            <textarea
              id="alasan"
              className="w-full rounded-xl border border-neutral200 p-4 outline-none placeholder:text-neutral200 focus:border-primary500 focus:outline-none"
              placeholder="Masukkan alasan pelaporan..."
              rows={6}
              {...register("alasan")}
            />
            {errors.alasan && (
              <span className="mt-1 text-16 text-red-500">
                {errors.alasan.message}
              </span>
            )}
          </div>
          <div className="mt-6 flex gap-8">
            <Button
              className="w-1/2"
              variant="ghost"
              onClick={() => {
                onClose();
                reset();
              }}
              type="button"
            >
              Batalkan
            </Button>
            <Button className="w-full" variant="tertiary" type="submit">
              Laporkan
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
