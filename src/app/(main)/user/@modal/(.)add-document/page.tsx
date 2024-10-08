"use client";

import Modal from "@/shared/container/Modal/Modal";
import Input from "@/shared/container/Input/Input";
import Button from "@/shared/container/Button/Button";
import UploadIcon from "@/assets/icons/upload-icon.svg";
import { OPTIONDOCUMENTS } from "@/constants/document";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUploadDocument } from "../../document/usecase/useUploadDocument";
import {
  documentSchema,
  OPTION,
  TDocument,
} from "../../document/model/documentValidator";
import { useRouter } from "next/navigation";

export default function AddDocument() {
  const router = useRouter();
  const { uploadDocument } = useUploadDocument();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
  const isOther = watch("option");
  const fileName = watchFile instanceof File ? watchFile.name : undefined;

  const onSubmit: SubmitHandler<TDocument> = async (data) => {
    await uploadDocument(data);
    reset();
  };
  return (
    <Modal>
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
          {isOther === OPTION.LAINNYA && (
            <Input
              label="Nama Dokumen"
              register={register}
              name="documentName"
              type="text"
              placeholder="Masukkan nama dokumen..."
              errors={errors.documentName}
            />
          )}
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
                reset();
                router.back();
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
              {isSubmitting ? "Uploading..." : "Tambah Dokumen"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
