// EDIT ME: All portfolio content lives here. Replace placeholder values with
// verified project details. Nothing here should be invented — placeholders are
// clearly marked with the PLACEHOLDER prefix.

export const PLACEHOLDER = "[Add verified detail here]";

export type Project = {
  id: string;
  internalLabel: string;
  title: string;
  category:
    | "Business"
    | "Memoir"
    | "Personal Development"
    | "Fiction"
    | "Mystery and Thriller"
    | "Other Nonfiction";
  service: string;
  wordCount: string;
  summary: string;
  coverImage?: string;
  confidential: boolean;
  overview: string;
  objective: string;
  scope: string;
  contribution: string;
  approach: string;
  deliverables: string;
  result?: string;
  testimonial?: { quote: string; author: string };
};

const categories: Project["category"][] = [
  "Business",
  "Memoir",
  "Personal Development",
  "Fiction",
  "Mystery and Thriller",
  "Other Nonfiction",
];

export const FILTERS = ["All", ...categories] as const;

function makeProject(index: number): Project {
  const n = String(index).padStart(2, "0");
  return {
    id: `project-${n}`,
    internalLabel: `Project ${n}`,
    title: `Project ${n} — [Add project title]`,
    category: categories[(index - 1) % categories.length],
    service: PLACEHOLDER,
    wordCount: PLACEHOLDER,
    summary:
      "[Add a short project summary here. This entry is a placeholder until verified project details are supplied.]",
    confidential: false,
    overview: PLACEHOLDER,
    objective: PLACEHOLDER,
    scope: PLACEHOLDER,
    contribution: PLACEHOLDER,
    approach: PLACEHOLDER,
    deliverables: PLACEHOLDER,
  };
}

export const projects: Project[] = Array.from({ length: 20 }, (_, i) => makeProject(i + 1));

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

export const services = [
  {
    title: "Nonfiction Ghostwriting",
    description:
      "Turn expertise, research, and lived experience into a structured nonfiction book that reads clearly and sounds like you.",
  },
  {
    title: "Business and Leadership Books",
    description:
      "Position your ideas with authority — frameworks, case studies, and lessons shaped into a book that earns trust with clients and peers.",
  },
  {
    title: "Memoir and Autobiography Writing",
    description:
      "Your life story told with warmth and narrative shape, preserving the details, voice, and emotion that make it yours.",
  },
  {
    title: "Fiction Ghostwriting",
    description:
      "Character-driven novels built on a solid structure, consistent voice, and scenes that keep readers turning pages.",
  },
  {
    title: "Mystery and Thriller Writing",
    description:
      "Tight plotting, credible clues, and controlled pacing so tension builds cleanly from the first page to the final reveal.",
  },
  {
    title: "Book Outlines and Story Development",
    description:
      "A chapter-by-chapter blueprint that solves structure problems before a single draft chapter is written.",
  },
  {
    title: "Developmental Editing",
    description:
      "A deep read of structure, argument, pacing, and voice — with practical revision notes you can act on.",
  },
  {
    title: "Book Editing and Proofreading",
    description:
      "Line-level clarity, consistency, and correctness so your manuscript reads like a professionally published book.",
  },
  {
    title: "KDP Formatting and Publishing Support",
    description:
      "Print and ebook files prepared to specification, with guidance through the self-publishing upload process.",
  },
];

export const processSteps = [
  {
    title: "Discovery and Project Brief",
    description:
      "We talk through your idea, audience, goals, and timeline, then agree on scope in a written brief so expectations are clear from day one.",
  },
  {
    title: "Research and Book Strategy",
    description:
      "I research your subject, market, and reader, and recommend the angle, structure, and tone that will serve the book best.",
  },
  {
    title: "Outline Development",
    description:
      "You receive a chapter-by-chapter outline for review. We refine it together until the shape of the book feels right.",
  },
  {
    title: "Sample Chapter Approval",
    description:
      "I write a sample chapter so you can hear your voice on the page and approve the style before full drafting begins.",
  },
  {
    title: "Manuscript Writing and Revisions",
    description:
      "Chapters are delivered in agreed milestones, with your feedback folded into each round so nothing drifts off course.",
  },
  {
    title: "Final Editing and Delivery",
    description:
      "The complete manuscript is edited, proofread, and delivered in publishing-ready files, with full ownership transferred to you.",
  },
];

export const benefits = [
  "Writing tailored to your natural voice",
  "Original content developed for each project",
  "Confidentiality and NDA availability",
  "Clear milestone-based communication",
  "Research-driven storytelling",
  "Collaborative revisions",
  "Full ownership transferred after final payment",
  "Publishing-ready final files",
];

export type Testimonial = {
  name: string;
  projectType: string;
  quote: string;
  initials: string;
};

// EDIT ME: replace with verified client testimonials only.
export const testimonials: Testimonial[] = [
  {
    name: "[Client name or anonymous label]",
    projectType: "[Project type]",
    quote: "Add verified client testimonial here.",
    initials: "—",
  },
  {
    name: "[Client name or anonymous label]",
    projectType: "[Project type]",
    quote: "Add verified client testimonial here.",
    initials: "—",
  },
  {
    name: "[Client name or anonymous label]",
    projectType: "[Project type]",
    quote: "Add verified client testimonial here.",
    initials: "—",
  },
];

export const faqs = [
  {
    q: "What types of books do you ghostwrite?",
    a: "Both fiction and nonfiction — business and leadership, memoir and autobiography, personal development, and selected fiction genres including mystery, thriller, and romance. If your idea sits outside these areas, tell me about it and I'll say honestly whether I'm the right writer for it.",
  },
  {
    q: "Will I own the copyright to my book?",
    a: "Yes. Full copyright and ownership transfer to you after final payment. My name appears nowhere on the work unless you choose to credit me.",
  },
  {
    q: "Is my project kept confidential?",
    a: "Yes. Your identity, materials, and manuscript stay private. Projects are only shown in my portfolio with explicit written permission, and confidential work is presented anonymously.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. I'm happy to sign your NDA before we discuss project details, or to provide a standard confidentiality agreement if you'd prefer.",
  },
  {
    q: "How does the ghostwriting process work?",
    a: "Six stages: discovery and brief, research and strategy, outline, sample chapter approval, milestone drafting with revisions, then final editing and delivery. You review and approve at every stage, so there are no surprises at the end.",
  },
  {
    q: "Can you help if I only have an idea?",
    a: "Absolutely. Many projects start as a rough idea, a set of notes, or a few recorded conversations. Development interviews and outlining are part of the work.",
  },
  {
    q: "Do you provide editing and formatting?",
    a: "Yes — developmental editing, line editing and proofreading, and KDP-ready print and ebook formatting are available as standalone services or bundled with a ghostwriting project.",
  },
  {
    q: "How long does it take to complete a book?",
    a: "Timelines depend on word count, research depth, and how quickly feedback comes back. [Add your typical turnaround range here.] Every project gets a scheduled milestone plan before writing begins.",
  },
  {
    q: "How are payments and milestones structured?",
    a: "Work is split into milestones, with payment released as each milestone is approved. [Add your deposit, milestone split, and pricing details here.]",
  },
  {
    q: "How many revisions are included?",
    a: "Revisions are built into each milestone so the manuscript stays on track rather than being reworked at the end. [Add your included revision rounds here.]",
  },
];

export const trustBar = [
  "Original, Confidential Writing",
  "Full Copyright Transfer",
  "Research-Based Content",
  "Publishing-Ready Manuscripts",
];

export const CONTACT_EMAIL = "[your-email@example.com]";
