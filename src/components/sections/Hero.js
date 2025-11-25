export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-800">
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-8 px-5 py-2 rounded-full bg-yellow-400 text-gray-900 text-sm font-bold tracking-wider">
          Precision Predictive Analytics
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight">
          Optimizing Health Outcomes,<br className="hidden sm:block" /> Unlocking Patient Success
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
          Leveraging proprietary data models and advanced algorithms to deliver precision treatment insights for comprehensive pain management.
        </p>

        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center px-10 py-5 text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition transform hover:scale-105 shadow-2xl"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}