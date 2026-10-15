import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden border-2 border-white/10 aspect-[4/5] relative">
          <Image
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200"
            alt="Kiks food truck"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
            01 — Our Story
          </p>
          <h2 className="font-heading uppercase text-[clamp(40px,6vw,88px)] leading-[0.98] mb-6">
            Cooked on <span className="text-brand-orange">wheels.</span>
          </h2>
          <p
            className="text-[15px] leading-[1.8] mb-5"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            Kiks started with one pan, one recipe, and a line out the door. Our
            Chicken Alfredo became the dish people drove across town for. Now we
            roll up wherever the crowd is — same pan, same cream, same fire.
          </p>
          <p
            className="text-[15px] leading-[1.8] mb-8"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            Every order is made fresh when you order it. No heat lamps. No
            shortcuts. Just real food, cooked loud.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <div className="font-heading text-3xl text-brand-orange">15+</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">
                Menu Items
              </p>
            </div>
            <div>
              <div className="font-heading text-3xl text-brand-orange">5★</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">
                Reviews
              </p>
            </div>
            <div>
              <div className="font-heading text-3xl text-brand-orange">100%</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">
                Fresh Made
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}