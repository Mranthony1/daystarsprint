export const serviceOptions = [
  { value: "seo", label: "Search engine optimization" },
  { value: "social", label: "Social media marketing" },
  { value: "paid", label: "Paid advertising" },
  { value: "branding", label: "Branding and creative strategy" },
  { value: "web", label: "Web design and development" },
  { value: "multiple", label: "Several of these" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const serviceValues = serviceOptions.map((option) => option.value) as [
  (typeof serviceOptions)[number]["value"],
  ...(typeof serviceOptions)[number]["value"][],
];

export const budgetOptions = [
  { value: "discuss", label: "Prefer to discuss" },
  { value: "focused", label: "A focused project" },
  { value: "ongoing", label: "An ongoing engagement" },
  { value: "partnership", label: "A broader partnership" },
] as const;

export const budgetValues = budgetOptions.map((option) => option.value) as [
  (typeof budgetOptions)[number]["value"],
  ...(typeof budgetOptions)[number]["value"][],
];

export const timelineOptions = [
  { value: "soon", label: "As soon as the scope is clear" },
  { value: "quarter", label: "Within the next few months" },
  { value: "flexible", label: "Flexible" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const timelineValues = timelineOptions.map((option) => option.value) as [
  (typeof timelineOptions)[number]["value"],
  ...(typeof timelineOptions)[number]["value"][],
];

export const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "none", label: "No preference" },
] as const;

export const contactMethodValues = contactMethodOptions.map((option) => option.value) as [
  (typeof contactMethodOptions)[number]["value"],
  ...(typeof contactMethodOptions)[number]["value"][],
];

export const engagementOptions = [
  { value: "project", label: "Project — a defined piece of work" },
  { value: "retainer", label: "Retainer — ongoing marketing" },
  { value: "campaign", label: "Campaign — a bounded push" },
  { value: "custom", label: "Custom — brand, site, and media" },
] as const;

export const engagementValues = engagementOptions.map((option) => option.value) as [
  (typeof engagementOptions)[number]["value"],
  ...(typeof engagementOptions)[number]["value"][],
];

export function isServiceValue(value: string) {
  return serviceOptions.some((option) => option.value === value);
}

export function isEngagementValue(value: string) {
  return engagementOptions.some((option) => option.value === value);
}
