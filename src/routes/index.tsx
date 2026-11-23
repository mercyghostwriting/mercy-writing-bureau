import { faqs } from "@/data/content";
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

const reasons = [
  [
    "Your voice guides the draft",
    "I work from the way you speak, the words you choose, and the details you notice. A sample chapter gives us a chance to fine-tune the voice early.",
  ],
  [
    "We find the shape of the book first",
    "For a new manuscript, I help you decide what belongs in the book, what readers need to know first, and how each chapter moves the story or argument forward.",
  ],
  [
    "You can start with a smaller piece",
    "If you’re still figuring out the direction, we can start with an outline, a sample chapter, or a review of your draft before agreeing on the full manuscript.",
  ],
  [
    "You see the work as it develops",
    "We agree on checkpoints before drafting begins. You can give feedback while the book is taking shape, when changes are easier to make.",
  ],
  [
    "Sensitive material stays private",
    "Your interviews, notes, and drafts are confidential. If you’d like an NDA in place before sharing details, I can arrange that.",
  ],
  [
    "The edit fits the draft",
    "A draft with structural problems needs different work from one that’s ready for a final proofread. I’ll explain what I see and what each stage would cover.",
  ],
  [
    "We plan for the handover",
    "We agree on the files you’ll receive and when they’re due. If you need print or ebook formatting, we can include that in the scope from the start.",
  ],
] as const;

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
          <div className="service-essays">
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
        <section className="editorial-wrap client-reviews" aria-labelledby="client-reviews-title">
          <div>
            <p className="eyebrow">Client testimonials</p>
            <h2 id="client-reviews-title">Hear it from our authors</h2>
            <p className="mt-5 font-display text-2xl">Kathryn Zwart · Gothic personal memoir</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Choosing someone to work on your book can feel especially personal when the story is
              your own. Kathryn talks about her experience working with me on a gothic personal
              memoir.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you’re deciding whether to bring someone into your project, hear how another author
              describes the experience. Then think about what would make you comfortable sharing
              your own work: how you’d like to give feedback, which parts of the story you want to
              handle carefully, and where you’d welcome a second perspective.
            </p>
            <Link className="bureau-button mt-7 inline-flex" to="/testimonials">
              See all client testimonials ↗
            </Link>
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
        <section className="editorial-wrap why-bureau" aria-labelledby="why-bureau-title">
          <div className="why-bureau-lead">
            <img
              src="/mercy-about.webp"
              alt="Mercy, founder of The Writing Bureau"
              width={720}
              height={960}
              loading="lazy"
            />
            <div>
              <p className="eyebrow">Why The Writing Bureau</p>
              <h2 id="why-bureau-title">You can bring the book at any stage.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A notebook, a folder of recordings, and a full manuscript all call for different
                kinds of help. We’ll start with what you have and agree on what you need from me.
              </p>
              <Link to="/contact" className="editorial-link mt-5 inline-block">
                Tell me where you’re at ↗
              </Link>
            </div>
          </div>
          <div className="why-bureau-points">
            {reasons.map(([title, detail]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="faq" className="editorial-wrap homepage-faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Questions authors ask before we begin</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl">
                  {q}
                  <span aria-hidden="true" className="text-accent group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          <Link to="/contact" className="editorial-link mt-6 inline-block">
            Ask about your project ↗
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
