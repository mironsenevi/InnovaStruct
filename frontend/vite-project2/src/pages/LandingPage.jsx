import Navbar from "../components/LandingPageComponents/Navbar";

import PricingCards from "../components/LandingPageComponents/PricingCards";

import OurTeam from "../components/LandingPageComponents/OurTeam";

import Features from "../components/LandingPageComponents/Features";
import Subscribe from "../components/LandingPageComponents/Subscribe";
import HeroTest from "../components/LandingPageComponents/HeroTest";
import Footer from "../components/LandingPageComponents/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroTest />
      {/* <Hero /> */}
      <Features />
      <PricingCards />
      {/* <LogoCarousel />   */}
      <OurTeam />

      {/* <Timetable /> */}
      <Subscribe />

      <Footer />
    </>
  );
}

export default LandingPage;