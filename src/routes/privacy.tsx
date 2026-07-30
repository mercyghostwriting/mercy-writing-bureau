import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CONTACT_EMAIL } from "@/data/content";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Professional Ghostwriting Services" },
      {
        name: "description",
        content:
          "How enquiry details, manuscripts, and client materials are handled and kept confidential by this ghostwriting service.",
      },
      { property: "og:title", content: "Privacy Policy" },
      {
        property: "og:description",
        content: "How client materials and enquiry details are handled and kept confidential.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Details you submit through the enquiry form are used only to respond to your project and
            are never sold or shared with third parties.
          </p>
          <p>
            Manuscripts, notes, recordings, and any material you send remain your property and are
            stored privately. Work is only shown publicly with your written permission.
          </p>
          <p className="text-foreground/70 italic">
            [Editable placeholder: add your data retention period, cookie usage, analytics tools, and
            jurisdiction here.]
          </p>
          <p>Questions about this policy can be sent to {CONTACT_EMAIL}.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
