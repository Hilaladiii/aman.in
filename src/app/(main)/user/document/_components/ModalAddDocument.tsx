"use client";

import Modal from "@/components/Modal";
import Input from "@/components/ui/Input";
import { OPTIONDOCUMENTS, OPTION } from "@/constants/document";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import UploadIcon from "@/assets/icons/upload-icon.svg";

const documentSchema = z.object({
  option: z.nativeEnum(OPTION, {
    message: "Opsi dokumen wajib diisi",
  }),
  documentNumber: z.string().min(1, "Nomor dokumen wajib diisi"),
  file: z
    .instanceof(File, { message: "File dokumen wajib diisi" })
    .refine((file) => file.size <= 3 * 1024 * 1024, "Maksimal ukuran file 3MB")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "File harus bertipe pdf atau docx",
    ),
});

type TDocument = z.infer<typeof documentSchema>;

export default function ModalAddComponent({
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
    watch,
    setValue,
  } = useForm<TDocument>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const watchFile = watch("file");
  const fileName = watchFile instanceof File ? watchFile.name : undefined;

  const onSubmit: SubmitHandler<TDocument> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-30 font-semibold text-baseblack">
            Tambah Dokumen
          </h1>
          <p className="text-18 text-neutral700">
            Lengkapi isian di bawah untuk menambahkan dokumen anda
          </p>
        </div>
        <form className="mb-4 mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <h2>Jenis Dokumen</h2>
          <div className="flex flex-col">
            <div className="mt-2 flex flex-row gap-9">
              {OPTIONDOCUMENTS.map((option, index) => (
                <div className="inline-flex items-center gap-2" key={index}>
                  <input
                    type="radio"
                    id={option.id}
                    {...register("option")}
                    value={option.id}
                  />
                  <label htmlFor={option.id} className="cursor-pointer">
                    {option.name}
                  </label>
                </div>
              ))}
            </div>
            {errors.option && (
              <span className="mt-1 text-16 text-red-500">
                {errors.option.message}
              </span>
            )}
          </div>
          <Input
            label="Nomor Dokumen"
            register={register}
            name="documentNumber"
            type="text"
            placeholder="Masukkan nomor dokumen..."
            errors={errors.documentNumber}
          />
          <div>
            <div>
              <label htmlFor="file" className="text-18">
                Unggah Dokumen
              </label>
              <div className="text-16 text-neutral700">
                Masukkan bukti online/screenshot dokumen
              </div>
            </div>
            <label
              htmlFor="file"
              className="mt-2 flex h-[200px] cursor-pointer items-center justify-center rounded-xl border border-dashed border-primary500 bg-primary50"
            >
              <div className="flex flex-col items-center gap-5">
                <UploadIcon />
                <div className="text-neutral500">
                  {fileName ? (
                    fileName
                  ) : (
                    <>
                      Arahkan file ke dalam area, atau{" "}
                      <span className="text-primary500 underline">
                        Cari Dokumen
                      </span>
                    </>
                  )}
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                id="file"
                {...register("file", {
                  onChange: (e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      const file = files[0];
                      setValue("file", file);
                    }
                  },
                })}
              />
            </label>
            {errors.file && (
              <span className="mt-1 text-16 text-red-500">
                {errors.file.message}
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
              Tambah Dokumen
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
