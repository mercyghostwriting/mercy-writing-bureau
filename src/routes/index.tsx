import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import deskPhoto from "@/assets/mercy-desk.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { services, trustBar } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Professional Ghostwriter | Book Ghostwriting & Editing Services" },
      {
        name: "description",
        content:
          "Professional ghostwriting services for authors, entrepreneurs and coaches. Fiction and nonfiction book ghostwriting, memoir writing, developmental editing and KDP publishing support.",
      },
      {
        property: "og:title",
        content: "Professional Ghostwriter | Book Ghostwriting & Editing Services",
      },
      {
        property: "og:description",
        content:
          "Your story, professionally written in your voice. Business books, memoirs, personal development and fiction ghostwriting, editing and publishing support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Mercy Writing Bureau",
          description:
            "Professional book ghostwriting, developmental editing and publishing support for fiction and nonfiction authors.",
          serviceType: "Ghostwriting and book editing services",
        }),
      },
    ],
  }),
});

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 py-20 lg:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border paper-grain">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
            <div>
              <p className="eyebrow">Ghostwriting · Editing · Publishing Support</p>
              <h1 className="mt-5 font-display text-[2.6rem] leading-[1.06] sm:text-6xl">
                Your Story.
                <br />
                Professionally Written
                <br />
                <span className="italic text-accent">in Your Voice.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
                I help authors, entrepreneurs, professionals, and storytellers transform their ideas
                into compelling, publish-ready books without losing the voice and vision that make
                their stories unique.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
                >
                  Discuss Your Book
                </Link>
                <Link
                  to="/portfolio"
                  className="rounded-sm border border-foreground/25 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  View My Portfolio
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-4 -left-4 hidden h-full w-full border border-accent/40 sm:block" />
              <div className="absolute -right-5 -bottom-5 hidden h-28 w-28 border-r border-b border-foreground/20 sm:block" />
              <div className="relative overflow-hidden bg-primary">
                <img
                  src={portrait}
                  alt="Portrait of the professional ghostwriter behind Mercy Writing Bureau"
                  width={810}
                  height={1080}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 font-display text-lg text-primary-foreground">
                  Written for you. Owned by you.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border bg-secondary/50">
            <ul className="mx-auto grid max-w-6xl gap-y-3 px-5 py-5 text-center text-[0.72rem] tracking-[0.16em] text-muted-foreground uppercase sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
              {trustBar.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT TEASER */}
        <Section>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative">
              <div className="overflow-hidden border border-border bg-secondary/40 p-3">
                <img
                  src={deskPhoto}
                  alt="The ghostwriter behind Mercy Writing Bureau at work on a client manuscript"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="rule-line">
              <p className="eyebrow">About</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Your Ideas Deserve the Right Words
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Most people who want to write a book already have the substance — the experience,
                  the story, the framework that works. What they don't have is the time, the
                  structure, or the practice of turning all of it into pages a reader can't put
                  down. That is where I come in.
                </p>
                <p>
                  I work closely with clients to develop the idea, shape a structure that carries
                  the reader from first page to last, capture the way they actually speak and think,
                  and produce a polished manuscript that sounds unmistakably like them.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-block rounded-sm border border-foreground/25 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
              >
                More About Me
              </Link>
            </div>
          </div>
        </Section>

        {/* SERVICES PREVIEW */}
        <Section className="border-y border-border bg-secondary/40">
          <div className="max-w-2xl rule-line">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Book Ghostwriting and Editing Services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Whether you need a complete manuscript written from scratch or a finished draft
              brought up to publishing standard, the work is scoped to your book, not a package.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <article key={s.title} className="bg-background p-8">
                <p className="font-display text-2xl text-accent/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </article>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-10 inline-block rounded-sm bg-primary px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
          >
            See All Nine Services
          </Link>
        </Section>

        {/* PORTFOLIO PREVIEW */}
        <Section>
          <div className="max-w-2xl rule-line">
            <p className="eyebrow">Featured Portfolio</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Selected Client Projects
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Confidential projects can be shown anonymously — genre, scope and deliverables without
              naming the author.
            </p>
          </div>
          <div className="mt-12">
            <PortfolioGrid limit={6} />
          </div>
          <Link
            to="/portfolio"
            className="mt-10 inline-block rounded-sm border border-foreground/25 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            View Full Portfolio
          </Link>
        </Section>

        {/* CTA */}
        <Section className="border-t border-border bg-primary text-primary-foreground">
          <div className="max-w-2xl">
            <p className="eyebrow">Next Step</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Let's Turn Your Idea Into a Book
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/70">
              Tell me about your book idea, current progress, preferred word count, and publishing
              goals. I'll review the details and recommend the best next step.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-sm bg-accent px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-accent-foreground uppercase transition-opacity hover:opacity-90"
              >
                Start Your Project
              </Link>
              <Link
                to="/process"
                className="rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
              >
                See How I Work
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
