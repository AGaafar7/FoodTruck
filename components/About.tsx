export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col gap-32">
      <div className="text-center relative">
        <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
          Handcrafted · Flame-Grilled · Loaded
        </p>
        <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98]">
          Too good to <br /> <span className="text-brand-orange">sit still.</span>
        </h2>
        <p
          className="mt-6 max-w-2xl mx-auto text-sm leading-[1.7]"
          style={{ color: "rgba(247,243,234,0.74)" }}
        >
          Chicken, fries, burgers, pizza — stacked fresh, fried golden, and out the
          door while it's still flying-hot. This is fast food with serious attitude.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
            01 — Our Story
          </p>
          <h2 className="font-heading uppercase text-[clamp(40px,6.5vw,96px)] leading-[0.98] mb-6">
            Born from a <br /> <span className="text-brand-orange">hunger for</span>{" "}
            <br /> more.
          </h2>
          <p
            className="text-sm leading-[1.7] mb-6"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            We started with one grill, one obsession, and a refusal to serve anything
            average. A decade later we're still flame-grilling every patty to order —
            no shortcuts, no apologies.
          </p>
          <p className="text-xs font-bold tracking-widest text-brand-light uppercase">
            Big flavour. Big energy. Always handcrafted.
          </p>
        </div>
        <div className="relative h-96 w-full rounded-lg overflow-hidden border-2 border-white/10">
          <img
            src="/images/burger-about.jpg"
            alt="Burger"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 border-y-2 border-white/10 py-12">
        {[
          { value: "10+", label: "Years grilling" },
          { value: "40+", label: "Stacked recipes" },
          { value: "4.9★", label: "Guest rating" },
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