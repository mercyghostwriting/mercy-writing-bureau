import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getProject } from "@/data/content";

export const Route = createFileRoute("/portfolio/$projectId")({
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl">Project not found</h1>
        <p className="mt-4 text-muted-foreground">
          That case study doesn't exist or has been removed.
        </p>
        <Link to="/portfolio" className="mt-8 inline-block text-accent underline underline-offset-4">
          Back to portfolio
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="font-display text-3xl">This case study didn't load</h1>
      <Link to="/" className="mt-6 inline-block text-accent underline">
        Go home
      </Link>
    </div>
  ),
  head: ({ params }) => {
    const project = getProject(params.projectId);
    const title = project
      ? `${project.confidential ? "Confidential Project" : project.title} | Ghostwriting Case Study`
      : "Case Study | Professional Ghostwriter";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: project
            ? `${project.category} ghostwriting case study: scope, approach, and deliverables for ${project.internalLabel}.`
            : "Ghostwriting case study.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: "A look at the scope, approach, and deliverables behind a ghostwriting project.",
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${params.projectId}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.projectId}` }],
    };
  },
});

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border py-5">
      <h2 className="text-[0.7rem] tracking-[0.2em] text-accent uppercase">{label}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}

function CaseStudy() {
  const { projectId } = Route.useParams();
  const project = getProject(projectId);
  if (!project) throw notFound();

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/portfolio"
            className="text-[0.75rem] tracking-[0.16em] text-muted-foreground uppercase hover:text-accent"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex aspect-4/5 items-center justify-center border border-border bg-secondary/60 paper-grain">
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={`Book cover for ${project.title}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="px-6 text-center">
                    <p className="eyebrow">{project.internalLabel}</p>
                    <p className="mt-3 font-display text-xl text-muted-foreground">
                      Add approved cover image
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="eyebrow">{project.category}</p>
              <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                {project.confidential ? "Confidential Project" : project.title}
              </h1>
              {project.subtitle ? (
                <p className="mt-3 font-display text-xl text-muted-foreground italic">
                  {project.subtitle}
                </p>
              ) : null}
              <dl className="mt-6 grid gap-4 border-y border-border py-5 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    Genre
                  </dt>
                  <dd className="mt-1">{project.genre ?? project.category}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    Service
                  </dt>
                  <dd className="mt-1">{project.service}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    Length
                  </dt>
                  <dd className="mt-1">{project.wordCount}</dd>
                </div>
                {project.author ? (
                  <div>
                    <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                      Author
                    </dt>
                    <dd className="mt-1">{project.author}</dd>
                  </div>
                ) : null}
                {project.status ? (
                  <div>
                    <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                      Status
                    </dt>
                    <dd className="mt-1">{project.status}</dd>
                  </div>
                ) : null}
              </dl>


              <Row label="Project overview" value={project.overview} />
              <Row label="Client's objective" value={project.objective} />
              <Row label="Scope of work" value={project.scope} />
              <Row label="My contribution" value={project.contribution} />
              <Row label="Approach and writing process" value={project.approach} />
              <Row label="Final deliverables" value={project.deliverables} />
              {project.result ? <Row label="Result" value={project.result} /> : null}

              {project.testimonial ? (
                <figure className="mt-8 border-l-2 border-accent pl-6">
                  <blockquote className="font-display text-xl leading-snug">
                    “{project.testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    — {project.testimonial.author}
                  </figcaption>
                </figure>
              ) : null}

              <Link
                to="/contact"
                className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
              >
                Start a Similar Project
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
