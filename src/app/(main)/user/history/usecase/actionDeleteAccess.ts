import { deleteAccessRepository } from "../repository/historyRepository";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";

export function actionDeleteAccess() {
  const token = getCookie("token")?.toString();
  const deleteAccess = async (data: {
    doc_id: string;
    accessor_id: string;
  }) => {
    const res = await deleteAccessRepository(token!, data);

    if (res.status == "success") {
      toast.success("Berhasil menghapus akses");
    } else {
      toast.error("Gagal menghapus akses");
    }
  };

  return { deleteAccess };
}
