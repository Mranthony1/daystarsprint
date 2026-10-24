import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { services } from "@/lib/services";

export function ServicesIndex({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="border-b border-line">
      <Container className="pt-20 md:pt-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Kicker index="02">Services</Kicker>
            <h2 className="mt-5 text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95]">
              {detailed ? "Five ways in. One standard of finish." : "What the studio actually does."}
            </h2>
          </div>
          {detailed ? null : (
            <Link
              href="/services"
              className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-signal hover:text-ink"
            >
              All services
            </Link>
          )}
        </div>
      </Container>
      <ul className="mt-12 border-t border-line">
        {services.map((service) => (
          <li key={service.slug} className="border-b border-line">
            <Link href={`/services/${service.slug}`} className="group block hover:bg-ink hover:text-bone">
              <span className="mx-auto grid w-full max-w-[1320px] gap-4 px-5 py-7 md:grid-cols-[5rem_1fr_1.15fr_auto] md:items-center md:gap-8 md:px-8 md:py-9">
                <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-signal">
                  {service.number}
                </span>
                <span className="font-display text-4xl leading-none tracking-[-0.04em] md:text-[2.7rem]">
                  {service.title}
                </span>
                <span className="max-w-md text-sm leading-relaxed text-ink-soft group-hover:text-bone/75">
                  {detailed ? service.summary : service.short}
                </span>
                <span aria-hidden className="text-xl text-signal">
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
