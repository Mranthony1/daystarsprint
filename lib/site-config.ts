import { safeEmail, safeHttpUrl, safePhone } from "@/lib/utils";

function siteUrl() {
  const fallback = "http://localhost:3000";
  const raw = process.env.NEXT_PUBLIC_SITE_URL || fallback;
  try {
    const url = new URL(raw);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.origin;
    }
  } catch {
    return fallback;
  }
  return fallback;
}

const social = {
  instagram: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM),
  linkedin: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN),
  x: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_X),
  facebook: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK),
};

export const siteConfig = {
  name: "Tinatries",
  tagline: "Make your brand impossible to ignore.",
  campaignHeadline: "Strategy, creative, and performance in one practice.",
  statement:
    "Tinatries plans the brand, builds the website, and runs the marketing as one practice.",
  description:
    "Tinatries is a premium digital marketing and creative agency. SEO, social media, paid advertising, branding, and web design for ambitious companies.",
  url: siteUrl(),
  locale: "en",
  contentUpdated: "2026-10-24",
  currency: process.env.NEXT_PUBLIC_CURRENCY?.trim() || "GHS",
  markets: ["Ghana", "International"],
  contact: {
    email: safeEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    phone: safePhone(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    whatsapp: safePhone(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS?.trim() || "",
  },
  social,
  schedulingUrl: safeHttpUrl(process.env.NEXT_PUBLIC_SCHEDULING_URL),
  whatsappMessage: "Hello Tinatries, I would like to talk about a project.",
} as const;

export const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "X", href: siteConfig.social.x },
  { label: "Facebook", href: siteConfig.social.facebook },
].filter((item) => item.href);

export function isAnalyticsEnabled() {
  return (
    process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER === "plausible" &&
    Boolean(process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN?.trim())
  );
}
