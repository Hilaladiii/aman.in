import { z } from "zod";

export enum OPTION {
  SIM = "SIM",
  KTP = "KTP",
  AKTA = "AKTA",
  LAINNYA = "LAINNYA",
}

export const documentSchema = z.object({
  option: z.nativeEnum(OPTION, {
    message: "Opsi dokumen wajib diisi",
  }),
  documentName: z.string().min(1, "Nama dokumen wajib diisi").optional(),
  documentNumber: z.string().min(1, "Nomor dokumen wajib diisi"),
  file: z
    .instanceof(File, { message: "File dokumen wajib diisi" })
    .refine((file) => file.size <= 3 * 1024 * 1024, "Maksimal ukuran file 3MB")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/png",
          "image/jpeg",
        ].includes(file.type),
      "File harus bertipe pdf, docx, png, atau jpg/jpeg",
    ),
});

export type TDocument = z.infer<typeof documentSchema>;
