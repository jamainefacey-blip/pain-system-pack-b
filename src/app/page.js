import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Welcome to The Future of Pain Management
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Your new app is live, beautiful, and fully themed. Start building something amazing.
          </p>
        </div>
      </main>
    </>
  );
}