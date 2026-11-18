import Link from 'next/link';
import { Mail, TrendingUp } from 'lucide-react';

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/website/services' },
  { label: 'Projects', href: '/website/projects' },
  { label: 'About', href: '/website/about' },
  { label: 'Accessibility and Inclusion', href: '/website/accessibility-&-inclusion' },
  { label: 'Contact', href: '/website/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-background text-foreground dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3 text-xl font-bold">
              <TrendingUp className="h-7 w-7 text-orange-600" aria-hidden="true" />
              The Pain System
            </Link>
            <p className="mt-4 max-w-sm text-gray-600 dark:text-gray-300">
              Websites, applications and practical business systems. Work is scoped and agreed before delivery.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="font-bold mb-3">Explore</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-700 underline-offset-4 hover:underline dark:text-gray-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-bold mb-3">Business enquiries</h2>
            <a href="mailto:admin@thepainsystem.com"
              className="inline-flex items-center gap-2 text-orange-600 underline-offset-4 hover:underline">
              <Mail className="h-4 w-4" aria-hidden="true" />
              admin@thepainsystem.com
            </a>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              The online customer intake and payment system is being verified. Do not submit payment details by email.
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
          © {new Date().getFullYear()} The Pain System Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
