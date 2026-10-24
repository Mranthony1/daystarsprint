const items = [
  "SEO",
  "Social",
  "Paid media",
  "Branding",
  "Websites",
  "Campaigns",
  "Content",
  "Identity",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div
      className="overflow-hidden border-b border-line bg-ink text-cloud [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      aria-hidden
    >
      <div className="ticker-track flex w-max py-3.5">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="px-5 text-[0.68rem] font-medium uppercase tracking-[0.24em]">{item}</span>
            <span className="h-px w-6 bg-flare" />
          </span>
        ))}
      </div>
    </div>
  );
}
