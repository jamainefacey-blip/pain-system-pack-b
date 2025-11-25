export default function SearchPage() {
  return (
    <div className="space-y-8">
     {/* Header Space */}
      <div className="h-16 md:h-20"></div>
      <h1 className="text-3xl sm:text-4xl font-bold">Search</h1>
      <div className="max-w-2xl">
        <div className="h-14 bg-gray-100 dark:bg-gray-900 rounded-xl border"></div>
      </div>
      <div className="grid gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border">
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="mt-3 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}