import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import "./css/NavBar.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Sidenav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
