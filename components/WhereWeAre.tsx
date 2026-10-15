import { MapPin, Navigation, AtSign } from "lucide-react";
import { TODAY, WEEK, CONTACT } from "@/data/truck";

export default function WhereWeAre() {
  // Filter out today from the rest of the week
  const restOfWeek = WEEK.filter((d) => d.day !== TODAY.day);

  return (
    <section id="schedule" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="font-ui text-brand-orange text-[12px] font-bold tracking-[0.28em] uppercase mb-3">
        Where We Are
      </p>
      <h2 className="font-heading uppercase text-[clamp(40px,7vw,108px)] leading-[0.98] mb-12">
        Find the <span className="text-brand-orange">truck.</span>
      </h2>

      {/* TODAY — big card */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-brand-orange rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/20 backdrop-blur px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="font-ui font-bold text-[10px] tracking-[0.16em] uppercase text-white">
              Today
            </span>
          </div>

          <p className="font-ui font-bold text-[12px] tracking-[0.22em] uppercase text-white/80 mb-3">
            {TODAY.day} · {TODAY.hours}
          </p>
          <h3 className="font-heading uppercase text-[clamp(36px,5vw,64px)] leading-[1] text-white mb-6">
            {TODAY.location}
          </h3>

          <div className="flex items-start gap-3 mb-6 text-white">
            <MapPin size={20} className="shrink-0 mt-0.5" />
            <span className="font-ui font-semibold text-[15px]">
              {TODAY.address}
            </span>
          </div>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(TODAY.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-charcoal text-white font-ui font-extrabold text-[12.5px] tracking-[0.1em] uppercase px-6 py-3.5 rounded-md hover:bg-black hover:-translate-y-0.5 transition-all"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </div>

        {/* Map placeholder — you can swap for a real embedded map later */}
        <div className="bg-brand-card border-2 border-white/10 rounded-2xl overflow-hidden min-h-[300px] md:min-h-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
            <MapPin size={40} className="text-brand-orange" strokeWidth={1.5} />
            <p className="font-ui font-bold text-[12px] tracking-[0.18em] uppercase text-brand-gray">
              Live map coming soon
            </p>
            <p className="font-ui text-[13px] text-brand-gray/70 max-w-xs">
              Follow{" "}
              <a
                href={`https://instagram.com/${CONTACT.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                @{CONTACT.instagram}
              </a>{" "}
              for real-time updates
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the week */}
      <div className="bg-brand-card border-2 border-white/10 rounded-2xl overflow-hidden">
        {restOfWeek.map((row, i) => (
          <div
            key={row.day}
            className={`grid grid-cols-[70px_1fr_auto] md:grid-cols-[120px_1fr_1fr_auto] gap-4 md:gap-8 items-center px-5 md:px-10 py-5 ${
              i !== restOfWeek.length - 1 ? "border-b border-white/5" : ""
            } ${row.closed ? "opacity-50" : "hover:bg-white/[0.02]"} transition-colors`}
          >
            <div className="font-heading uppercase text-2xl text-brand-light/70">
              {row.day}
            </div>
            <div className="font-ui font-semibold text-[15px] text-brand-light/80">
              {row.location}
            </div>
            <div className="font-ui text-[13px] text-brand-gray hidden md:block">
              {row.hours}
            </div>
            <div
              className={`font-ui font-bold text-[10px] tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border-2 ${
                row.closed
                  ? "border-red-500/40 text-red-400"
                  : "border-white/15 text-brand-gray"
              }`}
            >
              {row.closed ? "Closed" : "Open"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-brand-card border-2 border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <AtSign size={20} className="text-brand-orange" />
          <p className="font-ui font-semibold text-[14px]">
            Locations change weekly — follow us for live updates
          </p>
        </div>
        <a
          href={`https://instagram.com/${CONTACT.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui font-extrabold text-[12.5px] tracking-[0.1em] uppercase text-brand-orange hover:underline"
        >
          @{CONTACT.instagram} →
        </a>
      </div>
    </section>
  );
}