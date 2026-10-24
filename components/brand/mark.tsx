export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect x="4" y="6" width="6" height="24" fill="currentColor" />
      <rect x="15" y="6" width="6" height="24" fill="#12786f" />
      <rect x="26" y="6" width="6" height="24" fill="currentColor" opacity="0.28" />
    </svg>
  );
}
