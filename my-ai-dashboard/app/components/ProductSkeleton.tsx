// This shows a "loading" placeholder while products are fetching
export default function ProductSkeleton() {
  return (
    <div className="border rounded-lg p-4 shadow-sm animate-pulse">
      <div className="bg-gray-300 h-48 rounded-lg mb-3"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-300 h-5 w-1/4 rounded mb-2"></div>
      <div className="bg-gray-300 h-10 w-full rounded"></div>
    </div>
  );
}