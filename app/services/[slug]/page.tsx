import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { StudyCard } from "@/components/work/study-card";
import { createMetadata } from "@/lib/metadata";
import { getProjectsForDiscipline } from "@/lib/projects";
import { getService, services, type Service } from "@/lib/services";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<Container className="py-24 text-mute">Loading service…</Container>}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = getProjectsForDiscipline(service.slug as "seo" | "social" | "paid" | "branding" | "web");

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: "Daystarsprint" },
    serviceType: service.title,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="border-b border-line">
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mute">
            <Link href="/services" className="hover:text-signal">
              Services
            </Link>
            <span aria-hidden> / </span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <p className="mt-8 text-[0.72rem] font-semibold tracking-[0.18em] text-signal">{service.number}</p>
          <h1 className="mt-3 max-w-4xl text-[clamp(3rem,6.5vw,6rem)] leading-[0.9]">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft">{service.short}</p>
        </Container>
      </header>
      <ServiceBody service={service} related={related} />
    </>
  );
}

function ServiceBody({
  service,
  related,
}: {
  service: Service;
  related: ReturnType<typeof getProjectsForDiscipline>;
}) {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="text-lg leading-relaxed text-ink-soft">{service.narrative}</p>
          <div className="border border-line bg-sheet p-6 md:p-8">
            <Kicker>A fit when</Kicker>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed">
              {service.fit.map((item) => (
                <li key={item} className="border-t border-line pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-20">
          <div>
            <Kicker>Situations</Kicker>
            <ul className="mt-6 space-y-4">
              {service.problems.map((item) => (
                <li key={item} className="border-t border-line pt-4 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Kicker>What is made</Kicker>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="border-t border-line pt-4 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="border-b border-line bg-ink text-bone">
        <Container className="py-16 md:py-20">
          <Kicker tone="light">What we watch</Kicker>
          <p className="mt-4 max-w-2xl text-bone/70">
            These are the signs we look at. They are not promises, and they are not invented
            performance figures.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {service.measures.map((item) => (
              <li key={item} className="border border-bone/15 px-5 py-4 text-bone">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      {related.length > 0 ? (
        <section className="border-b border-line">
          <Container className="py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-4xl">Studies in this discipline</h2>
              <Link href={`/work?discipline=${service.slug}`} className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-signal">
                Filter the work
              </Link>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {related.slice(0, 2).map((project) => (
                <StudyCard key={project.slug} project={project} compact />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <section>
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl text-4xl leading-tight">Bring this discipline into a brief.</h2>
          <ButtonLink href={`/contact?service=${service.slug}`}>Start with {service.title}</ButtonLink>
        </Container>
      </section>
    </>
  );
}
