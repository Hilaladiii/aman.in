import EmptyDocument from "./_components/EmptyDocument";

export default function UserDocumentPage() {
  return (
    <div className="mx-10 mt-10">
      <EmptyDocument />
      {/* <div className="mx-auto flex flex-wrap justify-center gap-6">
        {[...new Array(20)].map((_, index) => (
          <CardDocument key={index} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button className="mt-6 inline-flex items-center gap-2 rounded-full">
          <PlusIcon /> Tambah Dokumen
        </Button>
      </div> */}
    </div>
  );
}
