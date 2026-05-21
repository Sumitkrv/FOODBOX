export default function ProductSkeleton() {
  return (
    <div className="card-base animate-pulse overflow-hidden">
      <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="flex justify-between">
          <div className="h-6 w-16 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-9 w-24 rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
