import Script from "next/script";
import { isAnalyticsEnabled } from "@/lib/site-config";

export function Analytics() {
  if (!isAnalyticsEnabled()) return null;
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  if (!domain) return null;

  return <Script defer data-domain={domain} src="https://plausible.io/js/script.js" />;
}
