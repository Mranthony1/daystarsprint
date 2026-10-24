import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { PageHeader } from "@/components/ui/page-header";
import { method, standards } from "@/lib/studio";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Tinatries is a premium digital marketing and creative agency. Strategy, design, and performance, planned as one practice.",
  path: "/about",
});

const values = [
  {
    title: "Strategic thinking",
    text: "The first question is what the business needs a person to understand. Channels come after that answer.",
  },
  {
    title: "Creative excellence",
    text: "Finish is a commercial quality. A company that looks unresolved asks the buyer to supply the trust.",
  },
  {
    title: "Transparency",
    text: "Scope, fees, and what will be measured are said in plain language. Rankings and returns are not promised.",
  },
  {
    title: "Collaboration",
    text: "The useful client is one who can decide. Tinatries brings the craft. The business brings the truth of the offer.",
  },
  {
    title: "Continuous learning",
    text: "A launch is a reading, not a finish line. The next period of work follows what the evidence shows.",
  },
  {
    title: "Responsible execution",
    text: "No bought audiences, no fabricated proof, and no template presented as an original identity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Marketing and creative, asked to agree.">
        <p>
          Tinatries is a digital marketing and creative agency. The work covers search, social
          media, paid advertising, branding, and websites — for ambitious companies that want those
          disciplines to feel like one practice.
        </p>
      </PageHeader>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <article>
            <Kicker>Mission</Kicker>
            <p className="mt-5 text-2xl leading-snug">
              Help ambitious brands become clearer, more recognizable, and easier to choose.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Proposed brand copy. Refine it when the owner wants a different line.
            </p>
          </article>
          <article>
            <Kicker>Vision</Kicker>
            <p className="mt-5 text-2xl leading-snug">
              A studio known for work that is distinctive in public and disciplined in private.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Proposed brand copy. It describes an intention, not a claim about past results.
            </p>
          </article>
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Kicker>Values</Kicker>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="bg-cloud p-6 md:p-8">
                <h2 className="text-3xl leading-tight">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="practice" className="border-b border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div>
            <Kicker>How Tinatries thinks</Kicker>
            <h2 className="mt-5 text-4xl leading-tight">
              Strategy, design, and technology are one job.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              A website that the marketing contradicts is an expensive misunderstanding. So is a
              campaign with nowhere to land, or an identity that never reaches the page a buyer
              actually reads. Tinatries treats those as the same problem.
            </p>
            <p>
              Team biographies are not published here. Names, portraits, and credentials will be
              added only when they are real. Until then, the working method is the public record.
            </p>
          </div>
        </Container>
        <Container className="grid gap-px bg-line pb-16 md:grid-cols-2 md:pb-24 lg:grid-cols-4">
          {method.map((step) => (
            <article key={step.number} className="bg-cloud p-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-signal">{step.number}</p>
              <h3 className="mt-8 text-3xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="border-b border-line bg-mist/60">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Kicker>Standards</Kicker>
            <ul className="mt-8 space-y-6">
              {standards.practice.map((item) => (
                <li key={item.title}>
                  <h2 className="text-2xl">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-sheet p-6 md:p-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-signal">
              What we decline
            </p>
            <ul className="mt-6 space-y-4">
              {standards.decline.map((item) => (
                <li key={item} className="border-t border-line pt-4 text-lg leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <ClosingCta
        title="If the standard fits, start with the truth of the business."
        body="A short description is enough. Tinatries will say so if the work is not a fit."
      />
    </>
  );
}
