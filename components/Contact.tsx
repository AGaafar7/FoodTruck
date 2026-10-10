export default function Contact() {
  return (
    <footer
      id="location"
      className="py-24 px-6 max-w-7xl mx-auto border-t-2 border-white/10"
    >
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        08 — Find Us
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Pull up & <span className="text-brand-orange">grab one.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.12em] uppercase mb-2">
              Address
            </div>
            <p className="font-heading uppercase text-[22px]">
              221 Garden Avenue, Downtown
            </p>
          </div>
          <div>
            <div className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.12em] uppercase mb-2">
              Hours
            </div>
            <p className="font-heading uppercase text-[22px]">
              Mon–Sun · 11AM – 12 Midnight
            </p>
          </div>
          <div>
            <div className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.12em] uppercase mb-2">
              Phone
            </div>
            <p className="font-heading uppercase text-[22px]">
              +1 (212) 555-0148
            </p>
          </div>
          <div>
            <div className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.12em] uppercase mb-2">
              Email
            </div>
            <p className="font-heading uppercase text-[18px]">
              hello@grabyourfood.com
            </p>
          </div>
        </div>

        <div className="flex items-end justify-start md:justify-end">
          <a
            href="#reserve"
            className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase bg-brand-orange text-white px-[30px] py-4 rounded-md hover:-translate-y-[3px] transition-transform shadow-[0_12px_34px_-12px_rgba(255,78,28,0.7)]"
          >
            Reserve a table
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-white/10 gap-4">
        <div className="font-heading uppercase text-[24px]">
          GRAB YOUR <span className="text-brand-orange">FOOD</span>
        </div>
        <p className="font-ui text-brand-gray text-[12px] uppercase tracking-[0.04em]">
          © 2026 Grab Your Food · All rights reserved
        </p>
      </div>
    </footer>
  );
}