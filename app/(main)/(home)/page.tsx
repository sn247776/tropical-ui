import SuspenseWrapper from "@/components/layout/suspense-wrapper";
import FeaturedProperties from "./featured-properties";
import HeroSection from "./hero";
import FeatureLoading from "./feature-loading";

export default function HomePage() {

  return (
    <div>
      <HeroSection/>
      <SuspenseWrapper fallback={<FeatureLoading/>}>
      <FeaturedProperties/>
      </SuspenseWrapper>
    </div>
  );
}