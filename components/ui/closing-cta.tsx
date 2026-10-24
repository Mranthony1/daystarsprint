import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

export function ClosingCta({
  title = "Tell us what should be unmistakable.",
  body = "A short brief is enough. The studio will say so if the work is not a fit.",
}: {
  title?: string;
  body?: string;
}) {
  const [lead, accent] = title.includes("unmistakable")
    ? [title.replace("unmistakable.", "").trim(), "unmistakable."]
    : [title, ""];

  return (
    <section className="bg-ink text-bone">
      <Container className="py-20 md:py-28">
        <Kicker tone="light">Start a brief</Kicker>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,6.5vw,5.8rem)] leading-[0.9] text-bone">
          {accent ? (
            <>
              {lead} <span className="italic text-flare">{accent}</span>
            </>
          ) : (
            title
          )}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-bone/75">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Start a brief</ButtonLink>
          <ButtonLink href="/approach" variant="ghostLight">
            Read the approach
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
