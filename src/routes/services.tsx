import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { services } from "@/data/content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Writing, Editing & Translation Services | The Wrting Bureau" },
      {
        name: "description",
        content:
          "Book ghostwriting, memoir writing, developmental editing, proofreading and KDP formatting, and translation for manuscripts and documents.",
      },
      { property: "og:title", content: "Writing, Editing & Translation Services" },
      {
        property: "og:description",
        content: "Book writing, editing, publishing support and translation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Book Writing, Editing & Translation"
      intro="Whether you need a complete manuscript written from scratch or a finished draft brought up to publishing standard, the work is scoped to your book, not a package."
    >
      <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group bg-background p-8 transition-colors hover:bg-card"
          >
            <h2 className="mt-3 font-display text-2xl leading-snug">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            <Link
              to="/service/$serviceId"
              params={{ serviceId: s.id }}
              className="mt-6 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.14em] uppercase transition-colors group-hover:text-accent"
            >
              View service <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>

      <section
        id="translation"
        className="mt-12 scroll-mt-28 border border-border bg-secondary p-8 sm:p-12"
      >
        <h2 className="font-display text-4xl">Manuscript and document translation</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Tell me what you’re translating, the source and target languages, the approximate word
          count, and your deadline. I’ll confirm availability and give you a quote based on the
          material.
        </p>
        <Link
          to="/service/$serviceId"
          params={{ serviceId: "translation" }}
          className="bureau-button mt-6 inline-flex"
        >
          View translation services ↗
        </Link>
      </section>

      <Link to="/contact" className="bureau-button mt-10 inline-flex">
        Discuss your project ↗
      </Link>
    </PageShell>
  );
}
