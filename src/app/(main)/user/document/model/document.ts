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

export type TDocument = z.infer<typeof documentSchema>;
