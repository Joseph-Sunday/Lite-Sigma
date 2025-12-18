import { useThemeContext } from "../context/ThemeContexts";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import "../css/NavBar.css";
import "../css/App.css";

const Sidenav = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    const el = document.getElementById("rightSideNav");
    if (!el) return;

    let instance = Offcanvas.getInstance(el);

    if (!instance) {
      instance = new Offcanvas(el);
    }

    // Wait for offcanvas to fully close before hiding instance
    el.addEventListener(
      "hidden.bs.offcanvas",
      () => {
        // Remove Backdrop
        const backdrop = document.querySelector(".offcanvas-backdrop");
        backdrop?.remove();

        // Restore Scrolling(unlock page)
        document.body.style.overflow = "";
        document.body.classList.remove("modal-open");

        navigate(path);
      },
      { once: true }
    );

    instance?.hide();
  };

  return (
    <div>
      <div
        className={`offcanvas offcanvas-end custom-sidenav ${
          theme === "dark" ? "navbar-side-bg" : "navbar-side-bg"
        } `}
        tabIndex="-1"
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
              <button
                to="/"
                className="navbar-li-text nav-link fs-6"
                onClick={() => handleNavigate("/")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                to="/services"
                className="navbar-li-text nav-link fs-6 mt-1"
                onClick={() => handleNavigate("/services")}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button
                to="/"
                className="navbar-li-text nav-link fs-6 mt-1"
                onClick={() => handleNavigate("/")}
              >
                Products
              </button>
            </li>
            <li className="nav-item">
              <button
                to="/"
                className="navbar-li-text nav-link fs-6 mt-1"
                onClick={() => handleNavigate("/")}
              >
                Blog
              </button>
            </li>
            <li className="nav-item">
              <button
                to="/"
                className="navbar-li-text nav-link fs-6 mt-1"
                onClick={() => handleNavigate("/")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
