import { getDocumentByIdRepository } from "../repository/userDocumentRepository";
import { useTokenServer } from "@/shared/usecase/useTokenServer";

export async function useGetDocumentById(id: string) {
  const token = useTokenServer();
  const res = await getDocumentByIdRepository(id, token!);
  return res.data;
}
