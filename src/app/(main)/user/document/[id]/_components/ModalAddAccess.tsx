"use client";

import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const addAccessSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Email tidak valid"),
});

type TAccess = z.infer<typeof addAccessSchema>;

export default function ModalAddAccess({
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
  } = useForm<TAccess>({
    resolver: zodResolver(addAccessSchema),
  });

  const onSubmit: SubmitHandler<TAccess> = (data) => {
    console.log(data);
  };
  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex w-[50rem] flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-30 font-semibold text-baseblack">
            Tambah Pihak Akses
          </h1>
          <p className="text-18 mt-0.5 text-neutral700">
            Isi email di bawah untuk menambahkan pihak akses
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="email"
            errors={errors.email}
            label="Alamat Email"
            placeholder="Masukkan alamat email..."
          />
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
              Tambah Dokumen
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
