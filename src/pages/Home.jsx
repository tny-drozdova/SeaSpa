import HeroSection from '../components/home/HeroSection';
import UltimateExperienceSection from '../components/home/UltimateExperienceSection';
import ExperienceCards from '../components/home/ExperienceCards';
import GoogleReviewCards from '../components/home/GoogleReviewCards';
import InstagramRibbon from '../components/home/InstagramRibbon';
import FareHarborBookingCTA from '../components/FareHarborBookingCTA';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQAccordion from '../components/home/FAQAccordion';
import MapEmbed from '../components/home/MapEmbed';
import ContactForm from '../components/home/ContactForm';

const IMAGES = {
  hero: "/__generating__/img_5af813920cd6.png",
  ultimate: "/__generating__/img_c9c202ae0eb7.png",
  romantic: "/__generating__/img_8d5cc998b25b.png",
  group: "/__generating__/img_0b43bcbe6032.png",
};

export default function Home() {
  return (
    <>
      <HeroSection heroImage={IMAGES.hero} />
      <UltimateExperienceSection image={IMAGES.ultimate} />
      <ExperienceCards romanticImage={IMAGES.romantic} groupImage={IMAGES.group} />
      <GoogleReviewCards />
      <InstagramRibbon />
      <FareHarborBookingCTA />
      <TestimonialsSection />
      <FAQAccordion />
      <MapEmbed />
      <ContactForm />
    </>
  );
}