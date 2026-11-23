import { Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/data/content";

export function ContactIcons({ showCall = true }: { showCall?: boolean }) {
  const linkedin = SOCIAL_LINKS.find(({ label }) => label === "LinkedIn");
  return (
    <div className="contact-icons" aria-label="Contact links">
      {linkedin && (
        <a href={linkedin.href} aria-label="LinkedIn" title="LinkedIn">
          <Linkedin size={20} aria-hidden="true" />
        </a>
      )}
      <a href="https://wa.me/2347048973837" aria-label="WhatsApp" title="WhatsApp">
        <MessageCircle size={20} aria-hidden="true" />
      </a>
      {showCall && (
        <a href="tel:+2347048973837" aria-label="Call" title="Call">
          <Phone size={20} aria-hidden="true" />
        </a>
      )}
      <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email" title="Email">
        <Mail size={20} aria-hidden="true" />
      </a>
    </div>
  );
}
