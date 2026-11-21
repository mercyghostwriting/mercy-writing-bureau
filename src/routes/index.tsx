import { PortfolioReel } from "@/components/site/PortfolioReel";
import { useEffect, useRef, useState } from "react";
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
                Books written
                <br />
                <em>in your voice.</em>
              </h1>
              <p>
                Bring me the book you’ve been meaning to write, the draft you’re ready to finish, or
                the work you want to share in another language.
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
            <HeroFilm />
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
      </main>
      <SiteFooter />
    </div>
  );
}

function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const clip = video.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const followPreference = () => {
      if (preference.matches) clip?.pause();
      else void clip?.play().catch(() => {});
    };
    followPreference();
    preference.addEventListener("change", followPreference);
    return () => preference.removeEventListener("change", followPreference);
  }, []);

  return (
    <div className="editorial-film">
      <video
        ref={video}
        src="/book-pages.mp4"
        poster="/book-pages.webp"
        preload="metadata"
        muted
        loop
        playsInline
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={() => {
          if (playing) video.current?.pause();
          else void video.current?.play().catch(() => {});
        }}
      >
        {playing ? "Pause video" : "Play video"}
      </button>
    </div>
  );
}
