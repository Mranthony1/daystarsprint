import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { engagements } from "@/lib/studio";

export function Engagements() {
  return (
    <section className="border-b border-line">
      <Container className="py-20 md:py-28">
        <Kicker index="05">Engagements</Kicker>
        <h2 className="mt-5 max-w-3xl text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95]">
          Four ways to start. No published prices.
        </h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          Scope decides the number. Ask for a proposal. Advertising budgets, when they apply, sit
          apart from agency fees.
        </p>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {engagements.map((item) => (
            <article key={item.slug} className="flex flex-col bg-bone p-6 md:p-8">
              <h3 className="text-4xl italic">{item.name}</h3>
              <p className="mt-4 text-ink-soft">{item.summary}</p>
              <p className="mt-6 text-sm leading-relaxed text-mute">{item.fits}</p>
              <Link
                href={`/contact?engagement=${item.slug}`}
                className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-signal hover:text-ink"
              >
                Enquire about {item.name}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
