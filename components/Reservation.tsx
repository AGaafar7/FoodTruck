"use client";
import { useState } from "react";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 bg-brand-card p-8 md:p-12 rounded-2xl border-2 border-white/10">
        <div>
          <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
            05 — Reservations
          </p>
          <h3 className="font-heading uppercase text-[clamp(36px,5vw,72px)] leading-[0.98] mb-4">
            Grab your <span className="text-brand-orange">seat.</span>
          </h3>
          <p
            className="text-sm mb-8 leading-[1.7]"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            Lock in your table in seconds. Big group or private hire? Drop a note
            and we'll sort the whole crew.
          </p>

          {submitted ? (
            <div className="bg-brand-orange/10 border-2 border-brand-orange text-brand-orange p-6 rounded-lg text-sm font-ui">
              ✓ Locked in! Your table request is through — we'll confirm by email
              shortly.
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
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  required
                  className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-400"
                />
                <input
                  type="time"
                  required
                  className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange text-gray-400"
                />
              </div>
              <input
                type="number"
                min="1"
                placeholder="Number of guests"
                className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange"
              />
              <textarea
                placeholder="Special request: Booth seat, birthday, allergies..."
                rows={3}
                className="font-body bg-[#0d0c0e] border-2 border-white/10 p-3.5 rounded-lg text-sm focus:outline-none focus:border-brand-orange resize-vertical min-h-[84px]"
              />
              <button
                type="submit"
                className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase bg-brand-orange text-white py-4 rounded-md mt-2 hover:bg-[#e64514] hover:-translate-y-0.5 transition-all shadow-[0_12px_34px_-12px_rgba(255,78,28,0.7)]"
              >
                Confirm reservation
              </button>
            </form>
          )}
        </div>

        <div className="hidden md:block rounded-2xl overflow-hidden border-2 border-white/10">
          <img
            src="/images/reservation-img.jpg"
            alt="Dining"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}