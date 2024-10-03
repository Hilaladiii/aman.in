import { useTokenServer } from "@/shared/usecase/useTokenServer";
import { getHistoryRepository } from "../repository/historyRepository";

export async function useGetHistory() {
  const token = useTokenServer();
  const history = await getHistoryRepository(token!);
  return history;
}
