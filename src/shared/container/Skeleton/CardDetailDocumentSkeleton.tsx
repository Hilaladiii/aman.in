export default function CardDetailDocumentSkeleton() {
  return (
    <div className="mt-6">
      <div className="px-[5rem]">
        <div className="flex flex-row justify-between gap-6">
          <div className="w-full animate-pulse">
            <div className="relative h-96 w-full max-w-4xl bg-gray-300"></div>
            <div className="flex flex-col items-start justify-start px-3 py-4">
              <div className="h-8 w-2/3 rounded bg-gray-300"></div>
              <div className="mt-3 inline-flex items-center justify-start gap-2">
                <div className="h-7 w-7 rounded-full bg-gray-300"></div>
                <div className="h-5 w-1/3 rounded bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="flex w-3/5 animate-pulse flex-col">
            <div className="flex flex-row justify-between">
              <div className="h-6 w-1/3 rounded bg-gray-300"></div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="h-7 w-7 rounded-full bg-gray-300"></div>
                <div className="h-5 w-1/4 rounded bg-gray-300"></div>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-2 h-5 w-full rounded bg-gray-300"></div>
              <div className="mb-2 h-5 w-5/6 rounded bg-gray-300"></div>
              <div className="h-5 w-4/6 rounded bg-gray-300"></div>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="inline-flex h-10 w-full items-center justify-center gap-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
