import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <header className="border-b border-border paper-grain px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
              {title}
            </h1>
            {intro ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            ) : null}
          </div>
        </header>
        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
