import Link from "next/link";
import { StudyArt } from "@/components/work/study-art";
import { disciplineLabels, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function StudyCard({
  project,
  featured = false,
  compact = false,
}: {
  project: Project;
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <article className={cn(featured && "lg:row-span-2")}>
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div
          className={cn(
            "overflow-hidden border border-line",
            featured ? "h-[460px]" : compact ? "h-[200px]" : "h-[300px]",
          )}
        >
          <div className="art-zoom h-full">
            <StudyArt slug={project.slug} />
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-mute">
              {project.sector}
              <span aria-hidden> · </span>
              Studio concept
            </p>
            <h3 className={cn("mt-2 leading-none", compact ? "text-3xl" : "text-4xl")}>{project.title}</h3>
          </div>
          <span aria-hidden className="mt-6 text-xl text-signal">
            →
          </span>
        </div>
        {compact ? null : (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{project.summary}</p>
        )}
        <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">
          {project.disciplines.map((item) => disciplineLabels[item]).join("  /  ")}
        </p>
      </Link>
    </article>
  );
}
