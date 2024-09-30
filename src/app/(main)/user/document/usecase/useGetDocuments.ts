import { useTokenServer } from "@/shared/usecase/useTokenServer";
import { getDocumentsRepository } from "../repository/userDocumentRepository";

export async function useGetDocuments() {
  const token = useTokenServer();
  const res = await getDocumentsRepository(token!.toString());
  return res;
}
