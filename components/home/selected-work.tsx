import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { StudyCard } from "@/components/work/study-card";
import { projects } from "@/lib/projects";

export function SelectedWork() {
  const [lead, ...rest] = projects;
  const featured = rest.slice(0, 2);

  return (
    <section className="border-b border-line">
      <Container className="py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Kicker index="04">Selected studies</Kicker>
            <h2 className="mt-5 text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95]">
              Thinking you can look at.
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              Studio studies — self-initiated concepts, shown as thinking. They are not client
              projects and they are not results.
            </p>
          </div>
          <Link
            href="/work"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-signal hover:text-ink"
          >
            All studies
          </Link>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <StudyCard project={lead} featured />
          <div className="grid gap-10">
            {featured.map((project) => (
              <StudyCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
