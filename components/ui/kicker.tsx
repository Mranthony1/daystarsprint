import { cn } from "@/lib/utils";

export function Kicker({
  index,
  children,
  tone = "dark",
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
        tone === "light" ? "text-bone/70" : "text-mute",
      )}
    >
      {index ? <span className="text-signal">{index}</span> : null}
      <span className={cn("h-px w-8", tone === "light" ? "bg-bone/40" : "bg-ink/30")} aria-hidden />
      {children}
    </p>
  );
}
