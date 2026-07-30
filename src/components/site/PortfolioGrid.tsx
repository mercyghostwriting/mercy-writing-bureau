import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FILTERS, projects } from "@/data/content";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 text-xs tracking-wide transition-colors ${
              filter === f
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="flex aspect-4/5 items-center justify-center border-b border-border bg-secondary/60 paper-grain">
              {p.coverImage ? (
                <img
                  src={p.coverImage}
                  alt={`Book cover for ${p.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="px-6 text-center">
                  <p className="eyebrow">{p.internalLabel}</p>
                  <p className="mt-3 font-display text-xl text-muted-foreground">
                    Add approved cover image
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[0.7rem] tracking-[0.18em] text-accent uppercase">{p.category}</p>
              <h3 className="mt-2 font-display text-xl leading-snug">
                {p.confidential ? "Confidential Project" : p.title}
              </h3>
              <dl className="mt-3 space-y-1 text-xs text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground/70">Service:</dt>
                  <dd>{p.service}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground/70">Word count:</dt>
                  <dd>{p.wordCount}</dd>
                </div>
              </dl>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <Link
                to="/portfolio/$projectId"
                params={{ projectId: p.id }}
                className="mt-6 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.14em] text-foreground uppercase transition-colors group-hover:text-accent"
              >
                View Case Study
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
