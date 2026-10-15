import Link from "next/link";

const LINKS: [string, string][] = [
  ["HOME", "home"],
  ["MENU", "menu"],
  ["ABOUT", "about"],
  ["FIND US", "location"],
  ["REVIEWS", "reviews"],
  ["CONTACT", "contact"],
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-black/30">
      <div className="flex items-center justify-between gap-4 px-[clamp(20px,4vw,48px)] py-[18px]">
        <Link
          href="/"
          className="font-heading uppercase text-[26px] tracking-[0.02em] whitespace-nowrap flex items-center gap-[8px] text-brand-light"
        >
          KIKS<b className="text-brand-orange font-normal">.</b>
        </Link>

        <div className="hidden lg:flex items-center gap-[clamp(10px,1.5vw,24px)]">
          {LINKS.map(([label, id]) => (
            <Link
              key={id}
              href={`#${id}`}
              className="font-ui font-semibold text-[12.5px] tracking-[0.06em] uppercase text-brand-gray hover:text-brand-light transition-colors py-1.5"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="#menu"
          className="font-ui font-extrabold text-[12.5px] tracking-[0.08em] uppercase text-white bg-brand-orange px-[18px] py-[11px] rounded-md whitespace-nowrap hover:-translate-y-0.5 transition-transform shadow-[0_12px_34px_-12px_rgba(255,78,28,0.7)]"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
}