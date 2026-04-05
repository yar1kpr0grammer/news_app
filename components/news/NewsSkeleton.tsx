export function NewsSkeleton() {
  return (
    <div className="space-y-3 mt-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border p-4 animate-pulse rounded">
          <div className="h-4 bg-gray-300 w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 w-1/2" />
        </div>
      ))}
    </div>
  );
}
