"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menu, categories } from "@/data/menu";

type CategoryId = (typeof categories)[number]["id"] | "all";

export default function FullMenu() {
  const [active, setActive] = useState<CategoryId>("all");

  const filtered =
    active === "all" ? menu : menu.filter((m) => m.category === active);

  return (
    <section id="full-menu" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        03 — The Menu
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-8">
        Everything we <span className="text-brand-orange">make.</span>
      </h2>

      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button
          onClick={() => setActive("all")}
          className={`font-ui font-bold text-[12px] tracking-[0.12em] uppercase px-5 py-2.5 rounded-full border-2 transition-all ${
            active === "all"
              ? "bg-brand-orange border-brand-orange text-white"
              : "border-white/15 text-brand-gray hover:border-brand-orange hover:text-brand-orange"
          }`}
        >
          All · {menu.length}
        </button>
        {categories.map((c) => {
          const count = menu.filter((m) => m.category === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`font-ui font-bold text-[12px] tracking-[0.12em] uppercase px-5 py-2.5 rounded-full border-2 transition-all flex items-center gap-2 ${
                active === c.id
                  ? "bg-brand-orange border-brand-orange text-white"
                  : "border-white/15 text-brand-gray hover:border-brand-orange hover:text-brand-orange"
              }`}
            >
              <span>{c.emoji}</span> {c.name} · {count}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-card border-2 border-white/10 rounded-[14px] overflow-hidden hover:border-brand-orange hover:-translate-y-1 transition-all group"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ position: "relative" }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {item.tags && item.tags.length > 0 && (
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-ui font-bold text-[10px] tracking-[0.16em] uppercase px-3 py-1 rounded-full ${
                          tag === "signature"
                            ? "bg-brand-orange text-white"
                            : tag === "spicy"
                            ? "bg-red-500 text-white"
                            : tag === "veggie"
                            ? "bg-green-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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

                {item.variants && (
                  <div className="flex gap-2 mb-3">
                    {item.variants.map((v) => (
                      <span
                        key={v}
                        className="font-ui text-[10px] uppercase tracking-[0.14em] text-brand-gray border border-white/15 px-2 py-1 rounded-md"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-brand-gray text-[13px] leading-[1.6] mb-4 line-clamp-2">
                  {item.description}
                </p>

                <button className="w-full font-ui font-extrabold text-[12px] tracking-[0.1em] uppercase py-3 rounded-md border-2 border-white/10 hover:bg-brand-orange hover:border-brand-orange transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}