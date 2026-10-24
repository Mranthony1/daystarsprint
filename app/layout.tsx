import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@/components/analytics/analytics";
import { Footer } from "@/components/layout/footer";
import { Navbar, NavbarFallback } from "@/components/layout/navbar";
import { siteConfig, socialLinks } from "@/lib/site-config";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Daystarsprint — Seen clearly. Remembered after.",
    template: "%s — Daystarsprint",
  },
  description: siteConfig.description,
  applicationName: "Daystarsprint",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Daystarsprint",
    locale: "en",
    title: "Daystarsprint — Seen clearly. Remembered after.",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daystarsprint",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Daystarsprint",
  description: siteConfig.description,
  url: siteConfig.url,
  slogan: siteConfig.tagline,
  logo: `${siteConfig.url}/brand/mark.svg`,
  areaServed: siteConfig.markets,
  knowsAbout: [
    "SEO",
    "Social media marketing",
    "Paid advertising",
    "Branding",
    "Web design",
    "Web development",
  ],
  ...(siteConfig.contact.email ? { email: siteConfig.contact.email } : {}),
  ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
  ...(socialLinks.length > 0 ? { sameAs: socialLinks.map((item) => item.href) } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-bone font-sans text-ink">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>
        <main id="content">{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
