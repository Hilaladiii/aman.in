import Table from "@/shared/container/Table/Table";
import { useGetHistory } from "../usecase/useGetHistory";

export default async function UserHistoryContainer() {
  const history = await useGetHistory();
  return <Table data={history.data} />;
}
