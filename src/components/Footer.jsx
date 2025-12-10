import "../css/App.css";
import "../css/Footer.css";
import { useThemeContext } from "../context/ThemeContexts";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <footer>
      <section className="footer-section row g-1 g-md-3">
        <div className="footer-section-container col-12 col-sm-6 col-md-4 col-lg-3">
          {theme === "dark" ? (
            <img
              src="/LiteSigmaDark.png"
              alt="Lite Sigma"
              className="navbrand"
            />
          ) : (
            <img src="/LiteSigma.png" alt="Lite Sigma" className="navbrand" />
          )}

          <p className="navbar-li-text mt-3 ">
            Lite Sigma delivering business solutions
          </p>
        </div>
        <div className="footer-section-container-2 footer-container footer-container-text-hover col-12 col-sm-6 col-md-4 col-lg-3">
          <h6>Company</h6>
          <Link to="/" className="underline-none">
            <p className="navbar-li-text">Products</p>
          </Link>
          <Link to="/" className="underline-none">
            <p className="navbar-li-text">Services</p>
          </Link>
          <Link to="/" className="underline-none">
            <p className="navbar-li-text">Contacts</p>
          </Link>
        </div>
        <div className="footer-section-container-3 footer-container footer-container-text-hover col-12 col-sm-6 col-md-4 col-lg-3">
          <h6>Support</h6>
          <p className="navbar-li-text">Community</p>
          <p className="navbar-li-text">FAQs</p>
          <p className="navbar-li-text">Privacy Policy</p>
        </div>
        <div className="footer-section-container-4 footer-container footer-container-text-hover col-12 col-sm-6 col-md-4 col-lg-3">
          <h6>Get in Touch</h6>
          <p className="navbar-li-text px-2">info@litesigma.com</p>
          <p className="navbar-li-text px-2">+234 80 3968 8395</p>
          <p className="navbar-li-text px-2">
            Suite 11A, Midway Plaza, Finance Quarters, Wuye District, Abuja.
          </p>
        </div>
      </section>
      <hr className="mt-5" />
      <div className="footer-section-container-5 footer-container d-flex justify-content-between align-items-center">
        <p className="navbar-li-text fs-sml">
          © 2026 LiteSigma. All rights reserved.
        </p>
        <button type="button" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}></button>
      </div>
    </footer>
  );
};

export default Footer;
