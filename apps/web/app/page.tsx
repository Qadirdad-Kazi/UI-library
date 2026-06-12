import { Hero } from "@/components/hero";
import { CategorySection } from "@/components/category-section";
import { FeaturedComponents } from "@/components/featured-components";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedComponents />
      <CtaSection />
    </>
  );
}
