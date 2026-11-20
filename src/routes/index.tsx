import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import deskPhoto from "@/assets/mercy-desk.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BookOpen, BookText, FilePenLine, Layers, PenLine, Type, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "The Wrting Bureau | Book Ghostwriting & Editing" },
      {
        name: "description",
        content:
          "Professional ghostwriting services for authors, entrepreneurs and coaches. Fiction and nonfiction book ghostwriting, memoir writing, developmental editing and KDP publishing support.",
      },
      {
        property: "og:title",
        content: "The Wrting Bureau | Book Ghostwriting & Editing",
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
  { title: "Book ghostwriting", detail: "For an idea, notes, or a partial draft.", icon: PenLine },
  {
    title: "Memoir writing",
    detail: "For the life story you want to put on paper.",
    icon: BookOpen,
  },
  { title: "Business books", detail: "For expertise readers can put to work.", icon: BookText },
  { title: "Book outlining", detail: "For a chapter plan before you start writing.", icon: Layers },
  {
    title: "Manuscript editing",
    detail: "For a draft that needs structure or polish.",
    icon: FilePenLine,
  },
  { title: "KDP formatting", detail: "For print and ebook files ready to upload.", icon: Type },
];

function Home() {
  return (
    <div className="bureau-home">
      <SiteNav />
      <main>
        <section className="bureau-hero">
          <div className="bureau-wrap bureau-hero-grid">
            <div className="bureau-intro">
              <h1>
                Let’s write the book you’ve been <em>thinking about.</em>
              </h1>
              <p>
                I’m Mercy, a book ghostwriter and editor. Bring me your idea, notes, or draft, and
                we’ll figure out what your book needs next.
              </p>
              <div className="bureau-actions">
                <Link className="bureau-button" to="/contact">
                  Discuss your book <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
                <Link className="bureau-text-link" to="/portfolio">
                  See my work
                </Link>
              </div>
            </div>
            <div className="bureau-portrait">
              <img
                src={portrait}
                width={810}
                height={1080}
                alt="Mercy, founder of The Wrting Bureau"
                fetchPriority="high"
              />
              <span>Mercy · Ghostwriter &amp; editor</span>
            </div>
          </div>
        </section>

        <section className="bureau-lavender" aria-labelledby="bureau-services">
          <div className="bureau-wrap">
            <div className="bureau-assurances">
              <span>Confidential collaboration</span>
              <span>Your voice throughout</span>
              <span>You own the manuscript</span>
            </div>
            <div className="bureau-service-panel">
              <h2 id="bureau-services">What does your book need?</h2>
              <div className="bureau-services">
                {offers.map(({ title, detail, icon: Icon }) => (
                  <Link to="/services" key={title}>
                    <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bureau-wrap bureau-work">
          <div className="bureau-section-heading">
            <h2>Selected work</h2>
            <Link className="bureau-text-link" to="/portfolio">
              View portfolio
            </Link>
          </div>
          <div className="bureau-cases">
            <Link to="/portfolio/$projectId" params={{ projectId: "project-01" }}>
              <p>Manuscript development &amp; publishing preparation</p>
              <h3>The Numbers Game!</h3>
              <span>
                Read case study <ArrowUpRight aria-hidden="true" size={16} />
              </span>
            </Link>
            <Link to="/portfolio/$projectId" params={{ projectId: "project-02" }}>
              <p>Nonfiction editing &amp; rewriting</p>
              <h3>From Being Broke to Building Wealth</h3>
              <span>
                Read case study <ArrowUpRight aria-hidden="true" size={16} />
              </span>
            </Link>
          </div>
        </section>

        <section className="bureau-wrap bureau-about">
          <img src={deskPhoto} alt="Mercy at her writing desk" loading="lazy" />
          <div>
            <h2>From first conversation to final draft</h2>
            <p>
              We’ll start with written questions about your book and the people you’re writing for.
              Then we’ll agree on the scope, timeline, and what you’ll review along the way.
            </p>
            <Link className="bureau-text-link" to="/process">
              How I work
            </Link>
          </div>
        </section>

        <section className="bureau-wrap bureau-bottom">
          <div>
            <h2>Tell me about your book</h2>
            <p>A few lines about where you are and what you need are enough to start.</p>
          </div>
          <Link className="bureau-button" to="/contact">
            Discuss your book <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
