// app/politica-privacidad/page.jsx
import React from 'react';

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header simple */}
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
          Política de Privacidad
        </h1>
        <p className="text-gray-400 mb-12 border-b border-gray-800 pb-8">
          Última actualización: 13 de febrero de 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">1. INTRODUCCIÓN</h2>
            <p>En <span className="font-semibold text-yellow-400">SONIDO LEON S.L.U.</span> nos tomamos muy en serio la protección de tu privacidad y tus datos personales. Esta política de privacidad describe cómo recogemos, utilizamos y protegemos la información que nos proporcionas cuando visitas nuestro sitio web <span className="font-semibold text-yellow-400">https://sonidoleon.com</span> y utilizas nuestros servicios.</p>

            <p>La presente política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales, en concreto:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El <span className="font-semibold text-yellow-400">Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo</span>, de 27 de abril de 2016, relativo a la protección de las personas físicas (RGPD).</li>
              <li>La <span className="font-semibold text-yellow-400">Ley Orgánica 3/2018</span>, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">2. RESPONSABLE DEL TRATAMIENTO</h2>
            <p>¿Quién es el responsable del tratamiento de tus datos?</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Denominación social:</span> SONIDO LEON S.L.U.</li>
              <li><span className="font-semibold text-yellow-400">CIF/NIF:</span> B39884259</li>
              <li><span className="font-semibold text-yellow-400">Domicilio:</span> Parque Empresarial Morero P2-11 Nave 12, 39611 Guarnizo (Cantabria)</li>
              <li><span className="font-semibold text-yellow-400">Correo electrónico:</span> sonidoleon@gmail.com</li>
              <li><span className="font-semibold text-yellow-400">Teléfono:</span> +34 649 20 29 04</li>
            </ul>
            <p>Si tienes cualquier pregunta sobre el tratamiento de tus datos, puedes contactarnos a través de los medios indicados.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">3. PRINCIPIOS APLICABLES AL TRATAMIENTO DE TUS DATOS</h2>
            <p>El tratamiento de tus datos personales se someterá a los siguientes principios recogidos en el artículo 5 del RGPD:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Principio de licitud, lealtad y transparencia:</span> Siempre solicitaremos tu consentimiento previa información transparente de los fines para los que recogemos tus datos.</li>
              <li><span className="font-semibold text-yellow-400">Principio de limitación de la finalidad:</span> Los datos serán recogidos con fines determinados, explícitos y legítimos.</li>
              <li><span className="font-semibold text-yellow-400">Principio de minimización de datos:</span> Solo recogeremos los datos estrictamente necesarios.</li>
              <li><span className="font-semibold text-yellow-400">Principio de exactitud:</span> Mantendremos tus datos exactos y actualizados.</li>
              <li><span className="font-semibold text-yellow-400">Principio de limitación del plazo de conservación:</span> Conservaremos tus datos solo el tiempo necesario.</li>
              <li><span className="font-semibold text-yellow-400">Principio de integridad y confidencialidad:</span> Garantizaremos la seguridad de tus datos.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">4. ¿QUÉ DATOS PERSONALES RECOGEMOS Y CON QUÉ FINALIDAD?</h2>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">4.1. Visitantes del sitio web</h3>
            <p>Cuando navegas por nuestro sitio web, utilizamos cookies para asegurar el correcto funcionamiento de la página. Puedes consultar nuestra <span className="font-semibold text-yellow-400">Política de Cookies</span> para más información.</p>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">4.2. Formulario de contacto / Consultas</h3>
            <p>Cuando nos envías una consulta a través de nuestro formulario de contacto, correo electrónico o teléfono:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Datos recogidos:</span> Nombre, correo electrónico, teléfono y cualquier información que nos proporciones en tu mensaje.</li>
              <li><span className="font-semibold text-yellow-400">Finalidad:</span> Atender tu consulta o solicitud de información sobre nuestros servicios de sonorización, iluminación o videomapping.</li>
              <li><span className="font-semibold text-yellow-400">Base legal:</span> Tu consentimiento (artículo 6.1.a del RGPD) y nuestro interés legítimo en responder a tus solicitudes (artículo 6.1.f del RGPD).</li>
              <li><span className="font-semibold text-yellow-400">Plazo de conservación:</span> Conservaremos tus datos durante el tiempo necesario para atender tu consulta y, en todo caso, durante el plazo máximo de 1 año desde la última comunicación, salvo que se inicie una relación contractual.</li>
            </ul>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">4.3. Clientes</h3>
            <p>Si contratas nuestros servicios:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Datos recogidos:</span> Nombre y apellidos, NIF/CIF, dirección, correo electrónico, teléfono, datos de facturación y detalles del evento contratado.</li>
              <li><span className="font-semibold text-yellow-400">Finalidad:</span> Gestionar la relación contractual, prestarte los servicios contratados (sonorización, iluminación, videomapping), realizar el cobro y emitir las facturas correspondientes.</li>
              <li><span className="font-semibold text-yellow-400">Base legal:</span> Ejecución de un contrato (artículo 6.1.b del RGPD).</li>
              <li><span className="font-semibold text-yellow-400">Plazo de conservación:</span> Durante la vigencia de la relación contractual y, una vez finalizada, durante el tiempo necesario para cumplir con obligaciones legales (especialmente fiscales, durante 5 años según la normativa contable).</li>
            </ul>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">4.4. Newsletter o boletín informativo</h3>
            <p>Si te suscribes a nuestro boletín:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Datos recogidos:</span> Dirección de correo electrónico.</li>
              <li><span className="font-semibold text-yellow-400">Finalidad:</span> Enviarte novedades de la empresa, información sobre nuestros servicios, promociones y noticias relacionadas con el mundo del sonido y los espectáculos.</li>
              <li><span className="font-semibold text-yellow-400">Base legal:</span> Tu consentimiento expreso mediante una clara acción afirmativa (artículo 6.1.a del RGPD).</li>
              <li><span className="font-semibold text-yellow-400">Plazo de conservación:</span> Hasta que te des de baja del boletín. En todos los correos encontrarás un enlace para cancelar la suscripción.</li>
            </ul>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">4.5. Solicitudes de empleo</h3>
            <p>Si nos envías tu currículum:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Datos recogidos:</span> Información curricular (formación, experiencia, datos de contacto).</li>
              <li><span className="font-semibold text-yellow-400">Finalidad:</span> Evaluar tu candidatura para procesos de selección de personal.</li>
              <li><span className="font-semibold text-yellow-400">Base legal:</span> Tu consentimiento y nuestro interés legítimo en gestionar las solicitudes de empleo (artículo 6.1.f del RGPD).</li>
              <li><span className="font-semibold text-yellow-400">Plazo de conservación:</span> Si no eres seleccionado, conservaremos tu CV por un período máximo de 1 año para futuras oportunidades, salvo que nos indiques lo contrario.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">5. ¿A QUÉ DESTINATARIOS SE COMUNICARÁN TUS DATOS?</h2>
            <p>Con carácter general, <span className="font-semibold text-yellow-400">no comunicaremos tus datos personales a terceros</span>, salvo obligación legal.</p>
            <p>No obstante, tus datos podrán ser comunicados a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Administraciones públicas y organismos oficiales</span> cuando la ley nos obligue (por ejemplo, Agencia Tributaria, Juzgados y Tribunales).</li>
              <li><span className="font-semibold text-yellow-400">Entidades bancarias</span> para la gestión de cobros y pagos.</li>
              <li><span className="font-semibold text-yellow-400">Proveedores de servicios</span> que actúan como encargados del tratamiento (por ejemplo, servicios de hosting, email marketing, asesoría). En estos casos, exigimos a dichos proveedores las mismas garantías de seguridad y confidencialidad.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">6. ENCARGADOS DEL TRATAMIENTO</h2>
            <p>Para poder ofrecerte nuestros servicios, contamos con la colaboración de proveedores externos que tienen acceso a tus datos personales en calidad de <span className="font-semibold text-yellow-400">encargados del tratamiento</span>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Proveedor de alojamiento web (hosting):</span> Vercel Inc., con quien hemos celebrado el correspondiente contrato de encargo de tratamiento.</li>
              <li><span className="font-semibold text-yellow-400">Proveedores de servicios de email:</span> No utilizamos servicios de email marketing por el momento.</li>
              <li><span className="font-semibold text-yellow-400">Asesoría fiscal y contable:</span> No compartimos datos con asesorías externas sin consentimiento previo.</li>
            </ul>
            <p>Todos nuestros encargados de tratamiento garantizan el cumplimiento de la normativa de protección de datos y aplican las medidas de seguridad adecuadas.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">7. TRANSFERENCIAS INTERNACIONALES DE DATOS</h2>
            <p>Utilizamos principalmente encargados del tratamiento en la Unión Europea/Espacio Económico Europeo. En caso de que algún proveedor esté ubicado fuera de la UE, nos aseguramos de que dicho país ofrezca un nivel de protección adecuado o que se hayan adoptado las garantías necesarias (como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea).</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">8. MEDIDAS DE SEGURIDAD</h2>
            <p>Mantenemos el tratamiento de tus datos personales seguro aplicando las medidas técnicas y organizativas necesarias para garantizar su confidencialidad, integridad y disponibilidad.</p>
            <p>Hemos realizado evaluaciones de riesgo de nuestro tratamiento de datos personales y hemos introducido medidas de seguridad apropiadas, incluyendo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Certificado SSL</span> en nuestro sitio web, que cifra las comunicaciones entre tu navegador y nuestro servidor.</li>
              <li>Acceso restringido a los datos personales.</li>
              <li>Copias de seguridad periódicas.</li>
              <li>Formación básica a nuestro personal en materia de protección de datos.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">9. TUS DERECHOS</h2>
            <p>De acuerdo con el RGPD y la LOPD-GDD, tienes los siguientes derechos en relación con tus datos personales:</p>

            <div className="overflow-x-auto my-6 rounded-lg border border-gray-800">
              <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-yellow-400">Derecho</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-yellow-400">¿Qué significa?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-400">Acceso</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Puedes solicitarnos que te confirmemos si estamos tratando tus datos personales y, en caso afirmativo, acceder a ellos.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-400">Rectificación</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Puedes solicitarnos que corrijamos datos inexactos o incompletos.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-400">Supresión</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Puedes solicitarnos que eliminemos tus datos cuando ya no sean necesarios.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-400">Oposición</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Puedes oponerte a que tratemos tus datos basándonos en nuestro interés legítimo.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-400">Portabilidad</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Puedes solicitarnos que te entreguemos tus datos en un formato estructurado.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-yellow-400 mt-6">¿Cómo ejercer tus derechos?</h3>
            <p>Envía un escrito a: <span className="font-semibold text-yellow-400">Parque Empresarial Morero P2-11 Nave 12, 39611 Guarnizo (Cantabria)</span> o email a <span className="font-semibold text-yellow-400">sonidoleon@gmail.com</span> (adjuntando DNI).</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">10. CONSERVACIÓN DE DATOS</h2>
            <p>Conservaremos tus datos el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">11. ENLACES A TERCEROS</h2>
            <p>Esta política solo se aplica a <span className="font-semibold text-yellow-400">sonidoleon.com</span>. No nos responsabilizamos de otros sitios web.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">12. CAMBIOS</h2>
            <p>Nos reservamos el derecho a modificar esta política. Los cambios serán anunciados en esta página.</p>
          </section>

        </div>
      </div>

      {/* Footer simple */}
      <footer className="border-t border-gray-800 bg-black/50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">© 2026 SONIDO LEON S.L.U. Todos los derechos reservados.</p>
          <div className="mt-4">
            <a href="/" className="text-gray-400 hover:text-yellow-400 transition-colors mx-3">
              Inicio
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-yellow-400 mx-3 font-medium">
              Política de Privacidad
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}