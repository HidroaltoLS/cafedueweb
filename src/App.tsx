import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Proceso from "./pages/Proceso";
import Socios from "./pages/Socios";
import Sostenibilidad from "./pages/Sostenibilidad";
import Compra from "./pages/Compra";
import Contacto from "./pages/Contacto";
import Navigation from "./components/Navigation";
import SocialWidget from "./components/SocialWidget";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SocialWidget /> {/* ✅ Ahora aparece también en Home */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/socios" element={<Socios />} />
        <Route path="/sostenibilidad" element={<Sostenibilidad />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Navigation /> {/* ✅ Menú fijo abajo */}
    </Router>
  );
}
