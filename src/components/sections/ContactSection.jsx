'use client';

import { useState } from 'react';

const COMPANY_EMAIL = 'admin@thepainsystem.com';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notice, setNotice] = useState('');

  const openEmail = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent('Pain System business enquiry');
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nReply email: ${email.trim()}\n\nEnquiry:\n${message.trim()}\n`,
    );

    // The company website has not yet been connected to the Factory's intake
    // API. Do NOT pretend to store or submit an enquiry. The customer's own
    // email app is responsible for sending; preserve the form contents.
    setNotice('Your email application should open with a draft. Please press Send there. Nothing has been submitted by this website.');
    window.location.assign(`mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-background text-foreground py-16 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-300 dark:border-gray-700 p-6 sm:p-10">
        <p className="text-xs uppercase tracking-widest text-orange-600 font-semibold">Get in touch</p>
        <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold mt-3 mb-4">Talk to The Pain System</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-5">
          Tell us about your website, app or business workflow. We will discuss the scope and confirm the next steps before any work or payment.
        </p>
        <p className="mb-8 text-sm">
          Email us directly at{' '}
          <a className="text-orange-600 underline" href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>.
          The online intake system is not yet active; this form prepares an email in your own email application.
        </p>
        <form onSubmit={openEmail} className="space-y-5">
          <label className="block">
            <span className="block mb-2 font-medium">Your name</span>
            <input required autoComplete="name" name="name" value={formData.name}
              maxLength={100} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-400 dark:border-gray-600 bg-background p-3"
              placeholder="Your full name" />
          </label>
          <label className="block">
            <span className="block mb-2 font-medium">Your email address</span>
            <input required autoComplete="email" type="email" name="email" value={formData.email}
              maxLength={254} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-gray-400 dark:border-gray-600 bg-background p-3"
              placeholder="you@example.com" />
          </label>
          <label className="block">
            <span className="block mb-2 font-medium">What do you need?</span>
            <textarea required name="message" value={formData.message}
              minLength={10} maxLength={2000} rows={6} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg border border-gray-400 dark:border-gray-600 bg-background p-3"
              placeholder="Describe the website, app or process you want help with" />
          </label>
          <button type="submit"
            className="rounded-full bg-orange-600 px-7 py-3 font-semibold text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            Open email to send enquiry
          </button>
          {notice && <p role="status" className="text-sm text-gray-700 dark:text-gray-200">{notice}</p>}
        </form>
      </div>
    </section>
  );
}
