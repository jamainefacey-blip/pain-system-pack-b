import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
      <div className="mx-auto grid max-w-6xl gap-9 px-5 py-12 sm:px-8 md:grid-cols-3">
        <section aria-labelledby="footer-company">
          <h2 id="footer-company" className="text-lg font-bold">The Pain System Limited</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
            An accessibility-first business and digital production company. Our Factory provides a supervised website-enquiry and delivery process, while further services are under development.
          </p>
        </section>
        <nav aria-label="Company footer navigation">
          <h2 className="font-bold">Explore</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li><Link className="underline underline-offset-4" href="/">Home</Link></li>
            <li><Link className="underline underline-offset-4" href="/factory">The Factory</Link></li>
            <li><Link className="underline underline-offset-4" href="/website/services">Services</Link></li>
            <li><Link className="underline underline-offset-4" href="/website/contact">Contact</Link></li>
          </ul>
        </nav>
        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="font-bold">Business enquiries</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-zinc-300">Contact us directly. Website forms do not silently record or send messages.</p>
          <a className="mt-3 inline-block break-all font-semibold text-red-700 underline underline-offset-4 dark:text-red-300" href="mailto:hello@thepainsystem.com">hello@thepainsystem.com</a>
        </section>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-xs text-slate-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} The Pain System Limited. No customer results or testimonials are implied.
      </div>
    </footer>
  );
}
