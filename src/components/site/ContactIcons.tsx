import { Mail, Linkedin } from "lucide-react";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/data/content";

export function ContactIcons() {
  const linkedin = SOCIAL_LINKS.find(({ label }) => label === "LinkedIn");
  return (
    <div className="contact-icons" aria-label="Contact links">
      {linkedin && (
        <a href={linkedin.href} aria-label="LinkedIn" title="LinkedIn">
          <Linkedin size={20} aria-hidden="true" />
        </a>
      )}
      <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email" title="Email">
        <Mail size={20} aria-hidden="true" />
      </a>
    </div>
  );
}
