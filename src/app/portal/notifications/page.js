export default function NotificationsPage() {
  return (
    <div className="space-y-8">
     {/* Header Space */}
      <div className="h-16 md:h-20"></div>
      <h1 className="text-3xl sm:text-4xl font-bold">Notifications</h1>
      <div className="space-y-4 max-w-3xl">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 border flex gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}