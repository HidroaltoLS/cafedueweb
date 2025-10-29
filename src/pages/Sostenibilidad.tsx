import { Leaf, Droplets, Recycle, TreePine, Sun, Wind, Award, CheckCircle, FileCheck, Shield } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Sostenibilidad() {
  const practicas = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Conservación forestal",
      description:
        "Nuestras fincas están ubicadas dentro del Parque Nacional Cayambe-Coca. Mantenemos árboles nativos para sombra y preservamos corredores biológicos para la fauna local.",
      image: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761748984/hyvp5f9kcejoyp3h31ty_j70eia.webp",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Gestión del agua",
      description:
        "Implementamos sistemas eficientes de tratamiento de aguas residuales del beneficiado húmedo. El agua tratada se recircula o se devuelve limpia al ecosistema.",
      image: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761748990/uzyyvk01spzdag5zhlou_otk5xt.webp",
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Economía circular",
      description:
        "La cáscara y pulpa del café se transforman en compost de alta calidad. Cero desperdicio: todo vuelve a nutrir la tierra.",
      image: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761748981/b3jluumeelmyqhlhasnt_zpnkvp.webp",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Agricultura orgánica",
      description:
        "Abonos orgánicos, control biológico de plagas y cero uso de químicos sintéticos. Café limpio para ti y para el planeta.",
      image: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761748986/of2u75ycdxtpe23bdt0l_rsranl.webp",
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Energía renovable",
      description:
        "Secado solar y uso eficiente de energía en todas nuestras instalaciones. Reducción continua de nuestra huella de carbono.",
      image: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761748988/uqdtdg02ikertja3njpx_jza07j.webp",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Biodiversidad",
      description:
        "Cultivo bajo sombra que protege especies nativas. Nuestras fincas son refugio para aves migratorias y fauna endémica.",
      image: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761748991/zsd6tyfafkgq6umemgao_x0pzqb.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="relative bg-gradient-to-br from-eco-900 to-eco-700 text-white py-16">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Sostenibilidad y Certificaciones</h1>
          <p className="text-xl text-white/90 max-w-3xl font-sans">
            Nuestro compromiso con el planeta y las futuras generaciones. Café que cuida el ecosistema del Parque
            Nacional Cayambe-Coca, respaldado por certificaciones oficiales.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-eco-50 rounded-lg p-8 mb-12 border-l-4 border-eco-600">
          <h2 className="text-2xl font-serif font-bold mb-4 text-eco-900 text-left">
            Producción responsable en área protegida
          </h2>
          <p className="text-neutral-700 font-sans leading-relaxed text-left">
            Operamos bajo estrictas normas ambientales dentro del Parque Nacional Cayambe-Coca, una de las áreas
            protegidas más importantes de Ecuador. Cada proceso productivo está diseñado para minimizar impactos y
            maximizar beneficios para el ecosistema.
          </p>
        </div>

        {/* Prácticas sostenibles */}
        <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800 text-center">Nuestras prácticas sostenibles</h2>

        <div className="space-y-8 mb-12">
          {practicas.map((practica, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Imagen 16:9 */}
                  <div
                    className={`overflow-hidden rounded-lg aspect-video ${
                      index % 2 === 0 ? "order-1" : "order-1 md:order-2"
                    }`}
                  >
                    <img
                      src={practica.image}
                      alt={practica.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Texto */}
                  <div
                    className={`p-8 flex flex-col justify-center ${
                      index % 2 === 0 ? "order-2" : "order-2 md:order-1"
                    }`}
                  >
                    <h3 className="text-2xl font-serif font-bold mb-4 text-brand-800 flex items-center gap-3">
                      <span>{practica.icon}</span> {practica.title}
                    </h3>
                    <p className="text-neutral-700 font-sans leading-relaxed">{practica.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impacto positivo */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">Impacto positivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-eco-700 mb-2">100%</div>
                <div className="text-sm text-neutral-700 font-sans">Residuos reciclados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-700 mb-2">0</div>
                <div className="text-sm text-neutral-700 font-sans">Químicos sintéticos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-700 mb-2">50+</div>
                <div className="text-sm text-neutral-700 font-sans">Especies protegidas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-700 mb-2">40</div>
                <div className="text-sm text-neutral-700 font-sans">Familias beneficiadas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calidad y certificaciones */}
        <div className="mt-16">
          <div className="bg-brand-50 rounded-lg p-6 mb-12 border-l-4 border-brand-600">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-brand-700 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif font-bold mb-2 text-brand-900 text-center">
                  Calidad certificada y verificable
                </h2>
                <p className="text-neutral-700 font-sans text-center">
                  Todas nuestras certificaciones son auditadas por organismos oficiales y pueden ser verificadas.
                  Trabajamos constantemente en obtener nuevas certificaciones que respalden nuestra promesa de calidad y
                  sostenibilidad.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800 text-center">Certificaciones actuales</h2>
          <div className="space-y-6 mb-12">
            {[
              {
                nombre: "Buenas Prácticas Agrícolas (BPA)",
                organismo: "AGROCALIDAD - Ecuador",
                vigencia: "Vigente hasta 2026",
                descripcion:
                  "Certifica que nuestros procesos de producción cumplen con estándares de inocuidad, trazabilidad y sostenibilidad establecidos por el organismo nacional.",
                beneficios: [
                  "Garantía de inocuidad alimentaria",
                  "Trazabilidad completa del producto",
                  "Uso responsable de insumos agrícolas",
                  "Protección de la salud del trabajador",
                ],
              },
              {
                nombre: "Certificación Parque Nacional Cayambe-Coca",
                organismo: "Ministerio del Ambiente - Ecuador",
                vigencia: "Vigente",
                descripcion:
                  "Autorización especial para producción agrícola sostenible dentro del área protegida. Cumplimiento de normativas ambientales estrictas.",
                beneficios: [
                  "Producción legal en área protegida",
                  "Compromiso con conservación ambiental",
                  "Monitoreo continuo de impacto ecológico",
                  "Apoyo técnico institucional",
                ],
              },
            ].map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 flex-shrink-0">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif mb-2">{cert.nombre}</CardTitle>
                        <p className="text-sm text-neutral-700 font-sans">{cert.organismo}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-eco-100 text-eco-700 text-xs font-semibold rounded-full">
                          {cert.vigencia}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 font-sans mb-4">{cert.descripcion}</p>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-semibold font-serif mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-eco-600" />
                      Beneficios y garantías
                    </h4>
                    <ul className="space-y-2">
                      {cert.beneficios.map((beneficio, i) => (
                        <li key={i} className="flex items-start text-sm text-neutral-700 font-sans">
                          <span className="text-eco-600 mr-2">✓</span>
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800 text-center">Certificaciones en proceso</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                nombre: "Orgánico Ecuador",
                estado: "En proceso de certificación",
                descripcion: "Certificación de producción orgánica sin uso de agroquímicos sintéticos.",
              },
              {
                nombre: "Fair Trade",
                estado: "Evaluación inicial",
                descripcion: "Comercio justo que garantiza precios justos para productores.",
              },
              {
                nombre: "Rainforest Alliance",
                estado: "En preparación",
                descripcion: "Estándar internacional de sostenibilidad agrícola y forestal.",
              },
            ].map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 mb-3 mx-auto">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-serif text-center">{cert.nombre}</CardTitle>
                  <span className="inline-block mt-2 px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mx-auto">
                    {cert.estado}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700 font-sans text-center">{cert.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-center">Proceso de certificación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 font-sans mb-6 text-center">
                Obtener y mantener certificaciones requiere compromiso continuo y auditorías periódicas. Nuestro equipo
                trabaja constantemente para cumplir y superar los estándares requeridos.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Preparación</h4>
                  <p className="text-sm text-neutral-700 font-sans">Capacitación y documentación</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Auditoría</h4>
                  <p className="text-sm text-neutral-700 font-sans">Inspección de organismos oficiales</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Certificación</h4>
                  <p className="text-sm text-neutral-700 font-sans">Obtención del certificado</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Mantenimiento</h4>
                  <p className="text-sm text-neutral-700 font-sans">Auditorías periódicas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

       <Navigation />
      <Footer />
    </div>
  );
}
