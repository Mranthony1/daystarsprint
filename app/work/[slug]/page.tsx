import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { StudyArt } from "@/components/work/study-art";
import { createMetadata } from "@/lib/metadata";
import { disciplineLabels, getNextProject, getProject, projects } from "@/lib/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Study" };
  return createMetadata({
    title: `${project.title} studio study`,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default function StudyPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<Container className="py-24 text-mute">Loading study…</Container>}>
      <StudyContent params={params} />
    </Suspense>
  );
}

async function StudyContent({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(project.slug);

  return (
    <>
      <header className="border-b border-line">
        <Container className="py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mute">
            <Link href="/work" className="hover:text-signal">
              Work
            </Link>
            <span aria-hidden> / </span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-signal">
            Studio study · {project.year}
          </p>
          <h1 className="mt-3 max-w-4xl text-[clamp(3rem,7vw,6.4rem)] leading-[0.9]">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft">{project.summary}</p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">Sector</dt>
              <dd className="mt-1">{project.sector}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">Disciplines</dt>
              <dd className="mt-1">
                {project.disciplines.map((item, index) => (
                  <span key={item}>
                    {index > 0 ? ", " : null}
                    <Link href={`/services/${item}`} className="underline decoration-line underline-offset-4 hover:decoration-signal">
                      {disciplineLabels[item]}
                    </Link>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Container>
      </header>
      <div className="border-b border-line">
        <div className="min-h-[420px]">
          <StudyArt slug={project.slug} />
        </div>
      </div>
      <Container className="py-8">
        <p className="border border-signal/30 bg-sheet px-5 py-4 text-sm leading-relaxed text-ink-soft">
          This is a studio study: a self-initiated concept used to show how the studio thinks. It is
          not a client project, and it is not a result.
        </p>
      </Container>
      <section className="border-b border-line">
        <Container className="grid gap-12 py-12 md:grid-cols-2 md:py-16">
          <div>
            <Kicker>The tension</Kicker>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{project.challenge}</p>
          </div>
          <div>
            <Kicker>The response</Kicker>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{project.response}</p>
          </div>
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="py-12 md:py-16">
          <Kicker>What the study made</Kicker>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {project.made.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-lg leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section>
        <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mute">Next study</p>
            <Link href={`/work/${next.slug}`} className="mt-3 block font-display text-4xl hover:text-signal">
              {next.title}
            </Link>
          </div>
          <ButtonLink href="/contact">Start a brief</ButtonLink>
        </Container>
      </section>
    </>
  );
}
