import React from 'react';

export default function BuilderPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Header Spacer */}
      <div className="h-16 md:h-20 lg:h-24"></div>
      
      {/* Page Title */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Page Title
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
          Optional subtitle or description goes here
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-4 md:gap-6 pb-8">
        
        {/* Sidebar - Tools/Components Panel */}
        <div className="w-full">
          <div className="space-y-3 md:space-y-4">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="group h-12 sm:h-14 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-200 hover:shadow-md flex items-center px-4 cursor-pointer"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded flex-1 max-w-[120px] group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="w-full">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-600 rounded-2xl min-h-[400px] lg:min-h-[600px] xl:min-h-[700px] flex flex-col items-center justify-center text-center p-6 sm:p-8 transition-all duration-300">
            
            {/* Canvas Placeholder Content */}
            <div className="space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg"></div>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Canvas Area
              </h2>
              
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-md">
                Drag and drop components here or click to start building your design
              </p>
              
              {/* Optional Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <button className="px-4 py-2 sm:px-6 sm:py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base">
                  Get Started
                </button>
                <button className="px-4 py-2 sm:px-6 sm:py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>

            {/* Optional Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(currentColor 1px, transparent 1px),
                  linear-gradient(90deg, currentColor 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}