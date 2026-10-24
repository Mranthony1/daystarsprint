import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@/components/analytics/analytics";
import { Footer } from "@/components/layout/footer";
import { Navbar, NavbarFallback } from "@/components/layout/navbar";
import { siteConfig, socialLinks } from "@/lib/site-config";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tinatries — Make your brand impossible to ignore.",
    template: "%s — Tinatries",
  },
  description: siteConfig.description,
  applicationName: "Tinatries",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Tinatries",
    locale: "en",
    title: "Tinatries — Make your brand impossible to ignore.",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinatries",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F3F1EB",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tinatries",
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
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full bg-cloud font-sans text-ink">
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
