import { Info, Leaf, Users as Users2, ShoppingBag, Mail, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { path: "/", icon: <Home className="w-5 h-5" />, label: "Inicio" },
    { path: "/about", icon: <Info className="w-5 h-5" />, label: "Nosotros" },
    { path: "/proceso", icon: <Leaf className="w-5 h-5" />, label: "Proceso" },
    { path: "/socios", icon: <Users2 className="w-5 h-5" />, label: "Socios" },
    {
      path: "/sostenibilidad",
      icon: <Leaf className="w-5 h-5" />,
      label: "Sosten.",
    },
    { path: "/compra", icon: <ShoppingBag className="w-5 h-5" />, label: "Compra" },
    { path: "/contacto", icon: <Mail className="w-5 h-5" />, label: "Contacto" },
  ];

  return (
    <>
      {/* ✅ LOGO FIJO ARRIBA DERECHA (menos en Inicio) */}
      {!isHome && (
        <Link
          to="/"
          aria-label="Ir al inicio"
          className="fixed top-4 right-6 z-50 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://res.cloudinary.com/ds2scyclq/image/upload/f_auto,q_auto,w_350/v1761594171/logocafe_bzmpor.webp"
            alt="Café Dúe"
            className="w-24 md:w-28 h-auto object-contain drop-shadow-xl"
            loading="lazy"
          />
        </Link>
      )}

      {/* ✅ NAV INFERIOR ORIGINAL */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <nav className="mx-auto max-w-5xl mb-6 px-3">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2 items-stretch justify-items-stretch justify-center bg-neutral-50/95 backdrop-blur rounded-2xl p-2 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-2 rounded-xl py-2 px-4 w-full transition font-sans shadow-sm ${
                  location.pathname === item.path
                    ? "bg-brand-800 text-white shadow-lg"
                    : "text-brand-700 hover:bg-neutral-200 hover:shadow-lg"
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
