import { X, MapPin, Users, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

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

interface SocioDetailModalProps {
  socio: SocioProfile;
  onClose: () => void;
}

export default function SocioDetailModal({ socio, onClose }: SocioDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-brand-800">{socio.name}</h2>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            {socio.profile_image ? (
              <img
                src={socio.profile_image}
                alt={socio.name}
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <div className="w-32 h-32 bg-brand-100 rounded-full flex items-center justify-center text-4xl font-bold text-brand-800">
                {socio.name.split(" ").map(n => n[0]).join("")}
              </div>
            )}
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-serif font-bold text-brand-700 mb-1">{socio.farm_name}</h3>
            <p className="text-eco-700 font-medium font-sans">{socio.specialty}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-eco-600" />
                  <span className="text-sm font-semibold">Ubicación</span>
                </div>
                <p className="text-sm text-neutral-700 font-sans">{socio.location}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-eco-600" />
                  <span className="text-sm font-semibold">Extensión</span>
                </div>
                <p className="text-sm text-neutral-700 font-sans">{socio.hectares} hectáreas</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-eco-600" />
                  <span className="text-sm font-semibold">Meses de cosecha</span>
                </div>
                <p className="text-sm text-neutral-700 font-sans">{socio.years_experience}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-eco-600" />
                  <span className="text-sm font-semibold">Cargas Familiares</span>
                </div>
                <p className="text-sm text-neutral-700 font-sans">{socio.production_volume}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold font-serif mb-2 text-brand-800">Historia</h4>
            <p className="text-neutral-700 font-sans leading-relaxed text-sm">{socio.story}</p>
          </div>

          {socio.coffee_varieties.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold font-serif mb-2 text-brand-800">Variedades de Café</h4>
              <div className="flex flex-wrap gap-2">
                {socio.coffee_varieties.map((variety, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-sans"
                  >
                    {variety}
                  </span>
                ))}
              </div>
            </div>
          )}

          {socio.certifications.length > 0 && (
            <div>
              <h4 className="font-semibold font-serif mb-2 text-brand-800">Certificaciones</h4>
              <div className="flex flex-wrap gap-2">
                {socio.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-eco-100 text-eco-700 rounded-full text-sm font-sans"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
