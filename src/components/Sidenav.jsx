import { useThemeContext } from "../context/ThemeContexts";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import "../css/App.css";

const Sidenav = () => {
  const { theme } = useThemeContext();
  return (
    <div>
      <div
        className={`offcanvas offcanvas-end custom-sidenav ${
          theme === "dark" ? "navbar-side-bg" : "navbar-side-bg"
        } `}
        tabindex="-1"
        id="rightSideNav"
      >
        <div className="offcanvas-header d-flex justify-content-end align-item-center">
          <button
            type="button"
            className={` bi bi-list fs-3 navbar-side-bg border-0 text-reset ${
              theme === "dark" ? "navbar-text" : "text-dark"
            }`}
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="navbar-li-text nav-link fs-6">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-li-text nav-link fs-6 mt-1">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-li-text nav-link fs-6 mt-1">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-li-text nav-link fs-6 mt-1">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-li-text nav-link fs-6 mt-1">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
