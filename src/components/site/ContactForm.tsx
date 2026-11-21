import { CONTACT_EMAIL } from "@/data/content";
import { useState } from "react";

const field = "w-full border border-input bg-card p-3 text-foreground";

export function ContactForm({ initialService }: { initialService: string }) {
  const [service, setService] = useState(initialService);

  function openEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = [
      `Name: ${data.get("name")}`,
      `Reply email: ${data.get("email")}`,
      `Service: ${service}`,
      ...(service === "Translation" ? [`Languages: ${data.get("languages")}`] : []),
      "",
      String(data.get("details")),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(service + " enquiry")}&body=${encodeURIComponent(details)}`;
  }

  return (
    <form onSubmit={openEmail} className="grid content-start gap-5">
      <label className="grid gap-2">
        Name
        <input name="name" autoComplete="name" className={field} required />
      </label>
      <label className="grid gap-2">
        Email
        <input name="email" type="email" autoComplete="email" className={field} required />
      </label>
      <label className="grid gap-2">
        Service
        <select
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          className={field}
          required
        >
          <option value="">Choose a service</option>
          <option>Book writing</option>
          <option>Editing &amp; publishing</option>
          <option>Translation</option>
          <option>Help choosing a service</option>
        </select>
      </label>
      {service === "Translation" && (
        <label className="grid gap-2">
          Source and target languages
          <input name="languages" className={field} placeholder="e.g. French to English" required />
        </label>
      )}
      <label className="grid gap-2">
        Project details
        <textarea
          name="details"
          rows={6}
          className={field}
          placeholder="What are you working on? Add the word count or deadline if you know it."
          required
        />
      </label>
      <button className="bureau-button inline-flex justify-self-start" type="submit">
        Open email draft ↗
      </button>
      <p className="text-sm text-muted-foreground">
        This opens a draft in your email app so you can review and send it.
      </p>
    </form>
  );
}
