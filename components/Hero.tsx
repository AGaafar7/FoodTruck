import RotatingBadge from "./RotatingBadge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col justify-end pb-[6vh] overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-burger.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,13,0.55) 0%, rgba(11,11,13,0.2) 35%, rgba(11,11,13,0.55) 70%, rgba(11,11,13,0.96) 100%)",
        }}
      />

      <img
        src="/images/lettuce.png"
        alt=""
        className="absolute top-[10%] left-[4%] w-[clamp(80px,10vw,140px)] opacity-90 -rotate-12 hidden md:block z-10"
      />
      <img
        src="/images/burger-float.png"
        alt=""
        className="absolute bottom-[8%] left-[5%] w-[clamp(120px,16vw,200px)] opacity-90 rotate-6 hidden md:block z-10"
      />
      <img
        src="/images/tomato.png"
        alt=""
        className="absolute top-[16%] right-[38%] w-[clamp(50px,6vw,90px)] opacity-90 hidden md:block z-10"
      />

      <RotatingBadge />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
          Flame-Grilled · Gourmet · Handcrafted
        </p>

        <h1 className="font-heading uppercase text-[clamp(44px,9vw,128px)] leading-[0.98] tracking-[0.01em] mb-0">
          Bigger. Bolder.
        </h1>
        <h1 className="font-heading uppercase text-[clamp(44px,9vw,128px)] leading-[0.98] tracking-[0.01em] text-brand-orange">
          Better Burgers.
        </h1>

        <p
          className="mt-5 max-w-[40ch] leading-[1.7] text-[clamp(15px,1.25vw,18px)]"
          style={{ color: "rgba(247,243,234,0.74)" }}
        >
          100% flame-grilled, stacked by hand, and packed with attitude. This is
          fast food that refuses to play it safe.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#menu"
            className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase text-white bg-brand-orange px-[30px] py-4 rounded-md shadow-[0_12px_34px_-12px_rgba(255,78,28,0.7)] hover:-translate-y-[3px] transition-transform"
          >
            See the menu
          </a>
          <a
            href="#reserve"
            className="font-ui font-extrabold text-[13.5px] tracking-[0.1em] uppercase text-brand-light bg-transparent border-2 border-white/10 px-[30px] py-4 rounded-md hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            Reserve a table
          </a>
        </div>
      </div>
    </section>
  );
}