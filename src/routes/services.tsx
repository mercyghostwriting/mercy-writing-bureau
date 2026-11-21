import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import deskPhoto from "@/assets/mercy-desk.jpg";
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
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.14em] uppercase transition-colors group-hover:text-accent"
            >
              Enquire <span aria-hidden>→</span>
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
          to="/contact"
          search={{ service: "translation" }}
          className="bureau-button mt-6 inline-flex"
        >
          Request a translation quote ↗
        </Link>
      </section>

      <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="rule-line">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Send me what you have — an idea, an outline, a half-finished draft — and I'll tell you
            honestly what the book needs and what it would take to get there.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
          >
            Discuss Your Book
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 hidden h-full w-full border border-accent/40 sm:block" />
          <div className="relative overflow-hidden border border-border bg-secondary/40 p-3">
            <img
              src={deskPhoto}
              alt="The ghostwriter behind The Wrting Bureau working at her desk"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
