// src/components/common/Sidebar.js
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Home, FolderOpen, Bell, Hammer, Search, MapPin, Shield, X, LogOut 
} from "lucide-react";
import { useState, useEffect } from "react";

const portalLinks = [
  { href: "/portal/dashboard", label: "Dashboard", icon: Home },
  { href: "/portal/projects", label: "My Projects", icon: FolderOpen },
  { href: "/portal/notifications", label: "Notifications", icon: Bell },
  { href: "/portal/builder", label: "Builder", icon: Hammer },
];

const vstLinks = [
  { href: "/vst", label: "Home", icon: Home },
  { href: "/vst/search", label: "Search", icon: Search },
  { href: "/vst/results", label: "Results", icon: FolderOpen },
  { href: "/vst/map", label: "Map", icon: MapPin },
  { href: "/vst/safety", label: "Safety", icon: Shield },
];

export default function Sidebar({ type }) {
  const pathname = usePathname();
  const router = useRouter();
  const links = type === "portal" ? portalLinks : vstLinks;

  // Mobile menu state (shared across all Sidebar instances)
  const [isOpen, setIsOpen] = useState(false);

  // Close when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Escape key support
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e) => e.key === "Escape" && setIsOpen(false);
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const handleLogout = () => {
    setIsOpen(false);
    router.push("/");
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-background border-r border-gray-200 dark:border-gray-800
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-2xl font-bold text-orange-500">
              {type === "portal" ? "Pain Portal" : "VST"}
            </h1>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button + Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all font-medium"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
            <p className="text-xs text-gray-500 text-center">
              © 2025 The Pain System
            </p>
          </div>
        </div>
      </aside>

      {/* Floating Mobile Menu Button */}
      <MobileMenuButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
}

// Floating Action Button (FAB) for mobile
export function MobileMenuButton({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Open menu"
    >
      {isOpen ? (
        <X className="w-7 h-7" />
      ) : (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}