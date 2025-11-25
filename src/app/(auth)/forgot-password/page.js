'use client';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 md:p-8 transition-all duration-300 relative"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/calm-bg/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-900/40 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-4xl bg-white/50 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30 dark:border-gray-700/30">
        <div className="flex flex-col lg:flex-row min-h-[580px]">
        {/* Header Space */}
      <div className="h-16 md:h-20"></div>
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 flex items-center justify-center">
            <div className="w-full max-w-md text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Reset Password</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-10">Enter your email and we'll send you a reset link</p>

              <div className="space-y-6">
                <input 
                  placeholder="your@email.com" 
                  className="w-full px-5 py-4 text-lg rounded-xl border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-foreground placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all" 
                />

                <Link href="/portal/dashboard" className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
                  Send Reset Link
                </Link>

                <Link href="/login" className="inline-block mt-6 text-orange-600 dark:text-orange-400 hover:underline font-medium">
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Calming Wave */}
          <div className="w-full lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-400/30 to-cyan-400/30">
            <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"></path>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">We Got You</h2>
                <p className="text-xl opacity-90">Password recovery made simple</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}