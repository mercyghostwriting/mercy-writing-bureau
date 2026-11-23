import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { services } from "@/data/content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Writing, Editing & Translation Services | The Wrting Bureau" },
      {
        name: "description",
        content:
          "Book ghostwriting, memoir writing, developmental editing, proofreading and KDP formatting, and translation for manuscripts and documents.",
      },
      { property: "og:title", content: "Writing, Editing & Translation Services" },
      {
        property: "og:description",
        content: "Book writing, editing, publishing support and translation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const serviceDetails: Record<string, string> = {
  nonfiction:
    "Bring your notes, recordings, or research. We’ll identify the reader, organize your ideas into chapters, and develop the draft around what readers need to understand.",
  "business-books":
    "Use examples from your own work to explain how your approach works in practice. We’ll build the book around the decisions or problems you can help readers with.",
  memoir:
    "We can start with interviews, journals, or fragments of a draft. Together we’ll decide which memories belong in the book and how to handle sensitive details.",
  fiction:
    "Bring a premise, outline, or partial draft. We’ll agree on voice, point of view, and character arcs before drafting in milestones.",
  thrillers:
    "I’ll track what readers know, when they learn it, and whether the clues support the reveal.",
  "book-outlines":
    "You’ll get a chapter plan you can draft from, with the purpose of each chapter and notes on where the story or argument needs more development.",
  "developmental-editing":
    "I’ll identify where the structure, pacing, or argument needs work and give you a sequence for tackling revisions.",
  proofreading:
    "I’ll review the prose for clarity and consistency. For a draft ready for its final pass, proofreading focuses on errors and inconsistencies.",
  "kdp-formatting":
    "Tell me your trim size and intended formats so we can agree on the print and ebook files you need.",
};

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Book Writing, Editing & Translation"
      intro="Start with a book idea, a draft that needs editing, or a manuscript that’s ready for formatting or translation. Choose the service that fits the work in front of you."
    >
      <div className="service-essays">
        {services.map((s) => (
          <article key={s.title} className="group">
            <h2 className="mt-3 font-display text-2xl leading-snug">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {s.description} {serviceDetails[s.id]}
            </p>
            <Link
              to="/service/$serviceId"
              params={{ serviceId: s.id }}
              className="mt-6 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.14em] uppercase transition-colors group-hover:text-accent"
            >
              Explore {s.title.toLowerCase()}
            </Link>
          </article>
        ))}
      </div>

      <section id="translation" className="mt-12 scroll-mt-28 border-t border-border pt-8">
        <h2 className="font-display text-4xl">Manuscript and document translation</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Tell me what you’re translating, the source and target languages, the approximate word
          count, and your deadline. I’ll confirm availability and give you a quote based on the
          material.
        </p>
        <Link
          to="/service/$serviceId"
          params={{ serviceId: "translation" }}
          className="bureau-button mt-6 inline-flex"
        >
          View translation services ↗
        </Link>
      </section>

      <Link to="/contact" className="bureau-button mt-10 inline-flex">
        Discuss your project ↗
      </Link>
    </PageShell>
  );
}
