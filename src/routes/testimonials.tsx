import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import seatedPhoto from "@/assets/mercy-seated.jpg";
import { benefits, testimonials } from "@/data/content";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Client Testimonials | Mercy Writing Bureau" },
      {
        name: "description",
        content:
          "What authors, entrepreneurs and coaches say about working with Mercy Writing Bureau on their book projects.",
      },
      { property: "og:title", content: "Client Testimonials" },
      {
        property: "og:description",
        content: "In my clients' words — feedback from authors and business owners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Testimonials"
      title="In My Clients' Words"
      intro="Only verified client feedback appears here. Placeholders are shown until permission is confirmed."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="flex flex-col border border-border bg-card p-8">
            <blockquote className="flex-1 font-display text-xl leading-snug text-foreground/85">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm text-muted-foreground">
                {t.initials}
              </span>
              <span className="text-sm">
                <span className="block text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.projectType}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-20 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="overflow-hidden border border-border bg-secondary/40 p-3">
            <img
              src={seatedPhoto}
              alt="The ghostwriter behind Mercy Writing Bureau"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="rule-line">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Why Work With Me</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed">
                <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-9 inline-block rounded-sm border border-foreground/25 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Discuss Your Book
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
