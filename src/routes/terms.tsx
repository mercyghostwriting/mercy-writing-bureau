import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CONTACT_EMAIL } from "@/data/content";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Book Ghostwriting Services" },
      {
        name: "description",
        content:
          "Working terms for ghostwriting, editing, and publishing support projects, including ownership, milestones, and confidentiality.",
      },
      { property: "og:title", content: "Terms and Conditions" },
      {
        property: "og:description",
        content: "Working terms covering ownership, milestones, revisions, and confidentiality.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Terms and Conditions</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Each project begins with a written brief covering scope, milestones, deliverables, and
            schedule. Work proceeds only once that brief is agreed.
          </p>
          <p>
            Full copyright and ownership of the completed work transfer to the client after final
            payment. My name is not attached to the work unless you choose to credit me.
          </p>
          <p>Confidentiality applies by default, and an NDA can be signed on request.</p>
          <p className="text-foreground/70 italic">
            [Editable placeholder: add payment schedule, deposit terms, included revision rounds,
            cancellation and refund policy, and governing law here.]
          </p>
          <p>Questions about these terms can be sent to {CONTACT_EMAIL}.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
