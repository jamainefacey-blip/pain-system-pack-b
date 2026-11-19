import Link from "next/link";

const products = [
  {
    title: "Business website delivery",
    status: "Available for enquiries",
    description: "One-page, mobile-friendly websites built from genuine business details, with a written scope and quality review before handover.",
    available: true,
  },
  {
    title: "Pain Social and AI twins",
    status: "In development",
    description: "Creator personas, licensed AI twin generation, short-form media and publishing workflows. Real twin generation, account connections and subscriptions are not yet verified for sale.",
    available: false,
  },
  {
    title: "Mobile apps and business automation",
    status: "In development",
    description: "App production, internal business workflows and approved integrations are being prepared in the Factory. Commercial release and platform publishing are not yet operational.",
    available: false,
  },
];

export default function ServicesOffering() {
  return (
    <section aria-labelledby="company-services" className="bg-white px-5 py-16 text-slate-950 dark:bg-zinc-950 dark:text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-red-600 dark:text-red-400">What we can help with</p>
        <h2 id="company-services" className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Build the useful things first.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
          The Factory connects digital production with human accountability. Services are clearly distinguished from capabilities still being tested.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className={"flex flex-col rounded-2xl border p-7 " + (product.available ? "border-red-400 bg-red-50 dark:bg-zinc-900" : "border-slate-200 bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900")}>
              <p className={"text-xs font-bold uppercase tracking-widest " + (product.available ? "text-red-700 dark:text-red-300" : "text-slate-500 dark:text-zinc-400")}>{product.status}</p>
              <h3 className="mt-4 text-xl font-bold">{product.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600 dark:text-zinc-300">{product.description}</p>
              {product.available ? (
                <a className="mt-7 inline-block font-semibold text-red-700 underline underline-offset-4 dark:text-red-300" href="mailto:hello@thepainsystem.com?subject=Website%20project%20enquiry">Ask for a quote</a>
              ) : (
                <p className="mt-7 text-sm font-medium text-slate-500 dark:text-zinc-400">Not available to purchase yet</p>
              )}
            </article>
          ))}
        </div>
        <div className="mt-9">
          <Link href="/factory" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-400 px-6 py-3 font-semibold hover:border-red-500 hover:text-red-600 dark:border-zinc-600 dark:hover:text-red-300">
            Explore The Factory
          </Link>
        </div>
      </div>
    </section>
  );
}
