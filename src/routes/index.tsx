import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "The Wrting Bureau | Book Writing, Editing & Translation" },
      {
        name: "description",
        content:
          "Professional ghostwriting services for authors, entrepreneurs and coaches. Fiction and nonfiction book ghostwriting, memoir writing, developmental editing and KDP publishing support.",
      },
      {
        property: "og:title",
        content: "The Wrting Bureau | Book Writing, Editing & Translation",
      },
      {
        property: "og:description",
        content:
          "Your story, professionally written in your voice. Business books, memoirs, personal development and fiction ghostwriting, editing and publishing support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thewrtingbureau.vercel.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://thewrtingbureau.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "The Wrting Bureau",
          description:
            "Professional book ghostwriting, developmental editing and publishing support for fiction and nonfiction authors.",
          serviceType: "Ghostwriting and book editing services",
        }),
      },
    ],
  }),
});

const offers = [
  [
    "Book writing",
    "Build a memoir, novel, or nonfiction book from interviews, notes, or an outline.",
  ],
  [
    "Editing & publishing",
    "Strengthen your draft, polish the prose, or prepare the manuscript for print and ebook.",
  ],
  [
    "Translation",
    "Bring a manuscript or document to readers in another language while keeping its meaning, tone, and intent.",
  ],
];

function Home() {
  return (
    <div className="editorial-home">
      <SiteNav />
      <main>
        <section className="editorial-hero">
          <div className="editorial-wrap editorial-hero-grid">
            <div className="editorial-hero-copy">
              <p className="editorial-label">Book writing · Editing · Translation</p>
              <h1>
                Your words.
                <br />
                <em>A wider world.</em>
              </h1>
              <p>
                Bring me the book you’ve been meaning to write, the draft you’re ready to finish, or
                the work you want to share in another language.
              </p>
              <div className="editorial-actions">
                <Link className="bureau-button" to="/contact">
                  Discuss your project <span aria-hidden="true">↗</span>
                </Link>
                <Link className="editorial-link" to="/portfolio">
                  See selected work
                </Link>
              </div>
            </div>
            <div className="editorial-books" aria-hidden="true">
              <div className="editorial-book-back" />
              <div className="editorial-book">
                <div className="editorial-cover">
                  <span>THE WRTING BUREAU</span>
                  <strong>
                    From
                    <br />
                    first word
                    <br />
                    <i>to final page.</i>
                  </strong>
                  <span>WRITING / EDITING / TRANSLATION</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="editorial-work">
          <div className="editorial-wrap">
            <div className="editorial-section-head">
              <h2>Selected book projects</h2>
              <Link className="editorial-link" to="/portfolio">
                View portfolio ↗
              </Link>
            </div>
            <div className="editorial-grid editorial-cases">
              <Link to="/portfolio/$projectId" params={{ projectId: "project-01" }}>
                <p>Manuscript development &amp; publishing preparation</p>
                <h3>The Numbers Game!</h3>
                <span>Read case study ↗</span>
              </Link>
              <Link to="/portfolio/$projectId" params={{ projectId: "project-02" }}>
                <p>Nonfiction editing &amp; rewriting</p>
                <h3>From Being Broke to Building Wealth</h3>
                <span>Read case study ↗</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="editorial-wrap editorial-services" aria-labelledby="service-heading">
          <h2 id="service-heading">Where are you in the process?</h2>
          <div className="editorial-grid">
            {offers.map(([title, detail]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
                {title === "Translation" ? (
                  <Link
                    className="editorial-link"
                    to="/service/$serviceId"
                    params={{ serviceId: "translation" }}
                  >
                    Explore translation ↗
                  </Link>
                ) : (
                  <Link className="editorial-link" to="/services">
                    Explore {title.toLowerCase()} ↗
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
        <section className="editorial-wrap editorial-about">
          <img
            src="/mercy-about.webp"
            width={720}
            height={960}
            alt="Mercy, founder of The Wrting Bureau"
            loading="lazy"
          />
          <div>
            <h2>Meet Mercy</h2>
            <p>
              I’ll work with you directly. We start with a written conversation about what you have,
              who it’s for, and what you need delivered. You’ll know the scope and timeline before
              work begins.
            </p>
            <Link className="editorial-link" to="/about">
              More about Mercy ↗
            </Link>
          </div>
        </section>
        <section className="editorial-close">
          <div className="editorial-wrap">
            <h2>Tell me what you’re working on.</h2>
            <Link className="bureau-button" to="/contact">
              Discuss your project ↗
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
