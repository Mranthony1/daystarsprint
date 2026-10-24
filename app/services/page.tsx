import { ServicesIndex } from "@/components/home/services-index";
import { ClosingCta } from "@/components/ui/closing-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Search, social media, paid advertising, brand identity, and web design from Daystarsprint — planned as one practice.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader index="DS—P" eyebrow="Services" title="Five disciplines. One standard.">
        <p>
          Hire the studio for a single problem, or for the whole impression. Every engagement
          starts with what the market is supposed to understand, then builds the work that can
          carry it.
        </p>
      </PageHeader>
      <ServicesIndex detailed />
      <ClosingCta
        title="If the list is close, the brief can be rough."
        body="Tell us the business and the pressure. We will help sort which discipline actually belongs in the scope."
      />
    </>
  );
}
