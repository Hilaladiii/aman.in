"use client";

import Modal from "@/shared/container/Modal/Modal";
import Button from "@/shared/container/Button/Button";
import Input from "@/shared/container/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useAddAccessDocument } from "../../../document/[id]/usecase/useAddAccessDocument";

const addAccessSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Email tidak valid"),
});

type TAccess = z.infer<typeof addAccessSchema>;

export default function AddAccess({ params }: { params: { id: string } }) {
  const { addAccessDocument } = useAddAccessDocument();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAccess>({
    resolver: zodResolver(addAccessSchema),
  });

  const onSubmit: SubmitHandler<TAccess> = async (data) => {
    await addAccessDocument(params.id, data);
  };
  return (
    <Modal>
      <div className="flex w-[50rem] flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-30 font-semibold text-baseblack">
            Tambah Pihak Akses
          </h1>
          <p className="mt-0.5 text-18 text-neutral700">
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
                router.back();
                reset();
              }}
              type="button"
            >
              Batalkan
            </Button>
            <Button
              className="w-full"
              variant="tertiary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Tambah Dokumen"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
