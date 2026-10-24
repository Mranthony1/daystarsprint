import { AboutPreview } from "@/components/home/about-preview";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Engagements } from "@/components/home/engagements";
import { FaqList } from "@/components/home/faq-list";
import { Hero } from "@/components/home/hero";
import { Method } from "@/components/home/method";
import { Positioning } from "@/components/home/positioning";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesIndex } from "@/components/home/services-index";
import { SignalSplit } from "@/components/home/signal-split";
import { Ticker } from "@/components/home/ticker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Positioning />
      <ServicesIndex />
      <SelectedWork />
      <SignalSplit />
      <Method />
      <Engagements />
      <AboutPreview />
      <FaqList />
      <ClosingCta />
    </>
  );
}
