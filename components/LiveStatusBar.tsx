"use client";
import { useEffect, useState } from "react";
import { TODAY } from "@/data/truck";

function isCurrentlyOpen(): boolean {
  if (TODAY.closed) return false;
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  return hour >= TODAY.openHour && hour < TODAY.closeHour;
}

function timeUntilClose(): string {
  const now = new Date();
  const close = new Date();
  close.setHours(TODAY.closeHour, 0, 0, 0);
  const diff = close.getTime() - now.getTime();
  if (diff <= 0) return "";
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  return `${h}h ${m}m`;
}

export default function LiveStatusBar() {
  const [status, setStatus] = useState({ open: true, timeLeft: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const open = isCurrentlyOpen();
      setStatus({ open, timeLeft: open ? timeUntilClose() : "" });
    };
    tick();
    const i = setInterval(tick, 60000);
    return () => clearInterval(i);
  }, []);

  if (!mounted) return null;

  return (
    <div className="sticky top-0 z-[60] bg-brand-orange text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 md:gap-3 text-[10.5px] md:text-[12px] font-ui font-bold uppercase tracking-[0.14em]">
        {status.open ? (
          <>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Open Now
            </span>
            <span className="opacity-60">·</span>
            <span className="truncate max-w-[140px] md:max-w-none">
              📍 {TODAY.location}
            </span>
            <span className="opacity-60 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Closes in {status.timeLeft}</span>
          </>
        ) : (
          <>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              {TODAY.closed ? "Rest Day" : "Closed"}
            </span>
            <span className="opacity-60">·</span>
            <span>Back tomorrow at 11am</span>
          </>
        )}
      </div>
    </div>
  );
}