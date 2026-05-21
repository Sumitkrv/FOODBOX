import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SmartFeatures from "@/components/home/SmartFeatures";
import SubscriptionPreview from "@/components/home/SubscriptionPreview";
import Offers from "@/components/home/Offers";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <FeaturedProducts />
      <SmartFeatures />
      <SubscriptionPreview />
      <Offers />
      <Testimonials />
    </>
  );
}
