import "../css/App.css";
import "../css/Home.css";
import ServicesHeroSection from "../components/ServicesHeroSection";
import ServicesMain from "../components/ServicesMain";
import usePageTitle from "../hooks/usePageTitle";

const Services = () => {
  usePageTitle("Services");

  return (
    <>
      <ServicesHeroSection />
      <ServicesMain />
    </>
  );
};

export default Services;
