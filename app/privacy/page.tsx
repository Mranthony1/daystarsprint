import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Privacy",
  description: "How the Tinatries website handles enquiries and optional analytics.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader index="Draft" eyebrow="Privacy" title="What this site does with an enquiry.">
        <p>
          This page is a draft for the studio to review. It is not legal advice. It describes the
          website as it is built today.
        </p>
      </PageHeader>
      <Container className="max-w-3xl py-16 md:py-20">
        <article className="space-y-8 text-lg leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-3xl text-ink">What you send</h2>
            <p className="mt-3">
              The enquiry form asks for your name, email, an optional company and website, the
              service and engagement you have in mind, a budget direction, timing, a preferred way
              to reply, and a description of the project. A consent checkbox records that the
              details may be used to respond. A hidden field is used to reject automated spam. Do
              not put passwords or payment details in the form.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-ink">What happens to it</h2>
            <p className="mt-3">
              If email delivery is configured, the enquiry is sent to the studio inbox through
              Resend and is not stored in a database on this site. If delivery is not configured,
              the submission is rejected and is not stored. The server keeps a short-lived rate
              limit in memory — a count of attempts from a network address — and that count is
              discarded when the process restarts.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-ink">Analytics</h2>
            <p className="mt-3">
              Analytics are off unless the studio sets a Plausible domain. When they are on,
              Plausible receives page views. The enquiry form does not send your name, email, or
              project description to analytics.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-ink">Sharing</h2>
            <p className="mt-3">
              Enquiries are used to reply and to decide whether the studio can help. They are not
              sold. A hosting provider and, when configured, Resend will process the message as
              part of delivering it.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-ink">Asking for a change</h2>
            <p className="mt-3">
              To ask about an enquiry you sent, contact the studio
              {siteConfig.contact.email ? (
                <>
                  {" "}
                  at <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </>
              ) : (
                " through the details published on the contact page"
              )}
              . This draft should be replaced with a reviewed privacy notice before the site is
              treated as a final legal document.
            </p>
          </section>
        </article>
      </Container>
    </>
  );
}
