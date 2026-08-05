import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ContactForm } from "@/components/site/ContactForm";
import standingPhoto from "@/assets/mercy-standing.jpg";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/data/content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Hire a Professional Book Ghostwriter" },
      {
        name: "description",
        content:
          "Tell me about your book idea, word count and publishing goals. I'll review the details and recommend the best next step for your manuscript.",
      },
      { property: "og:title", content: "Contact Mercy Writing Bureau" },
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
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's Turn Your Idea Into a Book"
      intro="Tell me about your book idea, current progress, preferred word count, and publishing goals. I'll review the details and recommend the best next step."
    >
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="relative overflow-hidden border border-border bg-secondary/40 p-3">
            <img
              src={standingPhoto}
              alt="Mercy, professional ghostwriter and founder of Mercy Writing Bureau"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Email</p>
          <p className="font-display text-xl">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-6 text-sm text-muted-foreground">Elsewhere</p>
          <p className="mt-1 space-x-4 text-sm">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-4 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Every enquiry is answered personally and kept confidential. NDAs available on request.
          </p>

        </div>
        <ContactForm />
      </div>
    </PageShell>
  );
}
