import { Link } from "@tanstack/react-router";
import { ContactIcons } from "./ContactIcons";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["How I Work", "/process"],
  ["Portfolio", "/portfolio"],
  ["FAQ", "/faq"],
  ["Contact Us", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bureau-colophon">
      <div className="editorial-wrap">
        <div className="colophon-main">
          <div>
            <p className="colophon-name">
              The Wrting
              <br />
              Bureau<span>.</span>
            </p>
            <p className="mt-5">Ghostwriting, editing, and translation.</p>
          </div>
          <div className="colophon-project">
            <h2>What are you writing?</h2>
            <Link to="/contact" className="colophon-cta">
              Tell me about your project <span aria-hidden="true">↗</span>
            </Link>
            <ContactIcons />
          </div>
        </div>
        <nav className="colophon-nav" aria-label="Footer navigation">
          {links.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
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
