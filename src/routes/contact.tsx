import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ContactForm } from "@/components/site/ContactForm";
import { ContactIcons } from "@/components/site/ContactIcons";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  validateSearch: (search: Record<string, unknown>): { service?: "translation" } => ({
    service: search.service === "translation" ? "translation" : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact | Hire a Professional Book Ghostwriter" },
      {
        name: "description",
        content:
          "Tell me about your book idea, word count and publishing goals. I'll review the details and recommend the best next step for your manuscript.",
      },
      { property: "og:title", content: "Contact The Wrting Bureau" },
      {
        property: "og:description",
        content: "Send your book idea and goals — I'll recommend the right next step.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const { service } = Route.useSearch();
  return (
    <PageShell
      eyebrow="Contact"
      title="Tell Me About Your Project"
      intro="Share a few details about your book, draft, or translation project so I can advise on scope and timing."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <div className="overflow-hidden border border-border bg-secondary/40">
            <img
              src="/mercy-green.webp"
              alt="Mercy, professional ghostwriter and founder of The Wrting Bureau"
              loading="lazy"
              width={720}
              height={960}
              className="aspect-[5/4] w-full object-cover object-[center_35%]"
            />
          </div>
          <div className="mt-6">
            <ContactIcons />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Every enquiry is answered personally and kept confidential. NDAs available on request.
          </p>
        </div>
        <ContactForm
          key={service}
          initialService={service === "translation" ? "Translation" : ""}
        />
      </div>
    </PageShell>
  );
}
