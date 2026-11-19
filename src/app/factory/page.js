import Link from "next/link";

export const metadata = {
  title: "The Factory | Business websites and digital production | The Pain System",
  description: "The Factory is the supervised digital production service of The Pain System Limited. Start with a mobile-friendly business website, a written scope, and a clear quality review.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://thepainsystem.com/factory" },
};

const planned = [
  { title: "Pain Social & AI twins", detail: "Creator personas, likeness-consent workflows, images and short-form video. Product in development; live AI-twin generation and publishing are not yet available to order." },
  { title: "Mobile applications", detail: "iPhone application development and App Store release services are being built. No published App Store build is claimed." },
  { title: "Business AI & automation", detail: "Founder-supervised business workflows, research and operations tools. External integrations are subject to testing and explicit approval." },
  { title: "Content & clipping", detail: "Permission-cleared short-form video editing and reusable digital content workflows are undergoing delivery verification." },
];

export default function FactoryPage() {
  return (
    <div className="bg-white text-slate-950 dark:bg-zinc-950 dark:text-white">
      <section aria-labelledby="factory-title" className="relative overflow-hidden bg-[#111116] text-white">
        <div className="absolute -right-28 -top-32 h-[25rem] w-[25rem] rounded-full border-[5rem] border-red-500/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
          <p className="mb-6 text-xs font-extrabold uppercase tracking-[.25em] text-red-300">The Factory · The Pain System Limited</p>
          <h1 id="factory-title" className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">Your digital business. <span className="text-red-400">Built with accountability.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300">A straightforward way to commission a quality-checked business website, with transparent scope, a written quote and human sign-off before delivery.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="inline-flex min-h-12 items-center justify-center rounded-xl bg-red-500 px-7 py-3 font-bold text-white outline-offset-4 transition hover:bg-red-600 focus-visible:outline focus-visible:outline-4 focus-visible:outline-white" href="mailto:hello@thepainsystem.com?subject=Factory%20website%20enquiry&body=Business%20name%3A%0AWhat%20I%20need%3A%0ATimeline%3A">Discuss a website project</a>
            <a href="#our-work" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-500 px-7 py-3 font-semibold text-white hover:border-white">See what we build</a>
          </div>
          <p className="mt-7 text-sm text-zinc-400">No automatic payment or contract. Send an enquiry to request a human-reviewed quote.</p>
        </div>
      </section>

      <section id="our-work" aria-labelledby="services-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-red-600 dark:text-red-400">Start with what works</p>
        <h2 id="services-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">A practical service. Not a collection of promises.</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border-2 border-red-500 bg-red-50 p-7 text-slate-950 dark:bg-zinc-900 dark:text-white">
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-700 dark:text-red-300">Open for enquiries</p>
            <h3 className="mt-3 text-2xl font-bold">Single-page business websites</h3>
            <p className="mt-3 leading-relaxed text-slate-700 dark:text-zinc-300">A mobile-friendly page built around your real business information, contact route and brand. We review the scope, prepare a quote, build the page, check it and request your approval.</p>
            <ul className="mt-5 list-inside list-disc space-y-2 text-sm text-slate-700 dark:text-zinc-300">
              <li>Clear proposal before work begins</li>
              <li>Human quality-control and revisions</li>
              <li>Deliverable HTML and defined handover</li>
            </ul>
            <a href="mailto:hello@thepainsystem.com?subject=Factory%20single-page%20website" className="mt-6 inline-block font-bold text-red-700 underline underline-offset-4 dark:text-red-300">Ask for a quote</a>
          </article>
          <div className="grid gap-4">
            {planned.map((offer) => <article key={offer.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-zinc-700 dark:bg-zinc-900">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">In development — not for sale yet</span>
              <h3 className="mt-2 text-lg font-bold">{offer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">{offer.detail}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="border-y border-slate-200 bg-slate-50 py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400">How we work</p>
          <h2 id="process-title" className="mt-3 text-3xl font-bold">A visible process from enquiry to delivery.</h2>
          <ol className="mt-9 grid gap-5 md:grid-cols-4">
            {[["01", "Tell us the problem", "Email the business name, goal and scope."], ["02", "Review and quote", "We confirm what can be delivered and price the work."], ["03", "Build and check", "The work is produced and reviewed against a quality checklist."], ["04", "Approve and receive", "You review the result and agree the handover."]].map(([number, title, details]) =>
              <li key={number} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-950">
                <span className="text-3xl font-extrabold text-red-600 dark:text-red-400">{number}</span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">{details}</p>
              </li>)}
          </ol>
        </div>
      </section>
      <section aria-labelledby="cta-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-3xl bg-[#111116] p-8 text-white sm:p-12">
          <h2 id="cta-title" className="max-w-3xl text-3xl font-bold sm:text-4xl">Have a business problem we could help with?</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">Tell us what you need. We won't claim a service is ready until we can prove it works, and we won't take payment without agreed terms.</p>
          <a className="mt-7 inline-flex min-h-12 items-center rounded-xl bg-red-500 px-7 py-3 font-bold text-white hover:bg-red-600" href="mailto:hello@thepainsystem.com?subject=Factory%20enquiry">Email The Factory</a>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm text-slate-500 dark:text-zinc-400">
          <p>Operated by The Pain System Limited. No testimonials or past customer results are invented.</p>
          <Link className="font-semibold underline underline-offset-4" href="/">Back to The Pain System</Link>
        </div>
      </section>
    </div>
  );
}
