import { Link } from "@tanstack/react-router";
import { ContactIcons } from "./ContactIcons";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["How I Work", "/process"],
  ["Portfolio", "/portfolio"],
  ["FAQ", "/"],
  ["Contact Us", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bureau-colophon">
      <video
        className="footer-books"
        src="/footer-books.mp4"
        poster="/footer-books.webp"
        autoPlay
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className="editorial-wrap">
        <div className="bureau-footer-directory">
          <div>
            <Link to="/" className="colophon-name">
              The Wrting Bureau<span>.</span>
            </Link>
            <p className="mt-5">Ghostwriting, editing, and translation.</p>
            <ContactIcons showCall={false} />
          </div>
          <div>
            <h2>Services</h2>
            <Link to="/service/$serviceId" params={{ serviceId: "nonfiction" }}>
              Book ghostwriting
            </Link>
            <Link to="/service/$serviceId" params={{ serviceId: "developmental-editing" }}>
              Manuscript editing
            </Link>
            <Link to="/service/$serviceId" params={{ serviceId: "translation" }}>
              Translation
            </Link>
            <Link to="/service/$serviceId" params={{ serviceId: "kdp-formatting" }}>
              Book formatting
            </Link>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Explore</h2>
            {links.map(([label, to]) => (
              <Link key={label} to={to} hash={label === "FAQ" ? "faq" : undefined}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="colophon-meta">
          <p>© {new Date().getFullYear()} The Wrting Bureau</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
