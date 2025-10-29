import { Coffee, Droplets, Sun, Package, Leaf, Sprout } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Proceso() {
  const etapas = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Siembra y cultivo",
      description:
        "Selección de semillas de alta calidad y siembra en viveros. Trasplante a campo definitivo con sombra controlada en el ecosistema del Parque Nacional Cayambe-Coca.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Manejo sostenible",
      description:
        "Poda programada, abono orgánico y control biológico de plagas. Respeto por el medio ambiente y la biodiversidad local.",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Cosecha selectiva",
      description:
        "Recolección manual de cerezas maduras para garantizar la mejor calidad en taza.",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Beneficiado húmedo",
      description:
        "Despulpado, fermentación controlada, lavado con agua limpia y manejo responsable de residuos.",
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Secado",
      description:
        "Secado al sol o en secadoras hasta alcanzar la humedad ideal del 10–12%.",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Acopio y empaque",
      description:
        "Selección y clasificación final. Empaque en yute y al vacío para conservar el aroma.",
    },
  ];

  const fotosProceso = [
    {
      url: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761598253/6_zpb1bc.webp",
      alt: "Acopio del café",
    },
    {
      url: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761597554/escogiendo_el_cafe_zydtbu.webp",
      alt: "Escogiendo el café",
    },
    {
      url: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761597552/5_vq9euy.webp",
      alt: "Secado del café",
    },
    {
      url: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761597548/4_nwh1vq.webp",
      alt: "Producto final",
    },
    {
      url: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761597545/3_abhb99.webp",
      alt: "Siembra y cultivo",
    },
    {
      url: "https://res.cloudinary.com/ds2scyclq/image/upload/v1761597543/2_pjfwd1.webp",
      alt: "Beneficio húmedo",
    },
  ];

  const thumb = (url: string) =>
    url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,dpr_auto,ar_16:9,c_fit,w_800/"
    );

  const full = (url: string) =>
    url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,dpr_auto,ar_16:9,c_fit,w_1600/"
    );

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="relative bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nuestro Proceso
          </h1>
          <p className="text-xl text-white/90 max-w-3xl font-sans">
            Desde la semilla hasta tu taza, cuidamos cada detalle para garantizar la excelencia.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">

        {/* === ETAPAS === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {etapas.map((etapa, i) => (
            <Card key={i} className="hover:shadow-lg transition">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-800 mb-4">
                  {etapa.icon}
                </div>
                <CardTitle className="text-xl font-serif">{etapa.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 font-sans">{etapa.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* === VIDEO === */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Video: Proceso de producción</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-200">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/xyLF8lIAy0w"
                title="Proceso del café"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* === GALERÍA 16:9 PRO === */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Galería del proceso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fotosProceso.map(({ url, alt }) => (
                <a
                  key={url}
                  href={full(url)}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-lg overflow-hidden bg-neutral-100"
                >
                  <img
                    src={thumb(url)}
                    alt={alt}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
              ))}
            </div>
            <p className="text-sm text-neutral-600 mt-4 font-sans">
              Proceso real de Café Dúe ☕🌱
            </p>
          </CardContent>
        </Card>

        {/* === CALIDAD === */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Compromiso con la calidad</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 font-sans mb-4">
              Operamos en armonía con el Parque Nacional Cayambe-Coca, garantizando sostenibilidad y trazabilidad real.
            </p>
            <ul className="list-disc ml-6 text-neutral-700 font-sans space-y-2">
              <li>Buenas Prácticas Agrícolas (BPA) aplicadas</li>
              <li>Tratamiento de aguas con biodigestores</li>
              <li>Economía circular: reutilizamos la cáscara del café</li>
              <li>Capacitación continua a productores locales</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Navigation />
      <Footer />
    </div>
  );
}
