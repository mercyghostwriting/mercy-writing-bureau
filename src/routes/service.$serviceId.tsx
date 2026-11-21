import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { services } from "@/data/content";

const translation = {
  id: "translation",
  title: "Manuscript and Document Translation",
  description:
    "Translate your book or document while keeping the meaning, tone, and intent of the original.",
};

export const Route = createFileRoute("/service/$serviceId")({
  loader: ({ params }) => {
    const service = [...services, translation].find((item) => item.id === params.serviceId);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.title }, { name: "description", content: loaderData?.description }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const isTranslation = service.id === "translation";
  return (
    <PageShell eyebrow="Services" title={service.title} intro={service.description}>
      <div className="max-w-2xl border-t border-border pt-8">
        <h2 className="font-display text-3xl">What to send</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {isTranslation
            ? "Share the source and target languages, what the material is for, its approximate word count, and when you need it."
            : "Tell me what you have so far, who it’s for, and what you want to finish. A sample, outline, or short description is enough for a first conversation."}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            to="/contact"
            search={isTranslation ? { service: "translation" } : {}}
            className="bureau-button inline-flex"
          >
            Discuss this project ↗
          </Link>
          <Link to="/services" className="editorial-link">
            All services
          </Link>
          <Link to="/portfolio" className="editorial-link">
            See the portfolio
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
