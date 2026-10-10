export default function RotatingBadge() {
  return (
    <div
      className="absolute right-16 z-[2] hidden md:block"
      style={{
        top: "18vh",
        width: "clamp(110px, 13vw, 168px)",
        height: "clamp(110px, 13vw, 168px)",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Orange filled circle */}
        <circle cx="50" cy="50" r="48" fill="#ff4e1c" />

        {/* Rotating curved text */}
        <g style={{ animation: "spin 14s linear infinite", transformOrigin: "center" }}>
          <path
            id="bp"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            fill="none"
          />
          <text
            fill="#fff"
            fontFamily="Archivo, sans-serif"
            fontWeight="800"
            fontSize="10.5"
            letterSpacing="2"
          >
            <textPath href="#bp">· FLAME-GRILLED · HANDCRAFTED DAILY </textPath>
          </text>
        </g>

        {/* Static center text */}
        <text x="50" y="46" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="15" fill="#fff">
          EST
        </text>
        <text x="50" y="62" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="15" fill="#fff">
          2014
        </text>
      </svg>
    </div>
  );
}