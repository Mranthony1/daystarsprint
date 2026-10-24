export function PrintPlate() {
  return (
    <figure className="relative mx-auto w-full max-w-[460px]">
      <span className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-ink/50" aria-hidden />
      <span className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-ink/50" aria-hidden />
      <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-ink/50" aria-hidden />
      <span className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-ink/50" aria-hidden />
      <div className="border border-ink/15 bg-sheet p-3 shadow-[0_28px_70px_-36px_rgba(20,18,16,0.65)] sm:p-4">
        <svg viewBox="0 0 480 560" role="img" aria-labelledby="plate-title plate-desc" className="h-auto w-full">
          <title id="plate-title">Daystarsprint registration plate</title>
          <desc id="plate-desc">
            A printer’s registration mark. Scattered strokes sit on the left. A single star sits on the right.
          </desc>
          <rect width="480" height="560" fill="#FBF8F3" />
          <text x="28" y="42" fill="#5C554C" fontSize="13" fontFamily="Outfit, sans-serif" letterSpacing="2.4">
            DS—P
          </text>
          <text x="400" y="42" fill="#5C554C" fontSize="13" fontFamily="Outfit, sans-serif" letterSpacing="2">
            01
          </text>
          <line x1="240" y1="70" x2="240" y2="500" stroke="#141210" strokeOpacity="0.18" />
          <g opacity="0.85">
            <rect x="46" y="120" width="54" height="8" fill="#141210" opacity="0.28" transform="rotate(-8 46 120)" />
            <rect x="78" y="168" width="92" height="6" fill="#C43222" opacity="0.55" transform="rotate(6 78 168)" />
            <rect x="40" y="214" width="36" height="36" fill="none" stroke="#141210" strokeOpacity="0.35" />
            <circle cx="150" cy="250" r="7" fill="#141210" opacity="0.25" />
            <rect x="58" y="290" width="120" height="7" fill="#141210" opacity="0.18" transform="rotate(-3 58 290)" />
            <rect x="96" y="330" width="70" height="5" fill="#C6922E" opacity="0.85" />
            <circle cx="70" cy="360" r="16" fill="none" stroke="#141210" strokeOpacity="0.3" />
            <rect x="120" y="390" width="48" height="18" fill="#141210" opacity="0.12" />
          </g>
          <g className="spin-slow">
            <circle
              cx="360"
              cy="250"
              r="118"
              fill="none"
              stroke="#141210"
              strokeOpacity="0.35"
              strokeDasharray="2 7"
            />
          </g>
          <circle cx="360" cy="250" r="96" fill="none" stroke="#141210" strokeWidth="1.15" />
          <line x1="360" y1="132" x2="360" y2="176" stroke="#141210" strokeWidth="1" />
          <line x1="360" y1="324" x2="360" y2="368" stroke="#141210" strokeWidth="1" />
          <line x1="242" y1="250" x2="286" y2="250" stroke="#141210" strokeWidth="1" />
          <line x1="434" y1="250" x2="478" y2="250" stroke="#141210" strokeWidth="1" />
          <path
            fill="#C43222"
            d="M360 168 378 232 444 250 378 268 360 332 342 268 276 250 342 232Z"
          />
          <circle cx="360" cy="250" r="5" fill="#C6922E" />
          <text x="36" y="458" fill="#5C554C" fontSize="13" fontFamily="Outfit, sans-serif" letterSpacing="3">
            NOISE
          </text>
          <text x="300" y="458" fill="#141210" fontSize="13" fontFamily="Outfit, sans-serif" letterSpacing="3">
            SIGNAL
          </text>
          <rect x="28" y="492" width="96" height="14" fill="#141210" />
          <rect x="128" y="492" width="96" height="14" fill="#C43222" />
          <rect x="228" y="492" width="96" height="14" fill="#C6922E" />
          <rect x="328" y="492" width="96" height="14" fill="#E6DDD0" />
        </svg>
      </div>
      <figcaption className="mt-4 flex items-center justify-between gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-mute">
        <span>Plate 01 — Daylight</span>
        <span>Noise to a mark</span>
      </figcaption>
    </figure>
  );
}
