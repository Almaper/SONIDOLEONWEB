// app/politica-cookies/page.jsx
import React from 'react';

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            Sonido León
          </a>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl font-bold text-yellow-400 sm:text-5xl mb-4">
          Política de Cookies
        </h1>
        <p className="text-gray-400 mb-12 border-b border-gray-800 pb-8">
          Última actualización: 13 de febrero de 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">1. ¿QUÉ SON LAS COOKIES?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Su función principal es recordar información sobre tu visita, como tus preferencias de idioma, configuración regional, o datos de inicio de sesión, para que no tengas que introducirlos cada vez que nos visites.</p>
            <p>En <span className="font-semibold text-yellow-400">SONIDO LEON S.L.U.</span> utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico de nuestra web y personalizar el contenido que ofrecemos.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">2. TIPOS DE COOKIES QUE UTILIZAMOS</h2>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">2.1. Según la entidad que las gestiona</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Cookies propias:</span> Son aquellas que enviamos a tu ordenador desde nuestros propios equipos o dominios y desde las que prestamos el servicio que nos solicitas.</li>
              <li><span className="font-semibold text-yellow-400">Cookies de terceros:</span> Son aquellas que se envían a tu ordenador desde un equipo o dominio que no es gestionado por nosotros, sino por otra entidad colaboradora (como Google Analytics).</li>
            </ul>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">2.2. Según su finalidad</h3>

            <h4 className="text-lg font-semibold text-yellow-400 mt-4">Cookies técnicas (necesarias)</h4>
            <p>Son aquellas que permiten la navegación a través de nuestra web y la utilización de las diferentes opciones o servicios que existen. Estas cookies son <span className="font-semibold text-yellow-400">estrictamente necesarias</span> para el funcionamiento de la web y no requieren tu consentimiento.</p>
            <p className="bg-gray-900 p-4 rounded-lg border border-gray-800 mt-2">
              <span className="font-semibold text-yellow-400">Ejemplo:</span> Cookies de sesión, de seguridad, de equilibrio de carga.
            </p>

            <h4 className="text-lg font-semibold text-yellow-400 mt-4">Cookies de preferencias o personalización</h4>
            <p>Permiten recordar información para que accedas al servicio con características que pueden diferenciar tu experiencia de la de otros usuarios (como el idioma o la región).</p>
            <p className="bg-gray-900 p-4 rounded-lg border border-gray-800 mt-2">
              <span className="font-semibold text-yellow-400">Ejemplo:</span> Idioma preferido, moneda.
            </p>

            <h4 className="text-lg font-semibold text-yellow-400 mt-4">Cookies de análisis o medición</h4>
            <p>Permiten el seguimiento y análisis del comportamiento de los usuarios en nuestra web. La información recogida se utiliza para medir la actividad y elaborar perfiles de navegación con el fin de introducir mejoras.</p>
            <p className="bg-gray-900 p-4 rounded-lg border border-gray-800 mt-2">
              <span className="font-semibold text-yellow-400">Ejemplo:</span> Google Analytics, Vercel Analytics.
            </p>

            <h4 className="text-lg font-semibold text-yellow-400 mt-4">Cookies de publicidad comportamental</h4>
            <p>Almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</p>
            <p className="bg-gray-900 p-4 rounded-lg border border-gray-800 mt-2">
              <span className="font-semibold text-yellow-400">Nota:</span> Actualmente NO utilizamos este tipo de cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">3. COOKIES ESPECÍFICAS QUE UTILIZAMOS</h2>

            <div className="overflow-x-auto my-6 rounded-lg border border-gray-800">
              <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-yellow-400">Cookie</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-yellow-400">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-yellow-400">Finalidad</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-yellow-400">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-400">__vercel_live</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Técnica (propia)</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Necesaria para el funcionamiento del hosting Vercel</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Sesión</td>
                  </tr>


                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-400">_gat_UA-*</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Análisis (terceros)</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Usada para limitar el porcentaje de solicitudes</td>
                    <td className="px-4 py-3 text-sm text-gray-300">1 minuto</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">4. CONSENTIMIENTO</h2>
            <p>Las cookies <span className="font-semibold text-yellow-400">técnicas o necesarias</span> están exentas de consentimiento, ya que son imprescindibles para el funcionamiento de la web.</p>
            <p>Para el resto de cookies (análisis, personalización, publicidad), solicitaremos tu consentimiento expreso mediante un <span className="font-semibold text-yellow-400">banner de cookies</span> en tu primera visita. Puedes aceptarlas todas, rechazarlas o configurarlas según tus preferencias.</p>
            <p>En cualquier momento puedes retirar tu consentimiento o modificar la configuración de cookies a través de las opciones de tu navegador o mediante el botón de configuración que encontrarás en el footer de nuestra web.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">5. CÓMO GESTIONAR LAS COOKIES EN TU NAVEGADOR</h2>
            <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de tu navegador. A continuación, te indicamos cómo hacerlo en los navegadores más comunes:</p>

            <div className="grid gap-4 mt-4">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-yellow-400 mb-2">🍏 Safari</h4>
                <p className="text-sm">Preferencias → Privacidad → Cookies y datos de sitios web</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-yellow-400 mb-2">🌐 Chrome</h4>
                <p className="text-sm">Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-yellow-400 mb-2">🦊 Firefox</h4>
                <p className="text-sm">Opciones → Privacidad y seguridad → Cookies y datos del sitio</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-yellow-400 mb-2">📱 Edge</h4>
                <p className="text-sm">Configuración → Cookies y permisos del sitio → Administrar y eliminar cookies</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">6. MÁS INFORMACIÓN</h2>
            <p>Para más información sobre cómo tratamos tus datos personales, consulta nuestra <a href="/politica-privacidad" className="text-yellow-400 hover:text-yellow-300 underline transition">Política de Privacidad</a>.</p>
            <p>Si tienes cualquier duda sobre nuestra política de cookies, puedes contactarnos en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Email:</span> sonidoleon@gmail.com</li>
              <li><span className="font-semibold text-yellow-400">Dirección:</span> Parque Empresarial Morero P2-11 Nave 12, 39611 Guarnizo (Cantabria)</li>
              <li><span className="font-semibold text-yellow-400">Teléfono:</span> +34 649 20 29 04</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">7. ACTUALIZACIONES</h2>
            <p>Podemos modificar esta Política de Cookies en función de cambios legislativos o de los tipos de cookies que utilicemos. Te recomendamos revisar esta página periódicamente.</p>
            <p className="text-sm text-gray-400 mt-4">Última revisión: 13 de febrero de 2026</p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">© 2026 SONIDO LEON S.L.U. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Inicio</a>
            <span className="text-gray-600">|</span>
            <a href="/politica-privacidad" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacidad</a>
            <span className="text-gray-600">|</span>
            <span className="text-yellow-400 font-medium">Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
}