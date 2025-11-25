import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="p-6 bg-background text-foreground flex justify-between items-aligned">
          <h1>My App</h1>
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}