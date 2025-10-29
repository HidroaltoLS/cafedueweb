import { Phone, MapPin, MessageCircle, AlertCircle } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Contacto() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593999999999", "_blank");
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="relative bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-sans">
            Estamos aquí para responder tus preguntas. Comunícate con nosotros por WhatsApp.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="bg-eco-50 border-2 border-eco-200 rounded-lg p-6 mb-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-eco-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-serif font-bold mb-2 text-eco-900 text-center">
                Importante: Comunicación por WhatsApp
              </h2>
              <p className="text-neutral-700 font-sans text-justify">
                Debido a las condiciones de cobertura en nuestra zona dentro del Parque Nacional Cayambe-Coca,
                te pedimos que te comuniques con nosotros únicamente a través de <strong>WhatsApp</strong> mediante
                llamadas o mensajes. Esta es la forma más confiable de mantenernos en contacto.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <Card className="shadow-lg bg-gradient-to-br from-eco-50 to-white">
            <CardHeader>
              <div className="w-20 h-20 bg-eco-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-serif text-center">WhatsApp Oficial</CardTitle>
              <p className="text-sm text-neutral-700 font-sans mt-2 text-center">
                Nuestra vía principal de comunicación
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-sm text-neutral-700 font-sans mb-2">
                  Número de contacto
                </div>
                <a
                  href="https://wa.me/593981369582"
                  className="text-3xl font-bold text-eco-700 hover:text-eco-800 font-sans block"
                >
                  +593 98 136 9582
                </a>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-eco-200">
                <h4 className="font-semibold mb-3 text-center font-serif">Horario de atención</h4>
                <div className="space-y-2 text-sm text-neutral-700 font-sans text-center">
                  <p><strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Sábado:</strong> 8:00 AM - 1:00 PM</p>
                  <p><strong>Domingo:</strong> Cerrado</p>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-eco-600 hover:bg-eco-700 text-white py-6 text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Abrir WhatsApp
              </Button>

              <div className="bg-eco-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-center font-serif">¿Cómo contactarnos?</h4>
                <ul className="space-y-2 text-sm text-neutral-700 font-sans">
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    <span><strong>Llamadas por WhatsApp:</strong> Para conversaciones directas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    <span><strong>Mensajes de WhatsApp:</strong> Para consultas y pedidos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-600 mr-2">✓</span>
                    <span><strong>Notas de voz:</strong> Si prefieres explicar con detalle</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-center">Información adicional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif mb-1">Ubicación</h4>
                    <p className="text-neutral-700 font-sans">
                      Gonzalo Pizarro<br />
                      Sucumbíos, Ecuador<br />
                      Parque Nacional Cayambe-Coca
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif mb-1">Respaldo institucional</h4>
                    <p className="text-neutral-700 font-sans">
                      Asociación respaldada por HidroAlto S.A.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-center">Preguntas frecuentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold font-serif mb-2">¿Hacen envíos a todo el Ecuador?</h4>
                    <p className="text-sm text-neutral-700 font-sans">
                      Realizamos entregas en Quito, Ibarra y las principales ciudades de la región amazónica.
                      Para otros destinos, consulta disponibilidad por WhatsApp.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif mb-2">¿Cuál es el tiempo de entrega?</h4>
                    <p className="text-sm text-neutral-700 font-sans">
                      Procesamos los pedidos en 24-48 horas. El tiempo de entrega depende del destino,
                      generalmente entre 3-5 días hábiles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif mb-2">¿Puedo visitar las fincas?</h4>
                    <p className="text-sm text-neutral-700 font-sans">
                      Sí, organizamos tours cafeteros para grupos. Contáctanos por WhatsApp con al menos
                      2 semanas de anticipación.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif mb-2">¿Por qué solo WhatsApp?</h4>
                    <p className="text-sm text-neutral-700 font-sans">
                      Nuestra ubicación en el Parque Nacional Cayambe-Coca tiene cobertura limitada.
                      WhatsApp es el medio más confiable para mantener comunicación constante.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-brand-50 border-brand-200">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-center">¿Necesitas ayuda inmediata?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 font-sans mb-4 text-center">
                  Nuestro equipo está listo para atenderte por WhatsApp
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-eco-600 hover:bg-eco-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar mensaje ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">¿Qué puedes consultarnos?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 font-serif">Ventas y Pedidos</h4>
                <ul className="text-sm text-neutral-700 font-sans space-y-1">
                  <li>• Disponibilidad de productos</li>
                  <li>• Precios y promociones</li>
                  <li>• Pedidos al por mayor</li>
                  <li>• Formas de pago</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 font-serif">Información General</h4>
                <ul className="text-sm text-neutral-700 font-sans space-y-1">
                  <li>• Asociación y productores</li>
                  <li>• Proceso de producción</li>
                  <li>• Certificaciones</li>
                  <li>• Tours y visitas</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 font-serif">Socios</h4>
                <ul className="text-sm text-neutral-700 font-sans space-y-1">
                  <li>• Cómo unirse</li>
                  <li>• Beneficios</li>
                  <li>• Requisitos</li>
                  <li>• Capacitaciones</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 font-serif">Entregas</h4>
                <ul className="text-sm text-neutral-700 font-sans space-y-1">
                  <li>• Zonas de cobertura</li>
                  <li>• Tiempos de entrega</li>
                  <li>• Costos de envío</li>
                  <li>• Seguimiento de pedidos</li>
                </ul>
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
