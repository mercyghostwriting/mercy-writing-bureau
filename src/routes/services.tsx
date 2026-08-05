import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import deskPhoto from "@/assets/mercy-desk.jpg";
import { services } from "@/data/content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Ghostwriting & Editing Services | Mercy Writing Bureau" },
      {
        name: "description",
        content:
          "Book ghostwriting, memoir writing, developmental editing, proofreading and KDP formatting — nine services scoped to your book, not a package.",
      },
      { property: "og:title", content: "Ghostwriting & Editing Services" },
      {
        property: "og:description",
        content:
          "Nine ghostwriting, editing and publishing services for fiction and nonfiction authors.",
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
      title="Book Ghostwriting and Editing Services"
      intro="Whether you need a complete manuscript written from scratch or a finished draft brought up to publishing standard, the work is scoped to your book, not a package."
    >
      <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article key={s.title} className="group bg-background p-8 transition-colors hover:bg-card">
            <p className="font-display text-2xl text-accent/70">{String(i + 1).padStart(2, "0")}</p>
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
              alt="The ghostwriter behind Mercy Writing Bureau working at her desk"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
