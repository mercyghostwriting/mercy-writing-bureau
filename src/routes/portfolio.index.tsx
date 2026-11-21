import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Ghostwriting Portfolio | Client Book Projects" },
      {
        name: "description",
        content: "Read case studies on manuscript development, editing and publishing preparation.",
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
      title="Book Project Case Studies"
      intro="See what each manuscript needed, what I worked on, and what the author received."
    >
      <PortfolioGrid />
    </PageShell>
  );
}
