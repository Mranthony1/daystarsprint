import type { ReactNode } from "react";

const frames: Record<string, ReactNode> = {
  "harbor-rye": (
    <svg viewBox="0 0 800 640" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="640" fill="#E7D3BC" />
      <rect y="80" width="800" height="46" fill="#141210" />
      <rect y="168" width="800" height="18" fill="#C43222" />
      <rect y="230" width="800" height="8" fill="#141210" opacity="0.35" />
      <rect y="430" width="800" height="70" fill="#C6922E" />
      <circle cx="620" cy="300" r="92" fill="#FBF8F3" />
      <circle cx="620" cy="300" r="70" fill="none" stroke="#141210" strokeWidth="2" />
      <path fill="#C43222" d="M620 246 632 286 674 300 632 314 620 354 608 314 566 300 608 286Z" />
      <text x="48" y="560" fill="#141210" fontSize="28" fontFamily="Georgia, serif" letterSpacing="4">
        HARBOR
      </text>
    </svg>
  ),
  "vesper-clinic": (
    <svg viewBox="0 0 800 640" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="640" fill="#1B1916" />
      {Array.from({ length: 9 }).map((_, index) => (
        <rect
          key={index}
          x={70 + index * 78}
          y="0"
          width="8"
          height="640"
          fill="#F4EFE6"
          opacity={index === 4 ? 0.9 : 0.18}
        />
      ))}
      <circle cx="400" cy="320" r="120" fill="none" stroke="#E23B2A" strokeWidth="1.5" />
      <path fill="#F4EFE6" d="M400 250a70 70 0 1 0 0 140 56 56 0 1 1 0-140Z" />
    </svg>
  ),
  "kite-copper": (
    <svg viewBox="0 0 800 640" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="640" fill="#F4EFE6" />
      <rect
        x="150"
        y="120"
        width="280"
        height="280"
        fill="#141210"
        transform="rotate(12 290 260)"
      />
      <rect
        x="330"
        y="180"
        width="280"
        height="280"
        fill="#C43222"
        transform="rotate(-8 470 320)"
      />
      <line x1="80" y1="520" x2="740" y2="500" stroke="#C6922E" strokeWidth="6" />
    </svg>
  ),
  "north-station": (
    <svg viewBox="0 0 800 640" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="640" fill="#E6DDD0" />
      <path
        d="M60 420 C 180 420, 180 180, 320 180 S 500 460, 740 220"
        fill="none"
        stroke="#141210"
        strokeWidth="3"
      />
      <circle cx="120" cy="400" r="16" fill="#141210" />
      <circle cx="320" cy="180" r="16" fill="#FBF8F3" stroke="#141210" strokeWidth="3" />
      <circle cx="620" cy="280" r="22" fill="#C43222" />
      <text x="60" y="120" fill="#5C554C" fontSize="18" fontFamily="Outfit, sans-serif" letterSpacing="6">
        THREE ROOMS
      </text>
    </svg>
  ),
  fieldnote: (
    <svg viewBox="0 0 800 640" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="640" fill="#141210" />
      {[220, 160, 100, 48].map((radius) => (
        <circle
          key={radius}
          cx="400"
          cy="320"
          r={radius}
          fill="none"
          stroke={radius === 100 ? "#E23B2A" : "#F4EFE6"}
          strokeOpacity={radius === 220 ? 0.25 : 0.8}
          strokeWidth={radius === 48 ? 8 : 1.5}
        />
      ))}
      <circle cx="400" cy="320" r="8" fill="#C6922E" />
    </svg>
  ),
  "sable-atelier": (
    <svg viewBox="0 0 800 640" className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="640" fill="#2A2420" />
      <path
        d="M-20 460 C 140 200, 280 520, 420 300 S 680 180, 840 420"
        fill="none"
        stroke="#F4EFE6"
        strokeWidth="28"
      />
      <path
        d="M40 500 C 200 280, 340 540, 500 340 S 700 240, 820 460"
        fill="none"
        stroke="#E23B2A"
        strokeWidth="2"
        strokeDasharray="8 10"
      />
    </svg>
  ),
};

export function StudyArt({ slug }: { slug: string }) {
  return (
    <div className="h-full min-h-56 w-full" aria-hidden>
      {frames[slug] ?? <div className="h-full bg-ink" />}
    </div>
  );
}
