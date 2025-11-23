export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-6 p-10 animate-pulse">
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} className="p-4 border rounded shadow">
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
