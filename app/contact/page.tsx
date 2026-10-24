import { Suspense } from "react";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { isEnquiryDeliveryConfigured } from "@/lib/enquiry";
import { isEngagementValue, isServiceValue } from "@/lib/form-options";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, socialLinks } from "@/lib/site-config";
import { whatsappHref } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a brief with Daystarsprint. Tell the studio about the business, the audience, and the work you want to change.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ service?: string; engagement?: string }>;
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <>
      <PageHeader index="DS—P" eyebrow="Contact" title="Tell us what should be unmistakable.">
        <p>
          Describe the business, who it is for, and the change you want. A polished brief is not
          required. A direct one is.
        </p>
      </PageHeader>
      <section>
        <Container className="grid gap-12 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:py-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-3xl">What happens next</h2>
            <ol className="mt-5 space-y-4 text-ink-soft">
              <li>1. You send enough context for the studio to understand the work.</li>
              <li>2. Daystarsprint reads it and replies if there is a useful way to help.</li>
              <li>3. A proposal, if one is warranted, defines scope before any commitment.</li>
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-mute">
              A response time is not published here. The form is not a booking. Nothing is
              scheduled unless a scheduling link has been configured.
            </p>
            <ContactFacts />
          </aside>
          <Suspense fallback={<p className="text-mute">Loading the enquiry form…</p>}>
            <ContactPanel searchParams={searchParams} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

async function ContactPanel({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const service = typeof params.service === "string" ? params.service : "";
  const engagement = typeof params.engagement === "string" ? params.engagement : "";

  return (
    <EnquiryForm
      deliveryConfigured={isEnquiryDeliveryConfigured()}
      initialService={isServiceValue(service) ? service : ""}
      initialEngagement={isEngagementValue(engagement) ? engagement : ""}
    />
  );
}

function ContactFacts() {
  const whatsapp = siteConfig.contact.whatsapp
    ? whatsappHref(siteConfig.contact.whatsapp, siteConfig.whatsappMessage)
    : "";
  const facts = [
    siteConfig.contact.email
      ? { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` }
      : null,
    siteConfig.contact.phone
      ? { label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` }
      : null,
    whatsapp ? { label: "WhatsApp", value: siteConfig.contact.whatsapp, href: whatsapp } : null,
    siteConfig.schedulingUrl
      ? { label: "Schedule", value: "Open the scheduling page", href: siteConfig.schedulingUrl }
      : null,
  ].filter((item) => item !== null);

  if (facts.length === 0 && !siteConfig.contact.address && socialLinks.length === 0) {
    return (
      <p className="mt-8 text-sm text-mute">
        Direct contact details will appear here once they are configured. The form is the way to
        reach the studio until then.
      </p>
    );
  }

  return (
    <div className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
      {siteConfig.contact.address ? <p>{siteConfig.contact.address}</p> : null}
      {facts.map((fact) => (
        <p key={fact.label}>
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">
            {fact.label}
          </span>
          <a className="mt-1 inline-block underline decoration-line underline-offset-4 hover:decoration-signal" href={fact.href}>
            {fact.value}
          </a>
        </p>
      ))}
      {socialLinks.length > 0 ? (
        <ul className="flex flex-wrap gap-4">
          {socialLinks.map((item) => (
            <li key={item.href}>
              <a className="underline decoration-line underline-offset-4" href={item.href} rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
