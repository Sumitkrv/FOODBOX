import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedMealKits from '../components/home/FeaturedMealKits';
import WhyFoodbox from '../components/home/WhyFoodbox';
import CustomerStories from '../components/home/CustomerStories';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <FeaturedMealKits />
      <WhyFoodbox />
      <CustomerStories />
      <FAQ />
      <FinalCTA />
    </>
  );
}
