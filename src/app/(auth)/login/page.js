// src/app/(auth)/login/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { role } = await res.json();
      if (role === 'admin') {
        router.push('/admin/projects');
      } else {
        router.push('/portal/dashboard');
      }
    } else {
      alert('Invalid credentials');
      setLoading(false);
    }
  };

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
          <div className="h-16 md:h-20"></div>

          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-10 border border-white/30 dark:border-gray-700/30">
              <div className="mb-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Your logo</p>
                <h1 className="text-4xl font-bold text-foreground">Login</h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input 
                  type="email"
                  placeholder="example@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
                />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
                />

                <button 
                  type="submit"
                  disabled={loading}
                  className="block w-full text-center py-3 px-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </form>

              {/* Rest of your beautiful UI (social buttons, etc.) */}
              {/* Keep everything else exactly as you have it */}
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/seed/login-hero/800/1000)'}}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}