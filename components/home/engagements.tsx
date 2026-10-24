import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { engagements } from "@/lib/studio";

export function Engagements() {
  return (
    <section className="border-b border-line">
      <Container className="py-20 md:py-28">
        <Kicker index="07">Engagements</Kicker>
        <h2 className="mt-5 max-w-3xl text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95]">
          Three ways to work with the studio.
        </h2>
        <div className="mt-12 grid gap-px bg-line lg:grid-cols-3">
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
