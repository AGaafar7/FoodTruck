import Link from "next/link";
import AlfredoSlider from "./AlfredoSlider";
import { heroImages } from "@/data/menu";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-4">
            Signature Dish · Made to Order
          </p>

          <h1 className="font-heading uppercase text-[clamp(52px,8.5vw,120px)] leading-[0.94] tracking-[0.01em] mb-0">
            Chicken
          </h1>
          <h1 className="font-heading uppercase text-[clamp(52px,8.5vw,120px)] leading-[0.94] tracking-[0.01em] text-brand-orange">
            Alfredo.
          </h1>

          <p
            className="mt-6 max-w-[42ch] leading-[1.7] text-[clamp(15px,1.25vw,18px)]"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            Creamy. Rich. Made fresh when you order. Drag the slider to watch it
            go from sizzling pan to perfect plate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#menu"
              className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase text-white bg-brand-orange px-[30px] py-4 rounded-md shadow-[0_12px_34px_-12px_rgba(255,78,28,0.7)] hover:-translate-y-[3px] transition-transform"
            >
              Order Now
            </Link>
            <Link
              href="#menu"
              className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase text-brand-light bg-transparent border-2 border-white/10 px-[30px] py-4 rounded-md hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              See Full Menu
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/10 flex gap-8">
            <div>
              <div className="font-heading text-2xl text-brand-orange">4.9★</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">Rating</p>
            </div>
            <div>
              <div className="font-heading text-2xl text-brand-orange">15min</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">Delivery</p>
            </div>
            <div>
              <div className="font-heading text-2xl text-brand-orange">$14.99</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">Signature</p>
            </div>
          </div>
        </div>

        {/* Right — Alfredo Slider */}
        <div className="relative">
          <AlfredoSlider
            cookingImage={heroImages.cooking}
            platedImage={heroImages.plated}
            videoSrc={heroImages.video}
          />
          <p className="mt-4 text-center font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray">
            🍝 Shrimp Alfredo also available · $16.99
          </p>
        </div>
      </div>
    </section>
  );
}