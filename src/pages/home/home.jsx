import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSlider from "./heroSlider";
import ExperienceSection from "./ExperienceSection";
import WeddingGallery from "./weddingGallery";
import WeddingServices from "./WeddingService";
import ContactSection from "./contactUs";

const Home = () => {
  return (
    <div>
     <Navbar />
      <HeroSlider />
      <ExperienceSection />
      <WeddingGallery />
      <WeddingServices />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
