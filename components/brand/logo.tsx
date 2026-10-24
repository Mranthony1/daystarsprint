import Link from "next/link";
import { Mark } from "@/components/brand/mark";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="Daystarsprint, home"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-sm",
        tone === "light" ? "text-bone" : "text-ink",
      )}
    >
      <Mark className="h-9 w-9 shrink-0" />
      <span className="leading-none" aria-hidden>
        <span className="block font-sans text-[0.78rem] font-semibold tracking-[0.16em]">
          DAYSTARS
        </span>
        <span className="mt-1 block font-display text-[1.15rem] italic leading-none tracking-[-0.03em] text-flare">
          print
        </span>
      </span>
    </Link>
  );
}
