import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        08 — Find Us
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Come get <span className="text-brand-orange">fed.</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-card border-2 border-white/10 rounded-2xl p-6 hover:border-brand-orange transition-colors group"
        >
          <MapPin className="text-brand-orange mb-4" size={24} />
          <div className="font-ui font-bold text-[11px] tracking-[0.18em] uppercase text-brand-gray mb-2">
            Location
          </div>
          <div className="font-heading text-lg leading-tight">
            19578 Sun Cir
            <br />
            Downtown
          </div>
        </a>

        <div className="bg-brand-card border-2 border-white/10 rounded-2xl p-6">
          <Clock className="text-brand-orange mb-4" size={24} />
          <div className="font-ui font-bold text-[11px] tracking-[0.18em] uppercase text-brand-gray mb-2">
            Hours
          </div>
          <div className="font-heading text-lg leading-tight">
            Mon – Sat
            <br />
            11am – 10pm
          </div>
        </div>

        <a
          href="tel:+10000000000"
          className="bg-brand-card border-2 border-white/10 rounded-2xl p-6 hover:border-brand-orange transition-colors"
        >
          <Phone className="text-brand-orange mb-4" size={24} />
          <div className="font-ui font-bold text-[11px] tracking-[0.18em] uppercase text-brand-gray mb-2">
            Call
          </div>
          <div className="font-heading text-lg leading-tight">
            (000) 000-0000
          </div>
        </a>

        <a
          href="mailto:hello@kiks.com"
          className="bg-brand-card border-2 border-white/10 rounded-2xl p-6 hover:border-brand-orange transition-colors"
        >
          <Mail className="text-brand-orange mb-4" size={24} />
          <div className="font-ui font-bold text-[11px] tracking-[0.18em] uppercase text-brand-gray mb-2">
            Email
          </div>
          <div className="font-heading text-lg leading-tight">
            hello@kiks.com
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-heading uppercase text-2xl tracking-tight">
          KIKS<span className="text-brand-orange">.</span>
        </div>
        <p className="font-ui text-[12px] tracking-[0.14em] uppercase text-brand-gray">
          © 2025 Kiks Food Truck · Made with 🔥 and grease
        </p>
      </div>
    </section>
  );
}