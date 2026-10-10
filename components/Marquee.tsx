export default function Marquee() {
  const items = [
    "100% Flame-Grilled",
    "Gourmet Burgers",
    "Handcrafted Daily",
    "No Shortcuts",
    "Big Flavour",
    "Loaded Fries",
    "Hard Shakes",
  ];

  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-brand-orange text-white overflow-hidden border-y-2 border-[#0b0b0d]">
      <div className="flex animate-marquee whitespace-nowrap">
        {loopItems.map((item, i) => (
          <span
            key={i}
            className="font-heading uppercase tracking-[0.01em] leading-none flex items-center"
            style={{ fontSize: "clamp(20px, 2.6vw, 34px)", padding: "14px 0" }}
          >
            {item}
            <i className="not-italic opacity-55 px-[26px]">★</i>
          </span>
        ))}
      </div>
    </div>
  );
}