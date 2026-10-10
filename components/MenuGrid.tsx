export default function MenuGrid() {
  const images = [
    "/images/menu-1.jpg",
    "/images/menu-2.jpg",
    "/images/menu-3.jpg",
    "/images/menu-4.jpg",
    "/images/menu-5.jpg",
    "/images/menu-6.jpg",
    "/images/menu-7.jpg",
    "/images/menu-8.jpg",
  ];

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        04 — The Joint
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Come for the <span className="text-brand-orange">vibe.</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((src, index) => (
          <div
            key={index}
            className="aspect-square bg-brand-card rounded-xl overflow-hidden border-2 border-white/10 relative group"
          >
            <img
              src={src}
              alt={`Menu item ${index + 1}`}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}