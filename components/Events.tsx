export default function Events() {
  return (
    <section id="events" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        06 — Events & Private Hire
      </p>
      <h2 className="font-heading uppercase text-[clamp(36px,6vw,82px)] leading-[0.98] mb-6">
        Throw a <br /> <span className="text-brand-orange">proper party.</span>
      </h2>
      <p
        className="text-sm max-w-2xl mb-12 leading-[1.7]"
        style={{ color: "rgba(247,243,234,0.74)" }}
      >
        Birthdays, team nights, or full venue takeovers — we bring the grill, the
        playlist and the energy. Custom burger bars and bottomless shakes on
        request.
      </p>

      <div className="grid grid-cols-3 gap-4 border-y-2 border-white/10 py-12">
        {[
          { value: "120", label: "Seated capacity" },
          { value: "3", label: "Private zones" },
          { value: "∞", label: "Custom menus" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-[clamp(36px,5vw,48px)] text-brand-orange leading-none">
              {stat.value}
            </div>
            <div className="font-ui text-brand-gray text-[12px] mt-2 uppercase tracking-[0.08em] font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}