import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  signal:
    "btn-signal bg-signal text-sheet hover:bg-ink",
  ink: "bg-ink text-sheet hover:bg-signal",
  ghost:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-sheet",
  ghostLight:
    "border border-bone/30 text-bone hover:border-bone hover:bg-bone hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "signal",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center px-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
