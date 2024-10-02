export default function CardDocumentSkeleton() {
  return (
    <div className="w-fit animate-pulse overflow-hidden rounded-lg bg-white shadow-card">
      <div className="relative h-[170px] w-[250px] bg-gray-300"></div>
      <div className="flex flex-col items-start justify-start px-3 py-4">
        <div className="h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="mt-3 inline-flex items-center justify-start gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-300"></div>
          <div className="h-4 w-1/3 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
