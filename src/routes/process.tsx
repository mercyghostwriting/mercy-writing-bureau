import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { processSteps } from "@/data/content";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "My Ghostwriting Process | Six Steps to a Finished Book" },
      {
        name: "description",
        content:
          "From discovery brief and research to outline, sample chapter approval, milestone drafting and final publishing-ready delivery — how a book gets written.",
      },
      { property: "og:title", content: "My Ghostwriting Process" },
      {
        property: "og:description",
        content: "Six clear steps from first conversation to publishing-ready manuscript.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
});

function ProcessPage() {
  return (
    <PageShell
      eyebrow="Working Process"
      title="Six Steps From Idea to Finished Manuscript"
      intro="You review and approve at every stage, so there are no surprises at the end."
    >
      <ol className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, i) => (
          <li key={step.title} className="bg-background p-8">
            <p className="font-display text-4xl text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 font-display text-2xl">{step.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
      <Link
        to="/contact"
        className="mt-14 inline-block rounded-sm bg-primary px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
      >
        Start With a Discovery Call
      </Link>
    </PageShell>
  );
}
