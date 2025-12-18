import { motion, AnimatePresence } from "framer-motion";
import "../css/ServiceHeroSection.css";

const ServicesHeroSection = () => {
  return (
    <>
      <main className="hero-services">
        <section className="hero-section">
          <img
            src="/ServicesHero.png"
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
                LITESIGMA SERVICES
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-center d-inline-block hero-section-p m-3 px-4">
                Delivering secure, scalable digital products and expert services
                that turn ideas into measurable growth.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesHeroSection;
