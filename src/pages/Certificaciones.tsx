import { Award, CheckCircle, FileCheck, Shield } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Certificaciones() {
  const certificaciones = [
    {
      nombre: "Buenas Prácticas Agrícolas (BPA)",
      organismo: "AGROCALIDAD - Ecuador",
      vigencia: "Vigente hasta 2026",
      descripcion: "Certifica que nuestros procesos de producción cumplen con estándares de inocuidad, trazabilidad y sostenibilidad establecidos por el organismo nacional.",
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
      descripcion: "Autorización especial para producción agrícola sostenible dentro del área protegida. Cumplimiento de normativas ambientales estrictas.",
      beneficios: [
        "Producción legal en área protegida",
        "Compromiso con conservación ambiental",
        "Monitoreo continuo de impacto ecológico",
        "Apoyo técnico institucional",
      ],
    },
  ];

  const enProceso = [
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
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="relative bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Certificaciones</h1>
          <p className="text-xl text-white/90 max-w-3xl font-sans">
            Nuestro compromiso con la calidad y la sostenibilidad respaldado por certificaciones oficiales.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="bg-brand-50 rounded-lg p-6 mb-12 border-l-4 border-brand-600">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-brand-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-serif font-bold mb-2 text-brand-900">
                Calidad certificada y verificable
              </h2>
              <p className="text-neutral-700 font-sans">
                Todas nuestras certificaciones son auditadas por organismos oficiales y pueden
                ser verificadas. Trabajamos constantemente en obtener nuevas certificaciones que
                respalden nuestra promesa de calidad y sostenibilidad.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800">Certificaciones actuales</h2>
        <div className="space-y-6 mb-12">
          {certificaciones.map((cert, index) => (
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

        <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800">Certificaciones en proceso</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {enProceso.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 mb-3">
                  <FileCheck className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-serif">{cert.nombre}</CardTitle>
                <span className="inline-block mt-2 px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
                  {cert.estado}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 font-sans">{cert.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Proceso de certificación</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 font-sans mb-6">
              Obtener y mantener certificaciones requiere compromiso continuo y auditorías
              periódicas. Nuestro equipo trabaja constantemente para cumplir y superar los
              estándares requeridos.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h4 className="font-semibold mb-2">Preparación</h4>
                <p className="text-sm text-neutral-700 font-sans">Capacitación y documentación</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h4 className="font-semibold mb-2">Auditoría</h4>
                <p className="text-sm text-neutral-700 font-sans">Inspección de organismos oficiales</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h4 className="font-semibold mb-2">Certificación</h4>
                <p className="text-sm text-neutral-700 font-sans">Obtención del certificado</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h4 className="font-semibold mb-2">Mantenimiento</h4>
                <p className="text-sm text-neutral-700 font-sans">Auditorías periódicas</p>
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
