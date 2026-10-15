const REVIEWS = [
  {
    name: "Sarah M.",
    text: "The Chicken Alfredo is unreal. I drive 20 minutes every Friday just for it. Creamy, hot, and always fresh.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    text: "Best Philly cheesesteak in the city, hands down. The bread, the meat, the cheese — everything hits.",
    rating: 5,
  },
  {
    name: "Jasmine K.",
    text: "Ordered catering for our office. Everyone raved about the loaded fries. Booking again for next month.",
    rating: 5,
  },
  {
    name: "Devon R.",
    text: "The Gyros + mango lemonade combo is my whole personality now. Truck is always clean, staff is friendly.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        07 — What They Say
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Loved by the <span className="text-brand-orange">streets.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {REVIEWS.map((r, i) => (
          <div
            key={i}
            className="bg-brand-card border-2 border-white/10 rounded-2xl p-8 hover:border-brand-orange transition-colors"
          >
            <div className="flex gap-1 mb-4 text-brand-orange">
              {"★".repeat(r.rating)}
            </div>
            <p
              className="text-[15px] leading-[1.7] mb-6"
              style={{ color: "rgba(247,243,234,0.85)" }}
            >
              "{r.text}"
            </p>
            <div className="font-ui font-bold text-[12px] tracking-[0.14em] uppercase text-brand-gray">
              — {r.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}