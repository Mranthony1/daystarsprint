import Link from "next/link";
import { Container } from "@/components/ui/container";

export function AboutPreview() {
  return (
    <section className="border-b border-line">
      <Container className="grid gap-8 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-end md:py-28">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-signal">About</p>
          <h2 className="mt-5 text-[clamp(2.3rem,4.4vw,3.8rem)] leading-[0.95]">
            A practice built around clarity.
          </h2>
        </div>
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            Tinatries exists for companies that want marketing and creative work to agree with each
            other. Strategy, design, and technology are treated as one job: help the right people
            understand the business and take the next step.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex min-h-11 items-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-signal hover:text-ink"
          >
            Read the philosophy
          </Link>
        </div>
      </Container>
    </section>
  );
}
