export default function MenuSection() {
  const items = [
    {
      price: "$15",
      name: "The Inferno",
      desc: "Double flame-grilled beef, jalapeño, ghost-pepper aioli, smoked cheddar.",
    },
    {
      price: "$13",
      name: "Classic Stack",
      desc: "Beef patty, aged cheddar, house pickles, secret sauce, toasted brioche.",
    },
    {
      price: "$16",
      name: "Smoke House",
      desc: "Slow-smoked brisket, crispy onions, BBQ glaze, melted swiss.",
    },
  ];

  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        02 — The Legends
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Stacked to <span className="text-brand-orange">perfection.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-brand-card border-2 border-white/10 rounded-[14px] p-8 hover:border-brand-orange hover:-translate-y-1 transition-all"
          >
            <div className="font-heading text-4xl text-brand-orange mb-4">
              {item.price}
            </div>
            <h3 className="font-heading uppercase text-2xl mb-3">{item.name}</h3>
            <p className="text-brand-gray text-sm leading-[1.6]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}