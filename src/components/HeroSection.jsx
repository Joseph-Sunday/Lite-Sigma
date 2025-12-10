import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingTexts = [
  "INNOVATIVE TECH SOLUTIONS",
  "POWERFUL SAAS TOOLS",
  "SCALABLE SYSTEMS",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section">
        <img
          src="/LiteSigmaHeroSection.png"
          alt="Lite Sigma Hero Section"
          className="hero-section-poster"
        />

        <div className="hero-section-overlay">
          <div className="hero-title-wrapper container-fluid">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="hero-section-orange-animation"
            />

            <motion.h1
              className="hero-section-title text-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.2 }}
            >
              SCALE YOUR BUSINESS WITH
            </motion.h1>
          </div>

          <div className="hero-section-rotating-wrapper" aria-hidden="false">
            <AnimatePresence mode="wait">
              <motion.h1
                className="hero-section-rotating-texts text-light"
                key={index}
                data-text={rotatingTexts[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {rotatingTexts[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-center d-inline-block hero-section-p">
            We design secure payment systems, payment platforms and digital
            tools that enable companies grow faster, smarter and more reliable
            in today's market.
          </p>

          <div className="container-fluid hero-section-btn d-flex justify-content-center align-items-center gap-2 gap-md-3">
            <button className="btn text-light" type="button">
              Get Started
            </button>
            <button className="btn" type="button">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
