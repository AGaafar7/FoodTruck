import Image from "next/image";
import { topSellers } from "@/data/menu";

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        02 — Top Sellers
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Fresh off the <span className="text-brand-orange">truck.</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {topSellers.map((item) => (
          <div
            key={item.id}
            className="bg-brand-card border-2 border-white/10 rounded-[14px] overflow-hidden hover:border-brand-orange hover:-translate-y-1 transition-all group"
          >
            <div
              className="relative aspect-square overflow-hidden"
              style={{ position: "relative" }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-brand-orange text-white font-ui font-bold text-[10px] tracking-[0.16em] uppercase px-3 py-1 rounded-full z-10">
                {item.tags?.includes("signature") ? "Signature" : "Popular"}
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-heading uppercase text-xl leading-tight">
                  {item.name}
                </h3>
                <span className="font-heading text-brand-orange text-xl shrink-0">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              <p className="text-brand-gray text-[13px] leading-[1.6] mb-4 line-clamp-2">
                {item.description}
              </p>

              <button className="w-full font-ui font-extrabold text-[12px] tracking-[0.1em] uppercase py-3 rounded-md border-2 border-white/10 hover:bg-brand-orange hover:border-brand-orange transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}