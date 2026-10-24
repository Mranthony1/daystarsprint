import { Container } from "@/components/ui/container";

const principles = [
  {
    title: "Strategy before execution",
    text: "The offer and the audience are settled before a channel, a layout, or a media plan is chosen.",
  },
  {
    title: "Creativity with a commercial job",
    text: "The work should be distinctive and still make the business easier to understand and choose.",
  },
  {
    title: "One voice, several doors",
    text: "Search, social, ads, and the website are meetings with the same company, not separate costumes.",
  },
  {
    title: "Evidence, then the next move",
    text: "Decisions follow what the work shows. Vanity numbers are not presented as progress.",
  },
];

export function SignalSplit() {
  return (
    <section className="bg-signal text-cloud">
      <Container className="py-20 md:py-28">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cloud/70">
          Why Tinatries
        </p>
        <h2 className="mt-5 max-w-4xl text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92] text-cloud">
          Clear thinking, then the work that carries it.
        </h2>
        <ul className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {principles.map((item) => (
            <li key={item.title} className="border-t border-cloud/25 pt-5">
              <h3 className="text-2xl text-cloud">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cloud/75">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
