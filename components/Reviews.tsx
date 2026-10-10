export default function Reviews() {
  const reviews = [
    {
      text: "The Inferno actually lived up to the name. Best burger in the city, hands down — and the fries are dangerous.",
      name: "Amelia R.",
      role: "Foodie · 5.0",
      initial: "A",
    },
    {
      text: "Booked the back zone for my birthday. Custom burger bar + bottomless shakes = chaos in the best way. 10/10.",
      name: "Daniel K.",
      role: "Private Hire · 5.0",
      initial: "D",
    },
    {
      text: "Flame-grilled, juicy, stacked properly. You can taste that it's handmade. We're here every week now.",
      name: "Marcus L.",
      role: "Regular · 4.9",
      initial: "M",
    },
  ];

  return (
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        07 — The Verdict
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        People are <span className="text-brand-orange">obsessed.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-brand-card border-2 border-white/10 rounded-[14px] p-7 hover:border-brand-orange transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="text-brand-yellow tracking-[3px] text-lg mb-4">
                ★★★★★
              </div>
              <p className="text-[17px] leading-[1.55] mb-8">"{r.text}"</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-orange flex items-center justify-center font-heading text-xl text-white">
                {r.initial}
              </div>
              <div>
                <div className="font-ui font-bold text-sm">{r.name}</div>
                <div className="text-brand-gray text-xs">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}