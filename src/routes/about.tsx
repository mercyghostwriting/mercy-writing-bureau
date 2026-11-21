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
              <div className="about-bio space-y-4">
                <p>
                  Seven years in, and I still love the moment a client reads their finished book and
                  says it sounds like them. That’s the job. I’m Mercy, the founder of The Wrting
                  Bureau, where I help authors turn ideas, interviews, and unfinished drafts into
                  books they’re proud to put their names on.
                </p>
                <p>
                  I ghostwrite fiction, nonfiction, memoirs, biographies, business books, and
                  ebooks. In a memoir, my work might begin with sorting through years of memories to
                  find the story that connects them. In a business book, it might mean turning years
                  of experience into chapters a reader can use. For fiction, I pay particular
                  attention to what the characters want, how the tension builds, and whether each
                  scene earns its place.
                </p>
                <p>
                  You can bring me a stack of notes, voice recordings, a chapter outline, or a draft
                  that’s lost its direction. I start with written questions about your readers and
                  what you want them to take from the book. For a full manuscript, we can agree on
                  the chapter plan and review a sample chapter before I draft the rest. That gives
                  us a chance to get the voice right while changes are still easy to make.
                </p>
                <p>
                  I also take on book development, rewriting, editing, and proofreading. If your
                  manuscript needs structural work, I look at how the chapters fit together and
                  where readers might lose the thread. If the structure is already sound, I can
                  focus on the sentences, consistency, and final checks. I also help prepare books
                  for print and ebook publication.
                </p>
                <p>
                  Referrals from clients and colleagues brought me to Fiverr, and I work
                  independently through The Wrting Bureau and collaborate with the creative team at{" "}
                  <a className="editorial-link" href="https://theintercontinentalatelier.org/">
                    The Intercontinental Atelier
                  </a>
                  . I keep client material confidential, agree on deadlines before work begins, and
                  share drafts at milestones so you have a say as the book takes shape.
                </p>
                <p>
                  If your book is still sitting in your notes or you’ve reached a point where you
                  can’t see what the draft needs, tell me where you are. We can work out what it’ll
                  take to finish it.
                </p>
              </div>
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
