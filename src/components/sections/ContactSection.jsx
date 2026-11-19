import Link from "next/link";

// A mailto handoff is truthful without a connected mail provider.
// Do not replace it with an apparent success toast until a real server receipt exists.
export default function ContactSection() {
  const address = "hello@thepainsystem.com";
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white px-5 py-16 text-slate-950 dark:bg-zinc-950 dark:text-white sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-9 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-700 dark:bg-zinc-900 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-red-600 dark:text-red-400">Talk to The Pain System</p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Tell us what your business needs.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-600 dark:text-zinc-300">
            Describe the problem, your business and the outcome you want. We will review the enquiry before discussing scope or costs.
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-zinc-400">No automated purchase, contract or payment is created here.</p>
          <Link href="/factory" className="mt-6 inline-block font-semibold text-red-700 underline underline-offset-4 dark:text-red-300">Explore The Factory</Link>
        </div>
        <div className="self-center rounded-2xl border border-slate-200 bg-white p-7 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-xl font-bold">Email our team</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
            Open a pre-addressed email draft. You must send it yourself using your email app. This site does not record or send enquiries automatically.
          </p>
          <a href="mailto:hello@thepainsystem.com?subject=Pain%20System%20business%20enquiry&body=Business%20name%3A%0AWhat%20I%20need%3A%0ATimeline%3A" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-semibold text-white outline-offset-4 hover:bg-red-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-red-600">
            Open email draft
          </a>
          <p className="mt-5 break-all text-sm text-slate-600 dark:text-zinc-300">Address listed on our website: <a className="font-semibold underline underline-offset-4" href={"mailto:" + address}>{address}</a></p>
          <p className="mt-2 text-xs text-slate-500 dark:text-zinc-400">Email delivery and response time are not guaranteed until separately verified.</p>
        </div>
      </div>
    </section>
  );
}
