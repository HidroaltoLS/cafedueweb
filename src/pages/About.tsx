import { Coffee, Target, Eye, Heart, Users, MapPin } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function About() {
  // Foto principal de la asociación (con transformaciones 16:9)
  const RAW_ABOUT_IMG =
    "https://res.cloudinary.com/ds2scyclq/image/upload/v1761602449/DSC01386_usygwz.webp";
  const aboutImg = RAW_ABOUT_IMG.replace(
    "/upload/",
    "/upload/f_auto,q_auto,dpr_auto,ar_16:9,c_fill,w_1600/"
  );

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      {/* HERO */}
      <div className="relative bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nosotros</h1>
          <p className="text-xl text-white/90 max-w-3xl font-sans">
            Somos una asociación de cafetaleros comprometidos con la excelencia, la sostenibilidad y el desarrollo comunitario.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Historia */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-brand-800 text-center">Nuestra historia</h2>
            <div className="prose max-w-none">
              <p className="text-neutral-700 mb-4 leading-relaxed font-sans text-justify">
                Café Dúe nace como un proyecto de fortalecimiento cafetalero impulsado por HidroAlto S.A., en colaboración con los agricultores de la zona de influencia del proyecto hidroeléctrico en Gonzalo Pizarro, Sucumbíos, Ecuador. Durante generaciones, estas familias han cultivado café robusta de especialidad en las estribaciones del Parque Nacional Cayambe-Coca, entre los 400 y 900 msnm.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed font-sans text-justify">
                En 2022, gracias al apoyo de Hidroalto S.A., los productores formalizamos nuestra asociación para mejorar la calidad de vida de nuestras familias y fortalecer la producción de este café único. Así nació nuestra asociación, con la visión de llevar nuestro robusta de especialidad directamente al mercado, garantizando precios justos y excelencia.
              </p>
              <p className="text-neutral-700 leading-relaxed font-sans text-justify">
                Hoy somos aproximadamente 40 socios que trabajamos bajo principios de sostenibilidad, calidad y comercio justo. Nuestro café ha comenzado a posicionarse, llevando con orgullo el nombre de nuestra tierra a cada taza.
              </p>
            </div>
          </div>

          {/* Imagen con efecto premium + etiqueta flotante */}
          <div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl border border-white/20 group mb-6 bg-neutral-200">
              <img
                src={aboutImg}
                alt="Asociación Café Dúe en campo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-brand-700 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
                Asociación Café Dúe
              </span>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-2 font-sans">
                  Gonzalo Pizarro, Sucumbíos, Ecuador
                </p>
                <p className="text-sm text-neutral-600 font-sans">
                  Zona de amortiguamiento del Parque Nacional Cayambe-Coca
                </p>
                <p className="text-sm text-neutral-500 mt-2 font-sans">Altitud: 400 - 900 msnm</p>
                <p className="text-sm text-neutral-500 mt-1 font-sans">Café Robusta de Especialidad</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 font-sans text-justify">
                Producir y comercializar café robusta de especialidad de alta calidad, generando valor compartido entre productores y consumidores, mientras protegemos el ecosistema del Parque Nacional Cayambe-Coca.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 font-sans text-justify">
                Ser referentes regionales en producción de café robusta de especialidad sostenible y trazable, mejorando la calidad de vida de nuestros productores y posicionando el café amazónico ecuatoriano en el mercado nacional e internacional.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-eco-100 rounded-full flex items-center justify-center text-eco-700 mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <CardTitle>Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-neutral-700 font-sans space-y-2">
                <li className="flex items-start justify-center">
                  <span className="text-eco-600 mr-2">•</span>
                  <span className="text-left">Trabajo colaborativo de todos los miembros de la asociación</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-eco-600 mr-2">•</span>
                  <span className="text-left">Respeto por la naturaleza trabajando en el Parque Nacional Cayambe-Coca</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-eco-600 mr-2">•</span>
                  <span className="text-left">Inclusión de todos los miembros de la comunidad y las mingas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Impacto */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="w-6 h-6" />
              Nuestro impacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Social</h3>
                <ul className="space-y-2 text-neutral-700 font-sans">
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Empleo digno para nuestros 40 socios
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Educación técnica continua para productores
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Precios justos sin intermediarios
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Fortalecimiento del tejido comunitario
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Ambiental</h3>
                <ul className="space-y-2 text-neutral-700 font-sans">
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Conservación de 100+ hectáreas de bosque
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Tratamiento responsable de aguas residuales
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Cero uso de agroquímicos sintéticos
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    Protección de fauna y flora nativa
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Por qué elegirnos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif">¿Por qué elegirnos?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Trazabilidad completa</h4>
                  <p className="text-sm text-neutral-700 font-sans">
                    Conoce exactamente de qué finca proviene tu café, quién lo cultivó y cómo fue procesado.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frescura garantizada</h4>
                  <p className="text-sm text-neutral-700 font-sans">
                    Tostado reciente y empaque que preserva todos los aromas y sabores de origen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Café robusta de especialidad</h4>
                  <p className="text-sm text-neutral-700 font-sans">
                    Cultivado entre 400 y 900 msnm, en condiciones ideales para café de especialidad.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Impacto positivo</h4>
                  <p className="text-sm text-neutral-700 font-sans">
                    Tu compra apoya directamente a familias productoras y contribuye a la conservación ambiental.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sabor único</h4>
                  <p className="text-sm text-neutral-700 font-sans">
                    Notas amazónicas: cuerpo medio, acidez balanceada y toques florales (cata 84.75).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certificaciones</h4>
                  <p className="text-sm text-neutral-700 font-sans">
                    Respaldados por BPA y autorización del Parque Nacional Cayambe-Coca.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Navigation />
      <Footer />
    </div>
  );
}
