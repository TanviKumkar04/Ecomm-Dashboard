export default function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow p-4">
      <div className="h-40 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-3"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}