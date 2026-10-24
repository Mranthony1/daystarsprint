import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { PrintPlate } from "@/components/home/print-plate";

export function Hero() {
  return (
    <section className="relative border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(720px 380px at 88% 18%, rgba(226,59,42,0.09), transparent 62%), radial-gradient(640px 360px at 8% 90%, rgba(198,146,46,0.14), transparent 60%)",
        }}
      />
      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
        <div className="rise">
          <Kicker>Premium digital marketing & creative</Kicker>
          <h1 className="mt-6 text-[clamp(2.65rem,7.4vw,7.15rem)] leading-[0.86]">
            Leave a mark
            <br />
            they can’t{" "}
            <br className="sm:hidden" />
            <span className="italic text-flare">unsee.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Daystarsprint is a multidisciplinary studio for companies that want a sharper brand, a
            website worthy of it, and marketing that carries the same message.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Start a brief</ButtonLink>
            <ButtonLink href="/work" variant="ghost">
              View studio studies
            </ButtonLink>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3 border-t border-line pt-6 text-sm [&>div]:min-w-0">
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">
                Markets
              </dt>
              <dd className="mt-2 leading-snug">Ghana & abroad</dd>
            </div>
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
          </dl>
        </div>
        <div className="rise" style={{ animationDelay: "120ms" }}>
          <PrintPlate />
        </div>
      </Container>
    </section>
  );
}
