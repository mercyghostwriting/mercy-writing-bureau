import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Ghostwriting Portfolio | Client Book Projects" },
      {
        name: "description",
        content:
          "Selected ghostwriting and editing projects across business, memoir, personal development, fiction, mystery and thriller — filterable by category.",
      },
      { property: "og:title", content: "Ghostwriting Portfolio" },
      {
        property: "og:description",
        content: "Selected client book projects across fiction and nonfiction categories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Selected Client Projects"
      intro="Confidential projects are shown anonymously — genre, scope and deliverables without naming the author. Filter by category to see the work closest to your book."
    >
      <PortfolioGrid />
    </PageShell>
  );
}
