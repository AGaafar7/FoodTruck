import AlfredoSlider from "./AlfredoSlider";
import { heroImages } from "@/data/menu";

export default function AlfredoSliderSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
            Made Fresh
          </p>
          <h2 className="font-heading uppercase text-[clamp(40px,6vw,88px)] leading-[0.98] mb-6">
            From pan to <span className="text-brand-orange">plate.</span>
          </h2>
          <p
            className="text-[15px] leading-[1.8] mb-6"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            Every Alfredo is made to order — creamy, hot, and loaded with
            freshly grilled chicken. Drag the slider to see it go from
            sizzling pan to perfect plate.
          </p>
          <p
            className="text-[15px] leading-[1.8]"
            style={{ color: "rgba(247,243,234,0.74)" }}
          >
            Shrimp Alfredo also available — same creamy sauce, loaded with
            sautéed shrimp.
          </p>
        </div>

        {/* Right — the slider */}
        <div className="relative">
          <AlfredoSlider
            cookingImage={heroImages.cooking}
            platedImage={heroImages.plated}
            videoSrc={heroImages.video}
          />
          <p className="mt-4 text-center font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray">
            Drag to reveal · Cooking → Plated
          </p>
        </div>
      </div>
    </section>
  );
}