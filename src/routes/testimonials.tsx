import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import seatedPhoto from "@/assets/mercy-seated.jpg";
import { benefits } from "@/data/content";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Client Testimonials | The Wrting Bureau" },
      {
        name: "description",
        content:
          "What authors, entrepreneurs and coaches say about working with The Wrting Bureau on their book projects.",
      },
      { property: "og:title", content: "Client Testimonials" },
      {
        property: "og:description",
        content: "In my clients' words — feedback from authors and business owners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

function TestimonialsPage() {
  return (
    <PageShell eyebrow="Testimonials" title="Hear it from our authors">
      <section className="client-reviews">
        <div>
          <h2 className="font-display text-3xl">Kathryn Zwart</h2>
          <p className="mt-3">Gothic personal memoir</p>
        </div>
        <video
          controls
          playsInline
          preload="none"
          poster="/client-testimonial.webp"
          aria-label="Kathryn Zwart’s testimonial"
        >
          <source src="/client-testimonial.mp4" type="video/mp4" />
        </video>
      </section>

      <div className="mt-20 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="overflow-hidden border border-border bg-secondary/40 p-3">
            <img
              src={seatedPhoto}
              alt="The ghostwriter behind The Wrting Bureau"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="rule-line">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Why Work With Me</h2>
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
          <Link
            to="/contact"
            className="mt-9 inline-block rounded-sm border border-foreground/25 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Discuss Your Book
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
