export default function ProductLoading() {
  return (
    <div className="bg-white md:min-w-[370px] rounded-2xl shadow-sm p-3 animate-pulse">
      <div className="h-40 w-full rounded-xl bg-gray-200" />

      <div className="mt-3 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>

      <div className="mt-3 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
      </div>

      <div className="mt-3 flex justify-between">
        <div className="h-4 w-12 bg-gray-200 rounded" />
        <div className="h-4 w-16 bg-gray-200 rounded" />
      </div>
    </div>
  );
}