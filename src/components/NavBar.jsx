import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContexts";
import { useLocation } from "react-router-dom";
import "../css/App.css";
import "../css/NavBar.css";

const NavBar = () => {
  const { theme, toggleTheme } = useThemeContext();
  const location = useLocation();

  return (
    <>
      <nav className="container-fluid navbar navbar-expand-md fixed-top px-lg-4 py-2 py-lg-0 pt-lg-1 navbar-side-bg">
        <div className="container-fluid px-5 px-lg-1 d-flex justify-content-between align-items-center">
          <div className="px-3">
            <Link to="/" className="navbar-brand navbar-text">
              {theme === "dark" ? (
                <img
                  src="/LiteSigmaDark.png"
                  alt="Lite Sigma"
                  className="navbrand"
                />
              ) : (
                <img
                  src="/LiteSigma.png"
                  alt="Lite Sigma"
                  className="navbrand"
                />
              )}
            </Link>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group me-auto">
              <button
                type="button"
                onClick={toggleTheme}
                className="btn-sml nav-btn-toggle-modes navbar-side-bg mx-1 fs-sml d-flex justify-content-center align-items-center"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </div>

            <div className="d-lg-none">
              <button
                className="btn navbar-text py-0 px-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#rightSideNav"
              >
                <strong>
                  <i className="bi bi-list fs-3"></i>
                </strong>
              </button>
            </div>

            <div className="d-none d-lg-block me-auto mx-3">
              <ul className="navbar-nav me-auto gap-2">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link navbar-li-text ${
                      location.pathname === "/" ? "active-link" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className={`nav-link navbar-li-text ${
                      location.pathname === "/service" ? "active-link" : ""
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link navbar-li-text">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link navbar-li-text">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link navbar-li-text">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
