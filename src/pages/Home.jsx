import HeroSection from '../components/home/HeroSection';
import UltimateExperienceSection from '../components/home/UltimateExperienceSection';
import ExperienceCards from '../components/home/ExperienceCards';
import GoogleReviewCards from '../components/home/GoogleReviewCards';
import InstagramRibbon from '../components/home/InstagramRibbon';
import FareHarborBookingCTA from '../components/FareHarborBookingCTA';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQAccordion from '../components/home/FAQAccordion';
import MapContactSection from '../components/home/MapContactSection';
import AboutSection from '../components/home/AboutSection';

const IMAGES = {
  hero: "https://media.base44.com/images/public/69d4989a834518931660bae7/39b613c97_generated_cf7a412f.png",
  ultimate: "https://media.base44.com/images/public/69d4989a834518931660bae7/17e44d6e5_generated_cdb1e5b8.png",
  romantic: "https://media.base44.com/images/public/69d4989a834518931660bae7/5a20b1156_generated_24563928.png",
  group: "https://media.base44.com/images/public/69d4989a834518931660bae7/58e1634bf_generated_4d1c9db8.png",
};

export default function Home() {
  return (
    <>
      <HeroSection heroImage={IMAGES.hero} />
      <UltimateExperienceSection image={IMAGES.ultimate} />
      <ExperienceCards romanticImage={IMAGES.romantic} groupImage={IMAGES.group} />
      <GoogleReviewCards />
      <InstagramRibbon />
      <FareHarborBookingCTA
        headline="Plan Your Private Cruise in Avalon or Stone Harbor, NJ"
        subtext="Located in the heart of the Jersey Shore, SeaSpa Cruises offers easy access from both Avalon and Stone Harbor. Whether you're visiting for the weekend or staying all summer, this experience fits perfectly into your plans."
        buttonText="Book Your Bay Experience"
      />
      <TestimonialsSection />
      <FAQAccordion />
      <MapContactSection />
      <AboutSection />
    </>
  );
}