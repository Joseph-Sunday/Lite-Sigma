import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <img
          src="/LiteSigmaHeroSection.png"
          alt="Lite Sigma Hero Section"
          className="hero-section-poster"
        />

        <div className="hero-section-overlay">
          <div className="hero-title-wrapper">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="hero-section-orange-animation"
            />

            <motion.h1
              className="hero-section-title text-light text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              SCALE YOUR BUSINESS WITH
            </motion.h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
