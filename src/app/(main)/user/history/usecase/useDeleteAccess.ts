import { useToken } from "@/shared/usecase/useToken";
import { deleteAccessRepository } from "../repository/historyRepository";
import toast from "react-hot-toast";

export function useDeleteAccess() {
  const token = useToken();
  const deleteAccess = async (data: {
    doc_id: string;
    accessor_id: string;
  }) => {
    console.log(data);
    console.log(token);
    const res = await deleteAccessRepository(token!, data);
    console.log("resposne delete");
    console.log(res);

    if (res.status == "success") {
      toast.success("Berhasil menghapus akses");
    } else {
      toast.error("Gagal menghapus akses");
    }
  };

  return { deleteAccess };
}
