import Link from "next/link";
import { Mark } from "@/components/brand/mark";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="Tinatries, home"
      className={cn(
        "inline-flex items-center gap-2.5",
        tone === "light" ? "text-cloud" : "text-ink",
      )}
    >
      <Mark className="h-7 w-7 shrink-0" />
      <span className="font-sans text-[1.05rem] font-medium tracking-[-0.04em]" aria-hidden>
        Tinatries
      </span>
    </Link>
  );
}
