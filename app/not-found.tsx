import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section>
      <Container className="py-28 md:py-40">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-signal">404</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(3rem,7vw,6rem)] leading-[0.9]">
          This page is off the sheet.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          The address may be old. The work is still here — start from the homepage, or go straight
          to a brief.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="ghost">
            Back home
          </ButtonLink>
          <ButtonLink href="/contact">Start a brief</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
