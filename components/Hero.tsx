import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-bleed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/chickenalfredo.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay so text stays readable */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,13,0.65) 0%, rgba(11,11,13,0.35) 35%, rgba(11,11,13,0.7) 70%, rgba(11,11,13,0.98) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Today's Special badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-brand-orange text-white px-3 py-1.5 rounded-full text-[11px] font-ui font-bold tracking-[0.18em] uppercase">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Today's Special
            </span>
          </div>

          <h1 className="font-heading uppercase text-[clamp(52px,9vw,140px)] leading-[0.9] tracking-[0.01em] mb-2">
            Chicken
          </h1>
          <h1 className="font-heading uppercase text-[clamp(52px,9vw,140px)] leading-[0.9] tracking-[0.01em] text-brand-orange mb-6">
            Alfredo.
          </h1>

          <p
            className="max-w-[46ch] leading-[1.7] text-[clamp(15px,1.35vw,19px)] mb-8"
            style={{ color: "rgba(247,243,234,0.85)" }}
          >
            Creamy. Rich. Made fresh when you order — every single time.
            Watch it come to life from pan to plate.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#menu"
              className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase text-white bg-brand-orange px-[30px] py-4 rounded-md shadow-[0_12px_34px_-12px_rgba(255,78,28,0.7)] hover:-translate-y-[3px] transition-transform"
            >
              Order Now
            </Link>
            <Link
              href="#menu"
              className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase text-brand-light bg-transparent border-2 border-white/20 backdrop-blur-sm px-[30px] py-4 rounded-md hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              See Full Menu
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/15 flex gap-8">
            <div>
              <div className="font-heading text-2xl text-brand-orange">4.9★</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">
                Rating
              </p>
            </div>
            <div>
              <div className="font-heading text-2xl text-brand-orange">15min</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">
                Delivery
              </p>
            </div>
            <div>
              <div className="font-heading text-2xl text-brand-orange">$14.99</div>
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-brand-gray mt-1">
                Signature
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-gray">
        <span className="font-ui text-[10px] uppercase tracking-[0.22em]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-brand-orange animate-pulse" />
      </div>
    </section>
  );
}