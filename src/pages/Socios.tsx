import { MapPin, Coffee, Users, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, type RefObject } from "react";
import { createClient } from "@supabase/supabase-js";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import SocioDetailModal from "../components/SocioDetailModal";

const SCROLL_STEP = 320;
const AUTO_SCROLL_INTERVAL_MS = 5000;

const defaultSupabaseUrl = "https://kmfavmqealpmrpdwlrqi.supabase.co";
const defaultSupabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZmF2bXFlYWxwbXJwZHdscnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDI0MjEsImV4cCI6MjA3NTA3ODQyMX0.Vu9ANfcm0ZvaH29soN-XQfOghFOChZV49-vs3oahfjU";

const resolvedSupabaseUrl =
  import.meta.env.VITE_SUPABASE_URL?.trim() || defaultSupabaseUrl;
const resolvedSupabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() || defaultSupabaseAnonKey;

const supabase = createClient(resolvedSupabaseUrl, resolvedSupabaseAnonKey, {
  auth: { persistSession: false },
});

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn(
    "Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY; usando las credenciales predeterminadas para cargar socios. Configura las variables para apuntar a tu propio proyecto en producción."
  );
}

interface SocioProfile {
  id: string;
  name: string;
  profile_image: string;
  farm_name: string;
  location: string;
  hectares: number | null;
  years_experience: string;
  specialty: string;
  story: string;
  coffee_varieties: string[];
  production_volume: string;
  certifications: string[];
  contact_phone: string;
  display_order: number;
  is_featured: boolean;
}

export default function Socios() {
  const [socios, setSocios] = useState<SocioProfile[]>([]);
  const [featuredSociosList, setFeaturedSociosList] = useState<SocioProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFeatured, setIsLoadingFeatured] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredError, setFeaturedError] = useState<string | null>(null);
  const [selectedSocio, setSelectedSocio] = useState<SocioProfile | null>(null);
  const [email, setEmail] = useState("");
  const featuredScrollRef = useRef<HTMLDivElement>(null);
  const directoryScrollRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const normalizeTextArray = (value: unknown) => {
    if (Array.isArray(value)) {
      return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
    }

    if (typeof value === "string") {
      const trimmed = value.trim();
      if (!trimmed) return [];

      const cleaned = trimmed
        .replace(/^[{\[]/, "")
        .replace(/[}\]]$/, "")
        .replace(/"/g, "");

      return cleaned
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
    }

    return [];
  };

  const normalizeBoolean = (value: unknown) => {
    if (typeof value === "boolean") {
      return value;
    }

    if (typeof value === "number") {
      return value === 1;
    }

    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();

      if (!normalized) return false;

      if (["true", "t", "1", "yes", "y", "si", "sí"].includes(normalized)) {
        return true;
      }

      if (["false", "f", "0", "no", "n"].includes(normalized)) {
        return false;
      }
    }

    return false;
  };

  const parseNullableNumber = (value: unknown): number | null => {
    if (value === null || value === undefined || value === "") {
      return null;
    }

    if (typeof value === "number") {
      return Number.isFinite(value) ? value : null;
    }

    if (typeof value === "string") {
      const match = value.trim().match(/-?\d+[\.,]?\d*/);

      if (!match) return null;

      const normalized = match[0].replace(",", ".");
      const parsed = Number.parseFloat(normalized);
      return Number.isNaN(parsed) ? null : parsed;
    }

    return null;
  };

  const normalizeSocio = (record: Record<string, unknown>): SocioProfile => ({
    id: String(record.id ?? ""),
    name: String(record.name ?? ""),
    profile_image: typeof record.profile_image === "string" ? record.profile_image : "",
    farm_name: String(record.farm_name ?? ""),
    location: String(record.location ?? ""),
    hectares: parseNullableNumber(record.hectares),
    years_experience:
      record.years_experience === null || record.years_experience === undefined
        ? ""
        : String(record.years_experience),
    specialty: String(record.specialty ?? ""),
    story: String(record.story ?? ""),
    coffee_varieties: normalizeTextArray(record.coffee_varieties),
    production_volume:
      record.production_volume === null || record.production_volume === undefined
        ? ""
        : String(record.production_volume),
    certifications: normalizeTextArray(record.certifications),
    contact_phone:
      record.contact_phone === null || record.contact_phone === undefined
        ? ""
        : String(record.contact_phone),
    display_order:
      typeof record.display_order === "number"
        ? record.display_order
        : Number.parseInt(String(record.display_order ?? "0"), 10) || 0,
    is_featured: normalizeBoolean(record.is_featured),
  });

  useEffect(() => {
    fetchSocios();
  }, []);

  const fetchSocios = async () => {
    setIsLoading(true);
    setIsLoadingFeatured(true);

    try {
      if (!supabase) {
        const message =
          "No se pudo cargar la información de los socios porque faltan las credenciales de Supabase.";
        console.error(message);
        setError(message);
        setFeaturedError(message);
        setSocios([]);
        setFeaturedSociosList([]);
        return;
      }

      const { data, error: supabaseError } = await supabase
        .from("socios_profiles")
        .select("*")
        .order("display_order", { ascending: true });

      if (supabaseError) {
        console.error("Error Supabase socios_profiles:", supabaseError);
        const supabaseMessage = supabaseError.message || "Error desconocido de Supabase";
        setError(`No se pudo cargar la información de los socios: ${supabaseMessage}`);
        setFeaturedError(`No se pudo cargar la información de los socios destacados: ${supabaseMessage}`);
        setSocios([]);
        setFeaturedSociosList([]);
        return;
      }

      const normalizedSocios = (data ?? []).map((record) =>
        normalizeSocio(record as Record<string, unknown>)
      );

      const orderedSocios = [...normalizedSocios].sort(
        (a, b) => a.display_order - b.display_order
      );

      const highlightedSocios = orderedSocios.filter((socio) => socio.is_featured);
      const fallbackFeatured =
        highlightedSocios.length > 0 ? highlightedSocios : orderedSocios.slice(0, 21);

      setSocios(orderedSocios);
      setFeaturedSociosList(fallbackFeatured);
      setError(null);
      setFeaturedError(null);
    } finally {
      setIsLoading(false);
      setIsLoadingFeatured(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const clearExistingInterval = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };

    clearExistingInterval();

    if (!featuredScrollRef.current || featuredSociosList.length <= 1) {
      return () => {
        clearExistingInterval();
      };
    }

    const intervalId = window.setInterval(() => {
      const container = featuredScrollRef.current;

      if (!container) {
        return;
      }

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (maxScrollLeft <= 0) {
        return;
      }

      const nextScrollLeft = container.scrollLeft + SCROLL_STEP;

      if (nextScrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        container.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL_MS);

    autoScrollIntervalRef.current = intervalId;

    return () => {
      clearInterval(intervalId);
      autoScrollIntervalRef.current = null;
    };
  }, [featuredSociosList]);

  const scroll = (ref: RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (!ref.current) return;

    const newScrollLeft =
      ref.current.scrollLeft + (direction === "left" ? -SCROLL_STEP : SCROLL_STEP);

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

        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800 text-center">Perfiles destacados</h2>

          {isLoadingFeatured ? (
            <div className="py-12 text-center text-neutral-500 font-sans">Cargando perfiles destacados…</div>
          ) : featuredError ? (
            <div className="py-12 text-center text-red-600 font-semibold font-sans">{featuredError}</div>
          ) : featuredSociosList.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 font-sans">
              No hay socios destacados disponibles por el momento.
            </div>
          ) : (
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
                {featuredSociosList.map((socio) => (
                  <div key={socio.id} className="flex-shrink-0 w-80">
                    <Card
                      className="hover:shadow-lg transition cursor-pointer h-full"
                      onClick={() => setSelectedSocio(socio)}
                    >
                      <CardHeader>
                        {socio.profile_image ? (
                          <img
                            src={socio.profile_image}
                            alt={socio.name}
                            className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                          />
                        ) : (
                          <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center text-3xl font-bold text-brand-800 mb-4 mx-auto">
                            {socio.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        )}
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
                            <span className="font-medium">
                              {socio.hectares !== null ? `${socio.hectares} ha` : "-"}
                            </span>
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
          )}
        </div>

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
