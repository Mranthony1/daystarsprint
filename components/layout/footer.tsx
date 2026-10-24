import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/navigation";
import { services } from "@/lib/services";
import { siteConfig, socialLinks } from "@/lib/site-config";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-ink text-bone">
      <div className="flex h-1.5" aria-hidden>
        <span className="flex-1 bg-bone" />
        <span className="flex-1 bg-signal" />
        <span className="flex-1 bg-gold" />
        <span className="flex-1 bg-bone-deep" />
      </div>
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_0.7fr_0.9fr_0.8fr] md:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
            A digital marketing and creative studio. Brand, websites, search, social, and paid
            media, planned as one impression.
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/50">Visit</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-bone/85 hover:text-flare">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-bone/85 hover:text-flare">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/50">
            Disciplines
          </p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-bone/85 hover:text-flare"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/50">
            Studio
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bone/85">
            {siteConfig.contact.email ? (
              <li>
                <a className="hover:text-flare" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
            ) : null}
            {siteConfig.contact.phone ? <li>{siteConfig.contact.phone}</li> : null}
            {siteConfig.contact.address ? <li>{siteConfig.contact.address}</li> : null}
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a className="hover:text-flare" href={item.href} rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-flare">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-flare">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-bone/15 py-6 text-xs leading-relaxed text-bone/55 md:flex-row md:items-center md:justify-between">
        <p>© {year} Daystarsprint. Ghana and international.</p>
        <p className="max-w-md md:text-right">
          Studies on this site are self-initiated concepts, not client results.
        </p>
      </Container>
    </footer>
  );
}
