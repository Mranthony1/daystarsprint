import { Suspense } from "react";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { WorkBrowser } from "@/components/work/work-browser";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Studio studies from Daystarsprint. Self-initiated concepts in brand, web, search, social, and paid media — not client results.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader index="DS—P" eyebrow="Work" title="Studies in making a company clearer.">
        <p>
          Every piece here is a studio study: original, self-initiated, and labeled as such. Use
          them to see how Daystarsprint frames a problem. Do not read them as client work or as
          proof of a number.
        </p>
      </PageHeader>
      <section>
        <Container className="py-16 md:py-20">
          <Suspense fallback={<p className="text-mute">Loading studies…</p>}>
            <WorkBrowser />
          </Suspense>
        </Container>
      </section>
      <ClosingCta
        title="Real work starts with a real brief."
        body="When a project can be shown with permission, it will replace a study. Until then, the thinking is the public record."
      />
    </>
  );
}
