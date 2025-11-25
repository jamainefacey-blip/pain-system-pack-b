export default function DashboardPage() {
  return (
    <div className="space-y-8">
     {/* Header Space */}
      <div className="h-16 md:h-20"></div>
      <h1 className="text-3xl sm:text-4xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}