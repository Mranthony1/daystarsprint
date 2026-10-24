import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { createMetadata } from "@/lib/metadata";
import { engagements, method, standards } from "@/lib/studio";

export const metadata = createMetadata({
  title: "Approach",
  description:
    "How Daystarsprint works: listen, frame, make, release, and refine. Engagements for a project, a monthly practice, or a full system.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHeader index="DS—P" eyebrow="Approach" title="A press, not a pile of tactics.">
        <p>
          The studio is named for two ideas that belong together. A daystar is still visible when
          the sky is already bright. Print is the impression that remains after the moment passes.
          The work is built to do both: be noticed in a crowded day, and be remembered after it.
        </p>
      </PageHeader>
      <section id="method" className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Kicker>Method</Kicker>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {method.map((step) => (
              <li key={step.number} className="grid gap-4 py-8 md:grid-cols-[8rem_14rem_1fr] md:items-start">
                <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-signal">{step.number}</p>
                <h2 className="text-4xl">{step.title}</h2>
                <div>
                  <p className="text-lg">{step.text}</p>
                  <p className="mt-3 text-ink-soft">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="border-b border-line bg-bone-deep/40">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Kicker>We hold to this</Kicker>
            <ul className="mt-8 space-y-6">
              {standards.practice.map((item) => (
                <li key={item.title}>
                  <h2 className="text-3xl">{item.title}</h2>
                  <p className="mt-2 text-ink-soft">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Kicker>We will not sell this</Kicker>
            <ul className="mt-8 space-y-4">
              {standards.decline.map((item) => (
                <li key={item} className="border-t border-line pt-4 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section id="engagements" className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Kicker>Engagements</Kicker>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.4rem,4.5vw,4rem)] leading-[0.95]">
            Choose the shape. The standard stays the same.
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {engagements.map((item) => (
              <article key={item.slug} className="flex flex-col border border-line bg-sheet p-6 md:p-8">
                <h3 className="text-4xl italic">{item.name}</h3>
                <p className="mt-4 text-lg">{item.summary}</p>
                <p className="mt-3 text-sm text-mute">{item.fits}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                  {item.includes.map((line) => (
                    <li key={line} className="border-t border-line pt-3">
                      {line}
                    </li>
                  ))}
                </ul>
                <ButtonLink href={`/contact?engagement=${item.slug}`} className="mt-8">
                  Enquire
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
