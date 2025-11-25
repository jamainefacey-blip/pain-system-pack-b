'use client';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 md:p-8 transition-all duration-300 relative"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/bg-pattern/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#fcd5c5]/80 dark:bg-gray-900/80 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-6xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Header Space */}
      <div className="h-16 md:h-20"></div>
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-10 border border-white/30 dark:border-gray-700/30">
              <div className="mb-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Your logo</p>
                <h1 className="text-4xl font-bold text-foreground">Login</h1>
              </div>

              <div className="space-y-5">
                <input placeholder="example@email.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />

                <div className="text-right">
                  <Link href="/forgot-password" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition">
                    Forgot Password?
                  </Link>
                </div>

                <Link href="/portal/dashboard" className="block w-full text-center py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Sign in
                </Link>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300 dark:border-gray-600"></div></div>
                  <div className="relative flex justify-center text-sm"><span className="px-4 bg-white/70 dark:bg-gray-800/70 text-gray-500">Or Continue With</span></div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Google, GitHub, LinkedIn icons same as your original */}
                  <button className="flex justify-center py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition"><svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg></button>
                  <button className="flex justify-center py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></button>
                  <button className="flex justify-center py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition"><svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></button>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account yet?{' '}
                <Link href="/signup" className="text-orange-500 hover:text-orange-600 font-semibold">
                  Register Now
                </Link>
              </p>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/seed/login-hero/800/1000)'}}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
            <div className="absolute top-20 right-20 w-8 h-2 bg-yellow-300/60 rounded-full rotate-45 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-6 h-2 bg-green-300/60 rounded-full rotate-12"></div>
            <div className="absolute bottom-32 left-20 w-10 h-2 bg-yellow-300/60 rounded-full -rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}