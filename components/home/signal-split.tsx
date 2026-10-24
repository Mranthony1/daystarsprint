import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

const scraps = [
  { label: "Post it", className: "left-[8%] top-[18%] -rotate-6" },
  { label: "Boost", className: "left-[28%] top-[30%] rotate-3" },
  { label: "New logo?", className: "left-[12%] top-[48%] rotate-2" },
  { label: "#viral", className: "left-[40%] top-[16%] -rotate-2" },
  { label: "More ads", className: "left-[34%] top-[58%] rotate-6" },
  { label: "ASAP", className: "left-[18%] top-[72%] -rotate-3" },
];

export function SignalSplit() {
  return (
    <section className="border-b border-line">
      <Container className="pt-20 md:pt-28">
        <Kicker index="02">A clearer way to be seen</Kicker>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[0.95]">
            Attention is not the same as recognition.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            One side collects tactics. The other decides what the company is, then lets every
            channel repeat it. Volume is easy. A mark is the harder, more useful thing.
          </p>
        </div>
      </Container>
      <div className="mt-12 grid md:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden border-y border-line bg-bone-deep md:border-r-0">
          <div aria-hidden>
            {scraps.map((scrap) => (
              <span
                key={scrap.label}
                className={`absolute border border-ink/15 bg-sheet/80 px-3 py-2 text-sm uppercase tracking-[0.14em] text-ink/70 ${scrap.className}`}
              >
                {scrap.label}
              </span>
            ))}
          </div>
          <p className="absolute bottom-0 left-0 right-0 border-t border-ink/10 bg-bone-deep/90 px-6 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute">
            Louder, and still unclear
          </p>
        </div>
        <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-ink text-bone">
          <div className="px-6 pt-8 md:px-10 md:pt-12">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-bone/50">Signal</p>
            <p className="mt-6 max-w-sm font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.95] text-bone">
              A clear offer.
              <br />
              <span className="italic text-flare">In the right place.</span>
            </p>
          </div>
          <svg viewBox="0 0 200 80" className="mx-8 h-16 w-40" aria-hidden>
            <circle cx="28" cy="40" r="18" fill="none" stroke="#F4EFE6" strokeOpacity="0.4" />
            <path fill="#E23B2A" d="M28 22 31.2 36.2 46 40 31.2 43.8 28 58 24.8 43.8 10 40 24.8 36.2Z" />
            <line x1="52" y1="40" x2="190" y2="40" stroke="#F4EFE6" strokeOpacity="0.45" />
          </svg>
          <p className="border-t border-bone/15 px-6 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bone/70 md:px-10">
            Quieter, and unmistakable
          </p>
        </div>
      </div>
    </section>
  );
}
