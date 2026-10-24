import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { standards } from "@/lib/studio";

export function Standards() {
  return (
    <section className="border-b border-line bg-bone-deep/50">
      <Container className="grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Kicker index="06">Standards</Kicker>
          <h2 className="mt-5 text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95]">What we practice.</h2>
          <ul className="mt-8 space-y-6">
            {standards.practice.map((item) => (
              <li key={item.title}>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-ink/10 bg-sheet p-6 md:p-10">
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
  );
}
