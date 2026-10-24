import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

const points = [
  {
    number: "01",
    title: "One story, several doors",
    text: "A person might meet you in search, on a social feed, or on the site. Those meetings should feel like the same company.",
  },
  {
    number: "02",
    title: "Craft with a job",
    text: "Visual work is how a business becomes recognizable before the sentence ends. It is not decoration added at the end.",
  },
  {
    number: "03",
    title: "Measures with manners",
    text: "We watch what moves enquiries and sales. Vanity numbers are not presented as progress.",
  },
];

export function Positioning() {
  return (
    <section className="border-b border-line">
      <Container className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Kicker index="01">The practice</Kicker>
            <h2 className="mt-5 text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95]">
              Most marketing starts with a tactic and hopes a brand appears.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:pb-2">
            We work the other way. The idea is settled first. Then search, social, media, and the
            website are asked to carry the same point of view — so the market meets a company that
            feels finished.
          </p>
        </div>
        <ol className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {points.map((point) => (
            <li key={point.number} className="bg-bone p-6 md:p-8">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-signal">{point.number}</p>
              <h3 className="mt-8 text-3xl leading-none">{point.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{point.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
