// src/app/vst/layout.js
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function VSTLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar type="vst" />

        <div className="flex-1 lg:ml-64">
          <main className="p-4 sm:p-6 lg:p-10 min-h-screen">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}