import {
  Hero,
  TrustStrip,
  Problem,
  Services,
  Process,
  AIShowcase,
  Work,
  Pricing,
  Founders,
  FAQ,
  CTA,
} from "@/components/sections";
import { JsonLd } from "@/components/jsonld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustStrip />
      <Problem />
      <Services />
      <Process />
      <AIShowcase />
      <Work />
      <Pricing />
      <Founders />
      <FAQ />
      <CTA />
    </>
  );
}
