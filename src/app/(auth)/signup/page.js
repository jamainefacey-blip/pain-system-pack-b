'use client';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 md:p-8 transition-all duration-300 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)',
      }}
    >
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-6xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30 dark:border-gray-700/30">
        <div className="flex flex-col lg:flex-row min-h-[650px]">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-white/40 dark:border-gray-700/40">
              <div className="mb-8 text-center">
                <h1 className="text-5xl font-bold text-foreground mb-2">Join Us Today</h1>
                <p className="text-gray-600 dark:text-gray-400">Start your journey in seconds</p>
              </div>

              <div className="space-y-5">
                <input placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />
                <input placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />
                <input type="password" placeholder="Create Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />
                <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />

                <Link href="/portal/dashboard" className="block w-full text-center py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                  Register Now
                </Link>
              </div>

              <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
                Already have an account?{' '}
                <Link href="/login" className="text-orange-600 hover:text-orange-700 font-bold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Right: Floating Shapes */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center p-10">
            <div className="relative">
              <h2 className="text-6xl font-bold text-white drop-shadow-2xl text-center">Welcome Aboard!</h2>
              <div className="absolute -top-10 -left-20 w-32 h-32 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}