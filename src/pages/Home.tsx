import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
  backgroundImage:
    "url(https://res.cloudinary.com/ds2scyclq/image/upload/f_auto,q_auto,w_1920,c_fill/Cafe_djyjvs.webp)",
}}
      />
      <div className="absolute inset-0 -z-0 bg-black/35" />

      <header className="w-full px-6 py-4 flex items-center justify-between relative z-10">
  <Link to="/" className="flex items-center">
    <img
      src="https://res.cloudinary.com/ds2scyclq/image/upload/f_auto,q_auto,w_140/v1761594171/logocafe_bzmpor.webp"
      alt="Café Dúe"
      className="w-14 h-14 object-contain drop-shadow-lg"
    />
  </Link>
</header>

      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-start justify-center min-h-[70vh]">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">
          Café Dúe
        </h2>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/95 drop-shadow font-sans">
          Café robusta de especialidad amazónico con trazabilidad y sostenibilidad, apoyando a los cafetaleros para mejorar su calidad de vida.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/compra"
            className="bg-white/10 backdrop-blur text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
          >
            Comprar café
          </Link>
          <Link
            to="/proceso"
            className="bg-white/10 backdrop-blur text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
          >
            Conocer nuestro proceso
          </Link>
        </div>
      </div>

<Navigation />
    </div>
  );
}
