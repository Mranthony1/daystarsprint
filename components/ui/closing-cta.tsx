import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

export function ClosingCta({
  title = "Your next chapter deserves better marketing.",
  body = "Tell us what you are building. The right strategy, creative work, and digital execution can move it forward.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-cloud">
      <Container className="py-20 md:py-28">
        <Kicker tone="light">Start a project</Kicker>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] text-cloud">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-cloud/75">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Start a project</ButtonLink>
          <ButtonLink href="/portfolio" variant="ghostLight">
            Explore our work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
