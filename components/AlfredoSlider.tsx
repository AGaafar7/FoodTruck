"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

interface Props {
  cookingImage: string;
  platedImage: string;
  videoSrc?: string | null;
  labelLeft?: string;
  labelRight?: string;
}

export default function AlfredoSlider({
  cookingImage,
  platedImage,
  videoSrc,
  labelLeft = "🔥 In the pan",
  labelRight = "✨ On the plate",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Auto-demo on first view
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = 50;
            const target = 30;
            const duration = 1200;
            const t0 = performance.now();
            const anim = (t: number) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setPosition(start + (target - start) * eased);
              if (p < 1) requestAnimationFrame(anim);
              else {
                const t1 = performance.now();
                const back = (t: number) => {
                  const p = Math.min(1, (t - t1) / duration);
                  const eased = 1 - Math.pow(1 - p, 3);
                  setPosition(35 + (50 - 35) * eased);
                  if (p < 1) requestAnimationFrame(back);
                };
                requestAnimationFrame(back);
              }
            };
            requestAnimationFrame(anim);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-white/10 select-none cursor-ew-resize touch-none shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
    >
      {videoSrc && (
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0">
        <Image src={platedImage} alt="Plated Alfredo" fill className="object-cover" priority draggable={false} />
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={cookingImage} alt="Alfredo cooking" fill className="object-cover" priority draggable={false} />
      </div>

      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.6)] z-10" style={{ left: `calc(${position}% - 2px)` }} />

      <motion.div
        animate={{ scale: isDragging ? 1.15 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="absolute top-1/2 -translate-y-1/2 z-20"
        style={{ left: `calc(${position}% - 24px)` }}
      >
        <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(255,90,31,0.9)]">
          <ChevronsLeftRight size={20} className="text-white" strokeWidth={3} />
        </div>
      </motion.div>

      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-full text-[10px] font-ui font-bold uppercase tracking-[0.16em] z-20">
        {labelLeft}
      </div>
      <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1.5 rounded-full text-[10px] font-ui font-bold uppercase tracking-[0.16em] z-20">
        {labelRight}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur text-black px-4 py-2 rounded-full text-[10px] font-ui font-bold uppercase tracking-[0.16em] z-20 whitespace-nowrap"
      >
        ← Drag to reveal →
      </motion.div>
    </div>
  );
}