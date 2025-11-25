'use client';
import React, { useState } from 'react';
// Using Lucide icons for responsive navigation and other elements
import { Menu, X, ArrowRight, TrendingUp } from 'lucide-react';

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items based on user request
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="relative bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-foreground">
              <TrendingUp className="w-6 h-6 text-orange-600" />
              <span className="font-sans">The Pain System</span>
            </a>
          </div>

          {/* Desktop Nav Links & Portal Button */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-orange-600 font-medium transition duration-150 ease-in-out font-sans text-lg"
              >
                {item.name}
              </a>
            ))}
            
            {/* Portal Button */}
            <a
              href="#"
              className="ml-6 inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Portal <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:bg-orange-50 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium font-sans"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 text-white bg-orange-500 hover:bg-orange-600 block w-full text-center px-3 py-2 rounded-full text-base font-medium font-sans"
            >
              Portal
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Section (Simulating the scenic image visual weight) */}
      {/* Note: In a real app, this would be a large background image set via CSS or an <img> tag. */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-teal-800 opacity-90"></div>
      
      {/* Visual Element Placeholder (Simulating the floating island/tree) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900/90 to-transparent"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        {/* AI Insights Tag */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-yellow-400 text-gray-800 text-sm font-semibold tracking-wide shadow-md">
          Precision Predictive Analytics
        </div>

        {/* Main Headline (Template Text) */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white mb-6 leading-tight font-sans">
          Optimizing Health Outcomes, <br className="hidden sm:inline" /> Unlocking Patient Success
        </h1>

        {/* Subtext (Template Text) */}
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 font-sans max-w-3xl mx-auto">
          Leveraging proprietary data models and advanced algorithms to deliver precision treatment insights for comprehensive pain management.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-orange-500 hover:bg-orange-600 shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-orange-400/50 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 font-sans"
        >
          Start Your Journey
        </a>
      </div>
    </div>
  );
};


// --- Main Application Component ---
const App = () => {
  // We apply the custom font to the entire layout
  // Note: To use the CSS variables (foreground/background), you would typically define them in a global CSS file or a wrapper component.
  // For this template, we assume the host environment respects the 'font-sans' (Inter) setting.
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        
        {/* Placeholder Content for structure */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-4">Template Section Below Hero</h2>
            <p className="text-gray-500">
                This area is typically used for feature summaries, testimonials, or product modules.
            </p>
        </div>
      </main>
    </div>
  );
};

export default App;