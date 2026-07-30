import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  genre: z.string().trim().min(1, "Please select or enter a genre").max(80),
  service: z.string().trim().min(1, "Please choose the service you need"),
  wordCount: z.string().trim().max(40).optional().or(z.literal("")),
  stage: z.string().trim().min(1, "Please tell me your current stage"),
  completionDate: z.string().trim().max(40).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  description: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters")
    .max(2000, "Please keep the description under 2000 characters"),
  nda: z.string().optional(),
  consent: z.literal("on", { message: "Please confirm consent before submitting" }).optional(),
});

const SERVICES = [
  "Nonfiction Ghostwriting",
  "Business and Leadership Book",
  "Memoir or Autobiography",
  "Fiction Ghostwriting",
  "Mystery or Thriller",
  "Outline and Story Development",
  "Developmental Editing",
  "Editing and Proofreading",
  "KDP Formatting and Publishing Support",
];

const STAGES = [
  "Just an idea",
  "Notes or research gathered",
  "Outline complete",
  "Partial draft written",
  "Full draft needing editing",
];

const field =
  "w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-1 focus:ring-accent";
const labelCls = "mb-1.5 block text-xs tracking-[0.14em] text-muted-foreground uppercase";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<
      string,
      string
    >;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      if (data.consent !== "on") next.consent = "Please confirm consent before submitting";
      setErrors(next);
      return;
    }
    if (data.consent !== "on") {
      setErrors({ consent: "Please confirm consent before submitting" });
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-accent/40 bg-card p-10 text-center">
        <p className="eyebrow">Enquiry received</p>
        <h3 className="mt-4 font-display text-3xl">Thank you — your project details are in.</h3>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          I read every enquiry personally. You'll receive a reply with my honest assessment of your
          project and a recommended next step. If your book is confidential, an NDA can be signed
          before we discuss any detail.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-sm text-accent underline underline-offset-4"
        >
          Submit another project
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="fullName">
          Full name
        </label>
        <input id="fullName" name="fullName" className={field} placeholder="Your name" />
        <FieldError message={errors.fullName} />
      </div>
      <div>
        <label className={labelCls} htmlFor="email">
          Email address
        </label>
        <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
        <FieldError message={errors.email} />
      </div>
      <div>
        <label className={labelCls} htmlFor="genre">
          Book genre
        </label>
        <input id="genre" name="genre" className={field} placeholder="Memoir, thriller, business…" />
        <FieldError message={errors.genre} />
      </div>
      <div>
        <label className={labelCls} htmlFor="service">
          Service needed
        </label>
        <select id="service" name="service" defaultValue="" className={field}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <FieldError message={errors.service} />
      </div>
      <div>
        <label className={labelCls} htmlFor="wordCount">
          Estimated word count
        </label>
        <input id="wordCount" name="wordCount" className={field} placeholder="e.g. 60,000" />
      </div>
      <div>
        <label className={labelCls} htmlFor="stage">
          Current project stage
        </label>
        <select id="stage" name="stage" defaultValue="" className={field}>
          <option value="">Select a stage</option>
          {STAGES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <FieldError message={errors.stage} />
      </div>
      <div>
        <label className={labelCls} htmlFor="completionDate">
          Preferred completion date
        </label>
        <input id="completionDate" name="completionDate" type="date" className={field} />
      </div>
      <div>
        <label className={labelCls} htmlFor="budget">
          Estimated budget range
        </label>
        <input id="budget" name="budget" className={field} placeholder="Optional" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="description">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          className={field}
          placeholder="Tell me about your idea, your reader, and what you want the finished book to do for you."
        />
        <FieldError message={errors.description} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="attachment">
          Attach a file (outline, notes, sample chapter)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          className="w-full rounded-sm border border-dashed border-input bg-card px-3.5 py-3 text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs file:text-secondary-foreground"
        />
      </div>
      <div className="flex items-start gap-3 sm:col-span-2">
        <input id="nda" name="nda" type="checkbox" className="mt-1 accent-[var(--clay)]" />
        <label htmlFor="nda" className="text-sm text-muted-foreground">
          This project requires confidentiality or a signed NDA.
        </label>
      </div>
      <div className="sm:col-span-2">
        <div className="flex items-start gap-3">
          <input id="consent" name="consent" type="checkbox" className="mt-1 accent-[var(--clay)]" />
          <label htmlFor="consent" className="text-sm text-muted-foreground">
            I consent to my details being used to respond to this enquiry.
          </label>
        </div>
        <FieldError message={errors.consent} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-sm bg-primary px-8 py-4 text-[0.8rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-accent"
        >
          Submit Your Book Project
        </button>
      </div>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  );
}
