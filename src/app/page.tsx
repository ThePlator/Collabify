import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import PricingPlans from './components/PricingPlans';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <TrustedBy />
      <Testimonials />
      <Features />
      <PricingPlans />
      <TestimonialsCarousel />
      <TargetAudience />
      <CallToAction />
    </div>
  );
}
