import { ArrowRight } from "lucide-react";
import { NEXT_STOP } from "@/data/truck";

export default function NextStop() {
  return (
    <div className="bg-brand-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4 text-[11px] md:text-[12.5px] font-ui font-bold uppercase tracking-[0.14em]">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-brand-orange shrink-0">Next Stop</span>
          <ArrowRight size={14} className="text-brand-orange shrink-0" />
          <span className="text-brand-light truncate">
            {NEXT_STOP.location}
          </span>
          <span className="text-brand-gray/60 hidden md:inline">
            · {NEXT_STOP.day} {NEXT_STOP.hours}
          </span>
        </div>
        <a
          href="#schedule"
          className="text-brand-orange hover:underline shrink-0"
        >
          Full week →
        </a>
      </div>
    </div>
  );
}