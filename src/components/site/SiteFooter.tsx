import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, services } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2 lg:pr-12">
          <p className="font-display text-2xl">
            The Ghostwriting Studio<span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            A professional ghostwriting and book editing service for authors, entrepreneurs,
            coaches, and publishers — helping serious people write the book they have been carrying
            for years, in their own voice.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for Select Projects
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.22em] text-accent uppercase">Navigate</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/70">
            {["About", "Services", "Portfolio", "Process", "Testimonials", "FAQ", "Contact"].map(
              (l) => (
                <li key={l}>
                  <Link to="/" hash={l.toLowerCase()} className="transition-colors hover:text-accent">
                    {l}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.22em] text-accent uppercase">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link to="/" hash="services" className="transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xs tracking-[0.22em] text-accent uppercase">Contact</h3>
          <p className="mt-4 text-sm text-primary-foreground/70">{CONTACT_EMAIL}</p>
          <p className="mt-2 space-x-3 text-sm text-primary-foreground/70">
            <span>[LinkedIn]</span>
            <span>[Instagram]</span>
            <span>[X]</span>
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} The Ghostwriting Studio. All rights reserved.</p>
          <p className="space-x-5">
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
