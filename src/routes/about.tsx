import { createFileRoute, Link } from "@tanstack/react-router";
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
          <div className="about-spread">
            <div>
              <h1>Book Ghostwriter For Fiction, Nonfiction and Ebooks</h1>
              <p className="about-bio">
                Seven years in, and I still love the moment a client reads their finished book and
                says it sounds like them. That's the job. I ghostwrite fiction, nonfiction, memoirs,
                biographies, and ebooks, and handle book development, rewriting, editing, and
                proofreading for manuscripts that need polish. Clients and colleagues kept sending
                referrals my way, so I brought my work to Fiverr. Confidentiality is a given, your
                voice stays the priority, and deadlines are respected. Got a book idea sitting in
                your notes or a stalled draft? Message me and let's finish it.
              </p>
              <p className="mt-5">
                I’m also part of{" "}
                <a className="editorial-link" href="https://theintercontinentalatelier.org/">
                  The Intercontinental Atelier
                </a>
                .
              </p>
              <div className="editorial-actions">
                <Link to="/contact" className="bureau-button inline-flex">
                  Discuss your book ↗
                </Link>
                <Link to="/portfolio" className="editorial-link">
                  View my portfolio
                </Link>
              </div>
            </div>
            <img
              src="/mercy-about.webp"
              width={720}
              height={960}
              alt="Mercy, founder of The Wrting Bureau"
            />
          </div>

          <div className="mt-24 border-t border-border pt-14">
            <h2 className="font-display text-3xl">How I Work</h2>
            <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed"
                >
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
