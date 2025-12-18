import "../css/App.css";
import "../css/Home.css";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Home");

  return (
    <>
      <HeroSection />
      <MainSection />
    </>
  );
};

export default Home;
