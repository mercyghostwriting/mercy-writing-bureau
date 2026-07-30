import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg.asset.json";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { ContactForm } from "@/components/site/ContactForm";
import { benefits, faqs, processSteps, services, testimonials, trustBar } from "@/data/content";

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
          name: "The Ghostwriting Studio",
          description:
            "Professional book ghostwriting, developmental editing and publishing support for fiction and nonfiction authors.",
          serviceType: "Ghostwriting and book editing services",
        }),
      },
    ],
  }),
});

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 lg:px-8 lg:py-28 ${className}`}>
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
                  to="/"
                  hash="contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
                >
                  Discuss Your Book
                </Link>
                <Link
                  to="/"
                  hash="portfolio"
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
                  src={portrait.url}
                  alt="Portrait of the professional ghostwriter behind The Ghostwriting Studio"
                  width={810}
                  height={1080}
                  className="h-full w-full object-cover mix-blend-luminosity opacity-95"
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

        {/* ABOUT */}
        <Section id="about">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative">
              <div className="overflow-hidden border border-border bg-secondary/40 p-3">
                <img
                  src={portrait.url}
                  alt="The ghostwriter, photographed in a studio setting"
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
                  and produce a polished manuscript that sounds unmistakably like them. Nothing is
                  outsourced to a template and nothing leaves my desk before it reads well aloud.
                </p>
                <p>
                  My experience spans both fiction and nonfiction ghostwriting — business and
                  leadership books, memoir and autobiography, personal development, mystery,
                  thriller, romance, and other selected genres. Every project is treated as
                  confidential by default, and full ownership of the finished work is yours.
                </p>
                <p className="text-sm text-foreground/70 italic">
                  [Editable placeholder: add years of experience, number of completed books,
                  qualifications and any verified credentials here.]
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

        {/* SERVICES */}
        <Section id="services" className="border-y border-border bg-secondary/40">
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
            {services.map((s, i) => (
              <article key={s.title} className="group bg-background p-8 transition-colors hover:bg-card">
                <p className="font-display text-2xl text-accent/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <Link
                  to="/"
                  hash="contact"
                  className="mt-6 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.14em] uppercase transition-colors group-hover:text-accent"
                >
                  Learn More <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </Section>

        {/* PORTFOLIO */}
        <Section id="portfolio">
          <div className="max-w-2xl rule-line">
            <p className="eyebrow">Featured Portfolio</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Selected Client Projects
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Twenty project slots, ready for your verified client work. Confidential projects can
              be shown anonymously — genre, scope and deliverables without naming the author.
            </p>
          </div>
          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </Section>

        {/* PROCESS */}
        <Section id="process" className="border-y border-border bg-primary text-primary-foreground">
          <div className="max-w-2xl">
            <p className="eyebrow">Working Process</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Six Steps From Idea to Finished Manuscript
            </h2>
          </div>
          <ol className="mt-14 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <li key={step.title} className="bg-primary p-8">
                <p className="font-display text-4xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* WHY WORK WITH ME */}
        <Section>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rule-line">
              <p className="eyebrow">Why Work With Me</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                A Careful, Private, Collaborative Way of Working
              </h2>
            </div>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* TESTIMONIALS */}
        <Section id="testimonials" className="border-y border-border bg-secondary/40">
          <div className="max-w-2xl rule-line">
            <p className="eyebrow">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              In My Clients' Words
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rule-line">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Questions Authors Ask Before We Begin
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl">
                    {f.q}
                    <span
                      aria-hidden
                      className="mt-1 text-accent transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="border-t border-border bg-secondary/40">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rule-line">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Let's Turn Your Idea Into a Book
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Tell me about your book idea, current progress, preferred word count, and publishing
                goals. I'll review the details and recommend the best next step.
              </p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
