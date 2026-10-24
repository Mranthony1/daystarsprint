"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { StudyCard } from "@/components/work/study-card";
import { disciplineLabels, projects, type Project } from "@/lib/projects";

const filters = ["all", "branding", "web", "seo", "social", "paid"] as const;

type Filter = (typeof filters)[number];

function isFilter(value: string | null): value is Exclude<Filter, "all"> {
  return value === "branding" || value === "web" || value === "seo" || value === "social" || value === "paid";
}

export function WorkBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const requested = params.get("discipline");
  const active: Filter = isFilter(requested) ? requested : "all";

  function setActive(filter: Filter) {
    const next = new URLSearchParams(params.toString());
    if (filter === "all") next.delete("discipline");
    else next.set("discipline", filter);
    const query = next.toString();
    router.replace(query ? `/work?${query}` : "/work", { scroll: false });
  }

  const visible =
    active === "all" ? projects : projects.filter((project) => project.disciplines.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter studies">
        {filters.map((filter) => {
          const selected = active === filter;
          const label = filter === "all" ? "All" : disciplineLabels[filter as Project["disciplines"][number]];
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter)}
              className={`min-h-10 border px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
                selected ? "border-ink bg-ink text-sheet" : "border-line bg-transparent text-ink hover:border-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      {visible.length === 0 ? (
        <p className="mt-12 text-ink-soft">No studies in this discipline yet.</p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {visible.map((project) => (
            <StudyCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
