import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import "./css/NavBar.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <Sidenav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
