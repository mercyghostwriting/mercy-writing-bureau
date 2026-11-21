import { Link } from "@tanstack/react-router";
import { projects } from "@/data/content";

const published = projects.filter((project) => !project.title.includes("[Add project title]"));

export function PortfolioGrid() {
  return (
    <div className="grid gap-10">
      {published.map((project) => (
        <article
          key={project.id}
          className="grid gap-7 border-t border-border py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-center sm:gap-12"
        >
          <div className="grid min-h-64 place-items-center bg-secondary p-7">
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={`Cover of ${project.title}`}
                className="max-h-64 w-auto"
                loading="lazy"
              />
            ) : (
              <div
                aria-hidden="true"
                className="grid aspect-[3/4] w-36 place-items-center border-4 border-double border-primary-foreground/60 bg-primary p-3 text-center font-display text-lg text-primary-foreground shadow-lg"
              >
                {project.confidential ? "Confidential Project" : project.title}
              </div>
            )}
          </div>
          <div>
            <p className="eyebrow">{project.category}</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              {project.confidential ? "Confidential Project" : project.title}
            </h2>
            <p className="mt-3 font-semibold">{project.service}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>
            <Link
              to="/portfolio/$projectId"
              params={{ projectId: project.id }}
              className="editorial-link mt-5 inline-block text-primary"
            >
              Read case study ↗
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
