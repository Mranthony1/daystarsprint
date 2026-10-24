import { Suspense } from "react";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { WorkBrowser } from "@/components/work/work-browser";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Studio concepts from Tinatries. Self-initiated work in branding, web design, SEO, social media, and paid advertising — not client results.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Concepts, labeled as concepts.">
        <p>
          Every piece here is a studio concept: original, self-initiated, and marked as such. Use
          them to see how Tinatries frames a problem. Do not read them as client work or as proof
          of a number.
        </p>
      </PageHeader>
      <section>
        <Container className="py-16 md:py-20">
          <Suspense fallback={<p className="text-mute">Loading concepts…</p>}>
            <WorkBrowser />
          </Suspense>
        </Container>
      </section>
      <ClosingCta
        title="Real work starts with a real brief."
        body="When a project can be shown with permission, it will replace a concept. Until then, the thinking is the public record."
      />
    </>
  );
}
