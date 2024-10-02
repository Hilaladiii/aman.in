import CardDocumentSkeleton from "@/shared/container/Skeleton/CardDocumentSkeleton";

export default function Loading() {
  return (
    <div className="mx-10 mt-10">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-start gap-6">
        {[...new Array(4)].map((_, index) => (
          <CardDocumentSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
