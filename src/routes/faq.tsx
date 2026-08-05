import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { faqs } from "@/data/content";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Ghostwriting FAQ | Copyright, Confidentiality & Timelines" },
      {
        name: "description",
        content:
          "Answers to common questions about book ghostwriting: copyright ownership, NDAs and confidentiality, process, revisions, timelines and milestone payments.",
      },
      { property: "og:title", content: "Ghostwriting FAQ" },
      {
        property: "og:description",
        content: "Questions authors ask before we begin — ownership, privacy, process and pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Questions Authors Ask Before We Begin"
      intro="If your question isn't answered here, send it over — I answer every enquiry personally."
    >
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl">
              {f.q}
              <span aria-hidden className="mt-1 text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
      <Link
        to="/contact"
        className="mt-12 inline-block rounded-sm bg-primary px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
      >
        Ask Your Question
      </Link>
    </PageShell>
  );
}
