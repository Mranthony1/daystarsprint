import Link from "next/link";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";

export const metadata = createMetadata({
  title: "Services",
  description:
    "SEO, social media marketing, paid advertising, branding, and web design from Tinatries — planned as one practice.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Five disciplines. One standard of finish.">
        <p>
          Hire Tinatries for a single problem, or for the whole impression. Every engagement starts
          with what the market is supposed to understand, then builds the work that can carry it.
        </p>
      </PageHeader>
      {services.map((service) => (
        <section key={service.slug} className="border-b border-line">
          <Container className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-signal">{service.number}</p>
              <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-[0.95]">{service.title}</h2>
              <p className="mt-4 text-ink-soft">{service.short}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex min-h-11 items-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-signal hover:text-ink"
              >
                Read {service.title}
              </Link>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink-soft">{service.summary}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.deliverables.slice(0, 4).map((item) => (
                  <li key={item} className="border-t border-line pt-3 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}
      <section className="border-b border-line bg-mist/50">
        <Container className="grid gap-8 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <h2 className="text-4xl leading-tight">Stronger together.</h2>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            A brand system with nowhere to live, or a campaign with nowhere to land, wastes the
            work that came before it. Search, social, paid media, identity, and the website can be
            commissioned alone. They are more useful when they inherit the same point of view.
          </p>
        </Container>
      </section>
      <ClosingCta
        title="If the list is close, the brief can be rough."
        body="Tell us the business and the pressure. We will help sort which discipline actually belongs in the scope."
      />
    </>
  );
}
