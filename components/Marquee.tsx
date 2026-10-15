const ITEMS = [
  "Chicken Alfredo",
  "Shrimp Alfredo",
  "Philly Steak",
  "Gyros",
  "Loaded Fries",
  "Tacos",
  "Falafel",
  "Lemonade",
  "Made Fresh",
];

export default function Marquee() {
  return (
    <div className="border-y-2 border-white/5 py-6 overflow-hidden bg-brand-card">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-10 px-5">
            {ITEMS.map((text, j) => (
              <span
                key={j}
                className="font-heading uppercase text-3xl md:text-4xl text-brand-light flex items-center gap-10"
              >
                {text}
                <span className="text-brand-orange">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}