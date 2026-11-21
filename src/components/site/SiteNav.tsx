import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "How I Work", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "FAQ", to: "/faq" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={`bureau-masthead sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <Link to="/" className="bureau-wordmark" aria-label="The Wrting Bureau home">
          <span className="bureau-mark" aria-hidden="true">
            W
          </span>
          <span>
            THE WRTING <br />
            BUREAU<span className="bureau-logo-dot">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="text-[0.82rem] tracking-wide text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="bureau-button hidden lg:inline-flex">
          Contact Us
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
        <div className="bureau-mobile-menu border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-primary px-5 py-3 text-center text-[0.78rem] font-medium tracking-wider text-primary-foreground uppercase"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
