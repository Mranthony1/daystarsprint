import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { faqs } from "@/lib/studio";

export function FaqList() {
  return (
    <section className="border-b border-line">
      <Container className="grid gap-10 py-20 md:grid-cols-[0.7fr_1.3fr] md:py-28">
        <div>
          <Kicker index="08">Questions</Kicker>
          <h2 className="mt-5 text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95]">Before you write.</h2>
        </div>
        <div className="border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-xl leading-snug md:text-2xl">
                {faq.question}
                <span
                  aria-hidden
                  className="text-2xl font-normal text-signal transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-ink-soft">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
