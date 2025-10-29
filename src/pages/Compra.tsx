import { Phone, DollarSign, CreditCard, Smartphone, Package } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import CoffeePriceWidget from "../components/CoffeePriceWidget";
import { Button } from "../components/ui/button";

export default function Compra() {

  // NUEVO WhatsApp oficial ✅
  const WHATSAPP_MSISDN = "593981369582";
  const WHATSAPP_DISPLAY = "+593 98 136 9582";

  const productoSecundarios = [
    {
      nombre: "Café molido - 250g",
      descripcion: "Molido medio, ideal para filtro y prensa francesa",
    },
    {
      nombre: "Café molido - 500g",
      descripcion: "Molido medio, ideal para filtro y prensa francesa",
    },
    {
      nombre: "Café molido - 1kg",
      descripcion: "Formato económico para consumo frecuente",
    },
    {
      nombre: "Café en grano - 250g",
      descripcion: "Grano entero para moler en casa",
    },
    {
      nombre: "Café en grano - 500g",
      descripcion: "Grano entero para moler en casa",
    },
    {
      nombre: "Café en grano - 1kg",
      descripcion: "Grano entero para moler en casa",
    },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_MSISDN}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="relative bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Compra tu café</h1>
          <p className="text-xl text-white/90 max-w-3xl font-sans">
            Café robusta de especialidad del Alto Amazonas — frescura y trazabilidad total.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">

        {/* === Producto Principal === */}
        <Card className="mb-12 bg-gradient-to-br from-brand-50 to-eco-50 border-2 border-brand-300">
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-center text-brand-800">Producto Principal</CardTitle>
            <p className="text-center text-neutral-700 font-sans mt-2">
              Nuestro café en su presentación más auténtica
            </p>
          </CardHeader>

          <CardContent>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8 relative group">

                  {/* ✅ FOTO REAL + ETIQUETA */}
                  <div className="w-full md:w-72 h-72 bg-neutral-200 rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img
                      src="https://res.cloudinary.com/ds2scyclq/image/upload/v1761601716/DSC01660_ty8xzu.webp"
                      alt="Café pergamino Café Dúe"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Etiqueta flotante premium */}
                    <span className="absolute top-4 left-4 bg-brand-700 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
                      Café Pergamino
                    </span>
                  </div>

                  {/* ✅ Info del producto */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-serif font-bold mb-3 text-brand-800">
                      Café Pergamino de Especialidad
                    </h3>
                    <p className="text-lg font-bold text-eco-700 mb-4">Venta al granel</p>
                    <p className="text-neutral-700 font-sans mb-4 leading-relaxed">
                      Ideal para tostar a tu gusto. Disponible también trillado o pilado.
                      Perfecto para tostadores, cafeterías y distribuidores premium.
                    </p>

                    <div className="bg-eco-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2 font-serif">Formatos disponibles:</h4>
                      <ul className="text-sm text-neutral-700 font-sans space-y-1">
                        <li>✓ Pergamino (sin trillar)</li>
                        <li>✓ Trillado (café verde)</li>
                        <li>✓ Pilado (procesado)</li>
                      </ul>
                    </div>

                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-brand-600 hover:bg-brand-700 w-full md:w-auto"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Consultar por WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* === Productos Secundarios === */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-6 text-brand-800 text-center">
              Productos Secundarios
            </h2>
            <p className="text-center text-neutral-700 font-sans mb-6">
              Café robusta de especialidad listo para disfrutar
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {productoSecundarios.map((producto, i) => (
                <Card key={i} className="hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="text-lg font-serif">{producto.nombre}</CardTitle>
                    <p className="text-sm text-neutral-700 font-sans">{producto.descripcion}</p>
                  </CardHeader>
                  <CardContent>
                    <Button onClick={handleWhatsAppClick} className="w-full">
                      Ordenar por WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar Contacto + Pagos */}
          <div>
            <div className="mb-6">
              <CoffeePriceWidget />
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <Phone className="w-5 h-5" />
                  Contacto directo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={`https://wa.me/${WHATSAPP_MSISDN}`}
                  className="font-medium text-brand-700 hover:underline font-sans text-lg"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                <p className="text-sm text-neutral-600 font-sans mt-2">
                  Lunes a Sábado — 08:00 a 18:00
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-4 bg-eco-600 hover:bg-eco-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <CreditCard className="w-5 h-5" />
                  Formas de pago
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <p className="font-medium">Transferencia bancaria</p>
                <p className="text-sm text-neutral-700 font-sans">Produbanco</p>

                <p className="font-medium">Pago móvil</p>
                <p className="text-sm text-neutral-700 font-sans">WhatsApp Business</p>

                <p className="font-medium">Efectivo contra entrega</p>
                <p className="text-sm text-neutral-700 font-sans">Puntos autorizados</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* === Transferencias === */}
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">
              Datos para transferencias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">Produbanco</p>
              <p className="text-neutral-700 font-sans">Cuenta Corriente: <span className="font-medium">000123456789</span></p>
              <p className="text-neutral-700 font-sans">Titular: <span className="font-medium">Café Dúe</span></p>

              <p className="text-xs text-neutral-600 font-sans mt-3">
                Envía tu comprobante por WhatsApp para validar tu pedido ✅
              </p>

              <div className="mt-4">
                <Button onClick={handleWhatsAppClick} className="bg-brand-600 hover:bg-brand-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Confirmar pago por WhatsApp
                </Button>
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
