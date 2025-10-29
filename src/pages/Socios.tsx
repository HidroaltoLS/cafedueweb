import { MapPin, Coffee, Users, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import SocioDetailModal from "../components/SocioDetailModal";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface SocioProfile {
  id: string;
  name: string;
  profile_image: string;
  farm_name: string;
  location: string;
  hectares: number;
  years_experience: number;
  specialty: string;
  story: string;
  coffee_varieties: string[];
  production_volume: string;
  certifications: string[];
  contact_phone: string;
  display_order: number;
}

export default function Socios() {
  const [socios, setSocios] = useState<SocioProfile[]>([]);
  const [selectedSocio, setSelectedSocio] = useState<SocioProfile | null>(null);
  const [email, setEmail] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchSocios();
  }, []);

  const fetchSocios = async () => {
    const { data, error } = await supabase
      .from("socios_profiles")
      .select("*")
      .eq("is_featured", true)
      .order("display_order", { ascending: true });

    if (error) {
      console.error("Error fetching socios:", error);
      return;
    }

    if (data) {
      setSocios(data);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593981369582", "_blank");
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="relative bg-gradient-to-br from-eco-900 to-eco-700 text-white py-16">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nuestros Socios</h1>
          <p className="text-xl text-white/90 max-w-3xl font-sans">
            Conoce a los agricultores que hacen posible Café Dúe. Familias comprometidas con la calidad y el medio ambiente.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 mx-auto mb-3 text-eco-700" />
              <div className="text-3xl font-bold text-brand-800">40</div>
              <div className="text-neutral-700 font-sans">Socios productores</div>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-3 text-eco-700" />
              <div className="text-3xl font-bold text-brand-800">200+</div>
              <div className="text-neutral-700 font-sans">Hectáreas cultivadas</div>
            </div>
            <div>
              <Coffee className="w-12 h-12 mx-auto mb-3 text-eco-700" />
              <div className="text-3xl font-bold text-brand-800">2,500+</div>
              <div className="text-neutral-700 font-sans">Quintales por año</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800 text-center">Perfiles destacados</h2>
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-neutral-100 transition"
            >
              <ChevronLeft className="w-6 h-6 text-brand-700" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {socios.map((socio) => (
                <div
                  key={socio.id}
                  className="flex-shrink-0 w-80"
                >
                  <Card
                    className="hover:shadow-lg transition cursor-pointer h-full"
                    onClick={() => setSelectedSocio(socio)}
                  >
                    <CardHeader>
                      <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center text-3xl font-bold text-brand-800 mb-4 mx-auto">
                        {socio.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <CardTitle className="text-center font-serif">{socio.name}</CardTitle>
                      <p className="text-center text-brand-700 font-medium font-sans">{socio.farm_name}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-neutral-700 font-sans justify-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {socio.location}
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-700 font-sans">Extensión:</span>
                          <span className="font-medium">{socio.hectares} ha</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-700 font-sans">Cargas Familiares:</span>
                          <span className="font-medium">{socio.production_volume}</span>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-700 font-sans leading-relaxed line-clamp-3">
                        {socio.story}
                      </p>
                      <p className="text-xs text-brand-600 font-medium mt-3 text-center">
                        Click para ver más
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-neutral-100 transition"
            >
              <ChevronRight className="w-6 h-6 text-brand-700" />
            </button>
          </div>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-left">¿Quieres unirte a nuestra asociación?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 font-sans mb-6 text-left">
              Si eres productor de café robusta en la región del Parque Nacional Cayambe-Coca y compartes nuestros valores de sostenibilidad y calidad, nos encantaría conocerte.
            </p>
            <div className="bg-eco-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-left">Beneficios de ser socio:</h4>
              <ul className="list-disc ml-6 text-sm text-neutral-700 font-sans space-y-1">
                <li>Capacitación técnica continua</li>
                <li>Acceso a certificaciones</li>
                <li>Mejores precios por tu café</li>
                <li>Apoyo en implementación de prácticas sostenibles</li>
                <li>Comercialización directa</li>
                <li>Respaldo de Hidroalto S.A.</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-brand-200 rounded-lg p-6">
              <h4 className="font-semibold mb-4 text-center text-brand-800">Contáctanos para más información</h4>
              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700 font-sans">
                    Tu correo electrónico
                  </label>
                  <Input
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-eco-600 hover:bg-eco-700 text-white flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contactar por WhatsApp
                </Button>
                <p className="text-xs text-neutral-600 text-center font-sans">
                  Al hacer click, se abrirá WhatsApp para comunicarte directamente con nosotros
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {selectedSocio && (
        <SocioDetailModal
          socio={selectedSocio}
          onClose={() => setSelectedSocio(null)}
        />
      )}

      <Navigation />
      <Footer />
    </div>
  );
}
