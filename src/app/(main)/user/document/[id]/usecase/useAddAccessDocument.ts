import { getCookie } from "cookies-next";
import { addDocumentAccessRespository } from "../repository/userDocumentRepository";
import toast from "react-hot-toast";

export function useAddAccessDocument() {
  const addAccessDocument = async (id: string, data: { email: string }) => {
    const formData = new FormData();
    formData.append("email", data.email);
    const token = getCookie("token");
    const res = await addDocumentAccessRespository(
      id,
      token!.toString(),
      formData,
    );

    if (res.status == "success") {
      window.location.href = `/user/document/${id}`;
      toast.success(res.message);
    }
  };
  return {
    addAccessDocument,
  };
}
