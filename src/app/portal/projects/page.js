export default function ProjectsPage() {
  return (
    <div className="space-y-8">
     {/* Header Space */}
      <div className="h-16 md:h-20"></div>
      <h1 className="text-3xl sm:text-4xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border p-4 hover:shadow-lg transition">
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
            <div className="mt-2 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}