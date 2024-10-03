import toast from "react-hot-toast";
import { OPTION, TDocument } from "../model/documentValidator";
import { uploadDocumentRepository } from "../repository/userDocumentRepository";
import { getCookie } from "cookies-next";

export function useUploadDocument() {
  const uploadDocument = async (data: TDocument) => {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("number", data.documentNumber);
    if (data.option == OPTION.LAINNYA) {
      formData.append("type", data.documentName!);
    } else {
      formData.append("type", data.option);
    }

    const token = getCookie("token");

    const res = await uploadDocumentRepository(formData, token!.toString());
    if (res.status == "success") {
      toast.success("Berhasil menambahkan dokumen");
      window.location.href = "/user/document";
    } else {
      toast.error("Gagal menambahkan dokumen");
    }
  };
  return { uploadDocument };
}
