export default function ResultsPage() {
  return (
    <div className="space-y-8">
     {/* Header Space */}
      <div className="h-16 md:h-20"></div>
      <h1 className="text-3xl sm:text-4xl font-bold">Results</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border overflow-hidden">
            <div className="bg-gray-200 dark:bg-gray-700 h-48"></div>
            <div className="p-4 space-y-3">
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-11/12"></div>
              <div className="h-10 bg-orange-500 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}