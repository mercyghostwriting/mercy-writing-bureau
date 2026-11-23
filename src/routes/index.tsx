import { PortfolioReel } from "@/components/site/PortfolioReel";
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
          <div className="editorial-hero-grid portrait-hero-grid">
            <div className="editorial-hero-copy">
              <p className="editorial-label">Hi, I’m Mercy.</p>
              <h1>
                I write books that <em>sound like you.</em>
              </h1>
              <p>
                I’m a ghostwriter, editor, and founder of The Wrting Bureau. For seven years, I’ve
                helped authors turn notes, interviews, and unfinished drafts into books they’re
                proud to put their names on.
              </p>
              <div className="editorial-actions">
                <Link className="bureau-button" to="/contact">
                  Discuss your project
                </Link>
                <Link className="editorial-link" to="/portfolio">
                  Browse the portfolio
                </Link>
              </div>
            </div>
            <figure className="mercy-hero-portrait">
              <img
                src="/mercy-hero.webp"
                width={800}
                height={1066}
                alt="Mercy wearing a white turtleneck and red glasses"
                fetchPriority="high"
              />
            </figure>
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
            <PortfolioReel />
          </div>
        </section>
        <section className="editorial-wrap editorial-services" aria-labelledby="service-heading">
          <h2 id="service-heading">Where are you in the process?</h2>
          <div className="editorial-grid service-tiles">
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
              <strong>Founder of The Wrting Bureau</strong>
            </p>
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
        <section className="editorial-wrap client-reviews" aria-labelledby="client-reviews-title">
          <div>
            <p className="eyebrow">Client testimonials</p>
            <h2 id="client-reviews-title">In their own words</h2>
            <p className="mt-5 text-muted-foreground">
              Hear one client share her experience working with me.
            </p>
          </div>
          <video
            controls
            playsInline
            preload="none"
            poster="/client-testimonial.webp"
            aria-label="Client video testimonial"
          >
            <source src="/client-testimonial.mp4" type="video/mp4" />
            <a href="/client-testimonial.mp4">Watch the client testimonial</a>
          </video>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
