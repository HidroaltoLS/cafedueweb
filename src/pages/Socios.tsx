import { MapPin, Coffee, Users, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, type RefObject } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import SocioDetailModal from "../components/SocioDetailModal";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase: SupabaseClient | null =
  typeof supabaseUrl === "string" &&
  supabaseUrl.length > 0 &&
  typeof supabaseAnonKey === "string" &&
  supabaseAnonKey.length > 0
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

interface SocioProfile {
  id: string;
  name: string;
  profile_image: string;
  farm_name: string;
  location: string;
  hectares: number | null;
  years_experience: number | string;
  specialty: string;
  story: string;
  coffee_varieties: string[];
  production_volume: string;
  certifications: string[];
  contact_phone: string;
  display_order: number;
  is_featured?: boolean | null;
}

export default function Socios() {
  const [socios, setSocios] = useState<SocioProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSocio, setSelectedSocio] = useState<SocioProfile | null>(null);
  const [email, setEmail] = useState("");
  const featuredScrollRef = useRef<HTMLDivElement>(null);
  const directoryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchSocios();
  }, []);

  const fetchSocios = async () => {
    if (!supabase) {
      console.warn("Supabase client no configurado. Omite la carga de socios.");
      setErrorMessage(
        "La información de nuestros socios se mostrará cuando la configuración de datos esté completa."
      );
      setLoading(false);
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("socios_profiles")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      console.error("Error fetching socios:", error);
      setError("No se pudo cargar la información de los socios.");
      setIsLoading(false);
      return;
    }

    setSocios((data ?? []) as SocioProfile[]);
    setError(null);
    setIsLoading(false);
  };

  const scroll = (ref: RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (!ref.current) return;

    const scrollAmount = 320;
    const newScrollLeft =
      ref.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);

    ref.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593981369582", "_blank");
  };

  const featuredSocios = socios.filter((socio) => Boolean(socio.is_featured));

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

        {featuredSocios.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800 text-center">Perfiles destacados</h2>
            <div className="relative">
              <button
                onClick={() => scroll(featuredScrollRef, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-neutral-100 transition"
              >
                <ChevronLeft className="w-6 h-6 text-brand-700" />
              </button>

              <div
                ref={featuredScrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {featuredSocios.map((socio) => (
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
                          {socio.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
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
                onClick={() => scroll(featuredScrollRef, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-neutral-100 transition"
              >
                <ChevronRight className="w-6 h-6 text-brand-700" />
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-800">Directorio de socios</h2>
              <p className="text-sm text-neutral-600 font-sans">
                Desliza para conocer a los 21 socios que forman parte de Café Dúe.
              </p>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scroll(directoryScrollRef, "left")}
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-brand-700 hover:bg-neutral-200 transition"
                aria-label="Socios anteriores"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(directoryScrollRef, "right")}
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-brand-700 hover:bg-neutral-200 transition"
                aria-label="Socios siguientes"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-neutral-500 font-sans">Cargando información…</div>
          ) : error ? (
            <div className="py-12 text-center text-red-600 font-semibold font-sans">{error}</div>
          ) : socios.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 font-sans">No hay socios registrados actualmente.</div>
          ) : (
            <div className="relative">
              <div
                ref={directoryScrollRef}
                className="flex gap-6 overflow-x-auto px-6 py-8 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {socios.map((socio) => (
                  <div key={socio.id} className="flex-shrink-0 w-72">
                    <Card
                      className="h-full hover:shadow-lg transition cursor-pointer"
                      onClick={() => setSelectedSocio(socio)}
                    >
                      <CardHeader className="text-center">
                        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center text-3xl font-bold text-brand-800 mx-auto mb-4">
                          {socio.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <CardTitle className="font-serif text-xl">{socio.name}</CardTitle>
                        <p className="text-brand-700 font-medium font-sans">{socio.farm_name || "Finca no registrada"}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4 text-sm text-neutral-700 font-sans">
                          <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{socio.location || "Sin ubicación"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Extensión:</span>
                            <span className="font-medium">{socio.hectares ? `${socio.hectares} ha` : "-"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Especialidad:</span>
                            <span className="font-medium">{socio.specialty || "-"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Producción:</span>
                            <span className="font-medium">{socio.production_volume || "-"}</span>
                          </div>
                        </div>
                        <p className="text-xs text-brand-600 font-semibold text-center">Haz clic para conocer más</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent hidden md:block" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent hidden md:block" />

              <div className="md:hidden flex justify-center gap-4 pb-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll(directoryScrollRef, "left")}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll(directoryScrollRef, "right")}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
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
