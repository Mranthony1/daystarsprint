import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/navigation";
import { services } from "@/lib/services";
import { siteConfig, socialLinks } from "@/lib/site-config";

async function CopyrightYear() {
  await connection();
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="bg-ink text-cloud">
      <div className="h-1 bg-signal" aria-hidden />
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_0.7fr_0.9fr_0.8fr] md:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cloud/70">
            A digital marketing and creative agency. Strategy, identity, websites, search, social,
            and paid media, planned as one impression.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-flare"
          >
            Start a project
          </Link>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cloud/45">Visit</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cloud/85 hover:text-flare">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-cloud/85 hover:text-flare">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cloud/45">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-cloud/85 hover:text-flare"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cloud/45">
            Studio
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cloud/85">
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
      <Container className="flex flex-col gap-3 border-t border-cloud/15 py-6 text-xs leading-relaxed text-cloud/55 md:flex-row md:items-center md:justify-between">
        <p>
          ©{" "}
          <Suspense fallback={2026}>
            <CopyrightYear />
          </Suspense>{" "}
          Tinatries.
        </p>
        <p className="max-w-md md:text-right">
          Portfolio pieces are studio concepts, not client results.
        </p>
      </Container>
    </footer>
  );
}
