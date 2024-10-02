import UserDocumentDetailContainer from "./container/UserDocumentDetailContainer";

export default function DetailDocumentPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <UserDocumentDetailContainer id={params.id} />
    </>
  );
}
