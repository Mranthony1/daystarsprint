import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Daystarsprint is a premium digital marketing and creative studio working with ambitious companies in Ghana and internationally.",
  path: "/about",
});

const beliefs = [
  {
    title: "Finish is a commercial quality",
    text: "A company that looks unresolved asks the buyer to do the work of trusting it. Finish is not vanity. It is how a business becomes easier to choose.",
  },
  {
    title: "Channels are doors, not strategies",
    text: "SEO, social, and ads are ways of arriving. They do not invent the thing a person should find when they get there. That thing has to be decided.",
  },
  {
    title: "Honesty is part of the craft",
    text: "The studio does not publish client names, testimonials, or performance figures it cannot stand behind. The studies on this site are labeled because pretending otherwise would cheapen the work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader index="DS—P" eyebrow="About" title="A studio for brands that intend to be remembered.">
        <p>
          Daystarsprint is a multidisciplinary digital studio. The work covers search, social media,
          paid advertising, brand identity, and websites — for companies in Ghana and for clients
          further afield who want the same standard.
        </p>
      </PageHeader>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <Kicker>The name</Kicker>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              A daystar is a light you can still pick out when the sky is already full. Print is the
              impression that stays after the press has moved on. The studio exists for companies
              that need both: to be noticed in a crowded day, and to be remembered when the scroll
              continues.
            </p>
            <p>
              That is a practical ambition, not a mood. It means the brand, the site, and the
              marketing are asked to agree with each other. It means the writing is specific. It
              means a campaign has somewhere to land.
            </p>
          </div>
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Kicker>What the studio believes</Kicker>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {beliefs.map((item) => (
              <article key={item.title} className="bg-bone p-6 md:p-8">
                <h2 className="text-3xl leading-tight">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-b border-line bg-ink text-bone">
        <Container className="grid gap-8 py-16 md:grid-cols-3 md:py-24">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/50">Where</p>
            <p className="mt-3 text-2xl">Ghana, and internationally.</p>
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/50">With</p>
            <p className="mt-3 text-2xl">Companies that have an offer and the will to decide.</p>
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/50">Without</p>
            <p className="mt-3 text-2xl">Invented awards, borrowed audiences, or guaranteed rankings.</p>
          </div>
        </Container>
      </section>
      <ClosingCta title="If the standard fits, start with the truth of the business." />
    </>
  );
}
