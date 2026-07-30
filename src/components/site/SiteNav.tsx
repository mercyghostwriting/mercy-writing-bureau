import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", to: "/", hash: undefined },
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Portfolio", to: "/", hash: "portfolio" },
  { label: "Process", to: "/", hash: "process" },
  { label: "Testimonials", to: "/", hash: "testimonials" },
  { label: "FAQ", to: "/", hash: "faq" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <Link to="/" className="font-display text-xl tracking-tight text-foreground">
          The Ghostwriting Studio
          <span className="ml-1 text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                hash={item.hash}
                className="text-[0.82rem] tracking-wide text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          hash="contact"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-[0.78rem] font-medium tracking-wider text-primary-foreground uppercase transition-colors hover:bg-accent lg:inline-block"
        >
          Discuss Your Book
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                to="/"
                hash="contact"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-primary px-5 py-3 text-center text-[0.78rem] font-medium tracking-wider text-primary-foreground uppercase"
              >
                Discuss Your Book
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
