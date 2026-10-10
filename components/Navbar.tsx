import Link from "next/link";

const LINKS: [string, string][] = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["MENU", "menu"],
  ["GALLERY", "gallery"],
  ["RESERVATION", "reserve"],
  ["EVENTS", "events"],
  ["REVIEWS", "reviews"],
  ["LOCATION", "location"],
  ["CONTACT", "contact"],
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-transparent">
      <div className="flex items-center justify-between gap-4 px-[clamp(20px,4vw,48px)] py-[18px]">
        <Link
          href="/"
          className="font-heading uppercase text-[25px] tracking-[0.02em] whitespace-nowrap flex items-center gap-[9px] text-brand-light"
        >
          GRAB YOUR <b className="text-brand-orange font-normal">FOOD</b>
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
          href="#reserve"
          className="font-ui font-extrabold text-[12.5px] tracking-[0.08em] uppercase text-white bg-brand-orange px-[18px] py-[11px] rounded-md whitespace-nowrap hover:-translate-y-0.5 transition-transform"
        >
          Reserve
        </Link>
      </div>
    </nav>
  );
}