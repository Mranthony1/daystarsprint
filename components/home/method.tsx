import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { method } from "@/lib/studio";

export function Method() {
  return (
    <section className="border-b border-line">
      <Container className="py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Kicker index="04">Process</Kicker>
            <h2 className="mt-5 max-w-xl text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95]">
              Four stages. No mystery between them.
            </h2>
          </div>
          <Link
            href="/about"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-signal hover:text-ink"
          >
            How Tinatries thinks
          </Link>
        </div>
        <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {method.map((step) => (
            <li key={step.number} className="bg-bone p-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-signal">{step.number}</p>
              <h3 className="mt-10 text-3xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
