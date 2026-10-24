import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const panels = [
  { index: "01", label: "Strategy", className: "h-48 bg-ink text-cloud sm:h-64 lg:h-[26rem]" },
  { index: "02", label: "Creative", className: "h-60 bg-signal text-cloud sm:h-80 lg:h-[32rem]" },
  { index: "03", label: "Performance", className: "h-40 border border-line bg-sheet text-ink sm:h-56 lg:h-[22rem]" },
];

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="grid items-end gap-12 py-14 lg:grid-cols-[1.12fr_0.88fr] lg:py-20">
        <div className="rise">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-signal">
            Digital marketing × creative strategy
          </p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.7rem,6.5vw,6.15rem)] leading-[0.9]">
            Make your brand impossible to <span className="italic text-flare">ignore.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Tinatries combines clear strategy, distinctive creative, and performance-minded
            execution so ambitious brands get noticed by the right people and give them a reason to
            act.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <ButtonLink href="/portfolio" variant="ghost">
              Explore our work
            </ButtonLink>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3 border-t border-line pt-6 text-sm [&>div]:min-w-0">
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">
                Practice
              </dt>
              <dd className="mt-2 leading-snug">Five disciplines</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">
                Order
              </dt>
              <dd className="mt-2 leading-snug">Strategy first</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">
                Markets
              </dt>
              <dd className="mt-2 leading-snug">Ghana & abroad</dd>
            </div>
          </dl>
        </div>
        <div className="rise grid grid-cols-3 items-end gap-2 sm:gap-3" style={{ animationDelay: "120ms" }} aria-hidden>
          {panels.map((panel) => (
            <div key={panel.index} className={`flex flex-col justify-between p-3 sm:p-4 ${panel.className}`}>
              <span className="text-[0.65rem] font-semibold tracking-[0.18em]">{panel.index}</span>
              <span className="text-sm font-medium tracking-[-0.03em] sm:text-base">{panel.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
