import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

export function PageHeader({
  index,
  eyebrow,
  title,
  children,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-16 md:py-24">
        <Kicker index={index}>{eyebrow}</Kicker>
        <h1 className="mt-5 max-w-5xl text-[clamp(2.8rem,6.4vw,5.6rem)] leading-[0.92]">{title}</h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{children}</div>
        ) : null}
      </Container>
    </header>
  );
}
