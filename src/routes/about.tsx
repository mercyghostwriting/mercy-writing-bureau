import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { benefits } from "@/data/content";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About the Ghostwriter | Fiction & Nonfiction Book Writer for Hire" },
      {
        name: "description",
        content:
          "Meet the professional ghostwriter behind the studio: how I develop ideas, capture your voice, and deliver publishing-ready manuscripts across fiction and nonfiction.",
      },
      { property: "og:title", content: "About the Ghostwriter" },
      {
        property: "og:description",
        content:
          "How I develop ideas, capture your voice, and deliver publishing-ready manuscripts across fiction and nonfiction.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="relative">
              <div className="absolute -top-4 -left-4 hidden h-full w-full border border-accent/40 sm:block" />
              <div className="relative overflow-hidden border border-border bg-secondary/40 p-3">
                <img
                  src={portrait}
                  alt="Portrait of the ghostwriter behind Mercy Writing Bureau"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="rule-line">
              <p className="eyebrow">About</p>
              <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Your Ideas Deserve the Right Words
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a professional ghostwriter working with authors, entrepreneurs, coaches, and
                  publishers who have something worth saying and want it written properly. My job is
                  to make the finished book sound like the best version of you — never like a
                  writer-for-hire passing through.
                </p>
                <p>
                  Every project starts with listening. I interview, read your notes, study your
                  audience, and learn your rhythms of speech before I write a line. From there we
                  build structure, approve a sample chapter, and move through drafting in milestones
                  you review as we go.
                </p>
                <p>
                  I write both fiction and nonfiction: business and leadership books, memoir and
                  autobiography, personal development, mystery, thriller, romance, and other
                  selected genres. I also take on developmental editing, proofreading, and KDP
                  formatting for authors who have already written their draft.
                </p>
                <p className="text-sm text-foreground/70 italic">
                  [Editable placeholder: add your background, training, years of experience,
                  completed book count, and any verified credentials or press mentions here.]
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
                >
                  Discuss Your Book
                </Link>
                <Link
                  to="/"
                  hash="portfolio"
                  className="rounded-sm border border-foreground/25 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  View My Portfolio
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-border pt-14">
            <h2 className="font-display text-3xl">How I Work</h2>
            <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
