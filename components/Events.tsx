const SCHEDULE = [
  { day: "MON", location: "Downtown Plaza", time: "11am – 3pm", status: "open" },
  { day: "TUE", location: "Riverside Park", time: "12pm – 8pm", status: "open" },
  { day: "WED", location: "Tech Campus", time: "11am – 2pm", status: "open" },
  { day: "THU", location: "Farmers Market", time: "9am – 4pm", status: "open" },
  { day: "FRI", location: "Brewery District", time: "5pm – 11pm", status: "open" },
  { day: "SAT", location: "Sun Cir", time: "11am – 10pm", status: "open" },
  { day: "SUN", location: "Closed", time: "—", status: "closed" },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        06 — This Week
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Where we'll <span className="text-brand-orange">be.</span>
      </h2>

      <div className="bg-brand-card border-2 border-white/10 rounded-2xl overflow-hidden">
        {SCHEDULE.map((row, i) => (
          <div
            key={row.day}
            className={`grid grid-cols-[80px_1fr_auto_auto] md:grid-cols-[120px_1fr_1fr_auto] gap-4 md:gap-8 items-center px-6 md:px-10 py-5 ${
              i !== SCHEDULE.length - 1 ? "border-b border-white/5" : ""
            } hover:bg-white/[0.02] transition-colors`}
          >
            <div className="font-heading uppercase text-2xl text-brand-orange">
              {row.day}
            </div>
            <div className="font-ui font-semibold text-[15px]">
              {row.location}
            </div>
            <div className="font-ui text-[13px] text-brand-gray hidden md:block">
              {row.time}
            </div>
            <div
              className={`font-ui font-bold text-[10px] tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border-2 ${
                row.status === "open"
                  ? "border-green-500/40 text-green-400"
                  : "border-red-500/40 text-red-400"
              }`}
            >
              {row.status === "open" ? "Open" : "Closed"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}