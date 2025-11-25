'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //IMAGE 
  const placeholderImage = "https://picsum.photos/id/43/1600/1200";


  return (
    <section className="min-h-screen bg-background transition-colors duration-300">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 animate-slideIn">
          <p className="font-semibold">Message Sent!</p>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* SPLIT CANVAS VIEW */}
          <div className="relative hidden lg:block h-[500px]">
            <div className="flex gap-6 h-full">
              
              {/* LEFT FRAME — left crop of same image */}
              <div className="w-1/2 h-full bg-gray-800 dark:bg-gray-900 rounded-lg border-8 border-gray-700 dark:border-gray-800 overflow-hidden relative shadow-2xl">
                <img
                  src={placeholderImage}
                  alt="Canvas artwork"
                  className="absolute top-0 left-0 w-[200%] h-full object-cover"
                  style={{ objectPosition: '0% center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              </div>

              {/* RIGHT FRAME — right crop of same image */}
              <div className="w-1/2 h-full bg-gray-800 dark:bg-gray-900 rounded-lg border-8 border-gray-700 dark:border-gray-800 overflow-hidden relative shadow-2xl">
                <img
                  src={placeholderImage}
                  alt="Canvas artwork"
                  className="absolute top-0 right-0 w-[200%] h-full object-cover"
                  style={{ objectPosition: '100% center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              </div>

            </div>

            {/* Wall background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-950 dark:to-black -z-10 rounded-2xl"></div>
          </div>

          {/* CONTACT FORM */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Contact Us
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Phone</p>
                  <p className="text-foreground font-medium">+000 123 456 789</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Email</p>
                  <p className="text-foreground font-medium">info@example.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="NAME"
                className="w-full px-5 py-4 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="w-full px-5 py-4 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
                required
              />

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                rows="6"
                className="w-full px-5 py-4 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 resize-none"
                required
              ></textarea>

              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full focus:ring-2 focus:ring-orange-500 transform hover:scale-105 transition-all"
              >
                SEND MESSAGE
              </button>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mt-10 text-sm">
              <div>
                <p className="text-gray-500 uppercase tracking-wider mb-1">Instagram</p>
                <p className="text-foreground">@yourbrand</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-wider mb-1">Facebook</p>
                <p className="text-foreground">@yourbrand</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-wider mb-1">Pinterest</p>
                <p className="text-foreground">@yourbrand</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
