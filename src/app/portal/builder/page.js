export default function BuilderPage() {
  return (
    <div className="space-y-8">
     {/* Header Space */}
      <div className="h-16 md:h-20"></div>
      <h1 className="text-3xl sm:text-4xl font-bold">Builder</h1>
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 dark:bg-gray-900 rounded-lg border"></div>
          ))}
        </div>
        <div className="lg:col-span-3">
          <div className="bg-gray-100 dark:bg-gray-900 border-2 border-dashed rounded-xl h-96 lg:h-screen flex items-center justify-center text-2xl">
            Canvas Area
          </div>
        </div>
      </div>
    </div>
  );
}