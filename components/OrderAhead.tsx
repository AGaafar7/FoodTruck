"use client";
import { useState } from "react";

export default function OrderAhead() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="catering" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 bg-brand-card p-8 md:p-12 rounded-2xl border-2 border-white/10">
        <div>
          <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
            05 — Catering & Events
          </p>
          <h3 className="font-heading uppercase text-[clamp(36px,5vw,72px)] leading-[0.98] mb-4">
            Book Kiks for <span className="text-brand-orange">your event.</span>
          </h3>
          <p
            className="text-sm mb-8 leading-[1.7]"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            Birthdays, weddings, corporate lunches, block parties — we roll up
            and cook fresh on-site. Tell us about your event and we'll get back
            with a custom quote.
          </p>

          {submitted ? (
            <div className="bg-brand-orange/10 border-2 border-brand-orange text-brand-orange p-6 rounded-lg text-sm font-ui">
              ✓ Got it! We'll reach out within 24 hours with a quote and
              availability.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  required
                  className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-400"
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Guest count"
                  className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>
              <select
                className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Event type
                </option>
                <option>Birthday party</option>
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Block party / Festival</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us about your event..."
                rows={3}
                className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange resize-vertical min-h-[84px]"
              />
              <button
                type="submit"
                className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase bg-brand-orange text-white py-4 rounded-md mt-2 hover:bg-[#e64514] hover:-translate-y-0.5 transition-all shadow-[0_12px_34px_-12px_rgba(255,78,28,0.7)]"
              >
                Request a Quote
              </button>
            </form>
          )}
        </div>

        <div className="hidden md:block rounded-2xl overflow-hidden border-2 border-white/10">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200"
            alt="Kiks Food Truck at an event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}