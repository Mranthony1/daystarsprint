import { ClosingCta } from "@/components/ui/closing-cta";
import { Engagements } from "@/components/home/engagements";
import { FaqList } from "@/components/home/faq-list";
import { Hero } from "@/components/home/hero";
import { Method } from "@/components/home/method";
import { Positioning } from "@/components/home/positioning";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesIndex } from "@/components/home/services-index";
import { SignalSplit } from "@/components/home/signal-split";
import { Standards } from "@/components/home/standards";
import { Ticker } from "@/components/home/ticker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Positioning />
      <SignalSplit />
      <ServicesIndex />
      <SelectedWork />
      <Method />
      <Standards />
      <Engagements />
      <FaqList />
      <ClosingCta />
    </>
  );
}
