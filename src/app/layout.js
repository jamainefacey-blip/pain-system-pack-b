import "./globals.css";
import Header from "@/components/common/Header";

export const metadata = {
  title: "The Pain System",
  description: "Precision pain management through predictive analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground font-sans min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}