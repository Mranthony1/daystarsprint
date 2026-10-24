const items = [
  "Search",
  "Social",
  "Paid media",
  "Identity",
  "Websites",
  "Campaigns",
  "Content",
  "Brand systems",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div
      className="overflow-hidden border-b border-line bg-bone-deep/70 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
      aria-hidden
    >
      <div className="ticker-track flex w-max py-4">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="px-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink">
              {item}
            </span>
            <span className="inline-block h-1.5 w-1.5 bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
