import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms",
  description: "Draft terms for using the Tinatries website and reading its studio concepts.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader index="Draft" eyebrow="Terms" title="How to read this website.">
        <p>
          This page is a draft for the studio to review. It is not legal advice and it is not a
          client agreement.
        </p>
      </PageHeader>
      <Container className="max-w-3xl py-16 md:py-20">
        <article className="space-y-8 text-lg leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-3xl text-ink">Using the site</h2>
            <p className="mt-3">
              You may browse Tinatries and send an enquiry. You may not misuse the form, attempt
              to break the site, or present its contents as your own client work.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-ink">Studio studies</h2>
            <p className="mt-3">
              Projects in the work section are self-initiated concepts. They are not client
              engagements and they are not performance results. Names used inside a study are
              fictional. Do not treat a study as evidence of a ranking, a revenue figure, or a
              relationship with a real company.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-ink">No engagement by visiting</h2>
            <p className="mt-3">
              Reading the site or sending an enquiry does not create a contract. Work begins only
              when scope and terms are agreed separately. Nothing on the site guarantees a search
              ranking, a follower count, or a commercial return.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-ink">The studio’s material</h2>
            <p className="mt-3">
              The writing, mark, layout, and original study artwork on this site belong to
              Tinatries unless a page says otherwise. You may share a link. You may not copy
              the site design or the studies and present them as another studio’s work.
            </p>
          </section>
        </article>
      </Container>
    </>
  );
}
