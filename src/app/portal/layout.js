// src/app/portal/layout.js
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";  // Same header, but now inside portal
import Footer from "@/components/common/Footer";

export default function PortalLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />  {/* Header is now inside portal, above sidebar area */}

      <div className="flex flex-1">
        <Sidebar type="portal" />

        {/* Main content area */}
        <div className="flex-1 lg:ml-64">
          <main className="p-4 sm:p-6 lg:p-10 min-h-screen">
            {children}
          </main>
        </div>
      </div>

      <Footer />  {/* Footer at the very bottom */}
    </div>
  );
}