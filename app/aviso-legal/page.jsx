// app/aviso-legal/page.jsx
import React from 'react';
import Link from 'next/link';

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            Sonido León
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl font-bold text-yellow-400 sm:text-5xl mb-4">
          Aviso Legal
        </h1>
        <p className="text-gray-400 mb-12 border-b border-gray-800 pb-8">
          Última actualización: 13 de febrero de 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">1. DATOS IDENTIFICATIVOS</h2>
            <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos de la entidad titular del sitio web <span className="font-semibold text-yellow-400">sonidoleon.com</span>:</p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><span className="font-semibold text-yellow-400">Denominación social:</span> SONIDO LEON S.L.U.</li>
              <li><span className="font-semibold text-yellow-400">CIF/NIF:</span> B39884259</li>
              <li><span className="font-semibold text-yellow-400">Domicilio social:</span> Parque Empresarial Morero P2-11 Nave 12, 39611 Guarnizo (Cantabria)</li>
              <li><span className="font-semibold text-yellow-400">Teléfono:</span> +34 649 20 29 04</li>
              <li><span className="font-semibold text-yellow-400">Correo electrónico:</span> sonidoleon@gmail.com</li>
              <li><span className="font-semibold text-yellow-400">Nombre de dominio:</span> sonidoleon.com</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">2. OBJETO</h2>
            <p>El presente Aviso Legal regula el acceso, navegación y uso del sitio web <span className="font-semibold text-yellow-400">sonidoleon.com</span> (en adelante, el "Sitio Web"), así como las responsabilidades derivadas de la utilización de sus contenidos, entendiendo por contenidos los textos, gráficos, dibujos, diseños, códigos, software, fotografías, música, vídeos, sonidos, bases de datos, imágenes, expresiones e informaciones, así como cualquier otra creación protegida por las leyes nacionales y tratados internacionales de propiedad intelectual e industrial.</p>
            <p>La navegación por el Sitio Web atribuye la condición de usuario del mismo (en adelante, el "Usuario") e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, en la versión publicada por SONIDO LEON S.L.U. en el momento en que el Usuario acceda al Sitio Web.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">3. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p>Todos los derechos de propiedad intelectual e industrial del contenido del Sitio Web, incluyendo a título enunciativo pero no limitativo, su código fuente, diseño gráfico, logotipos, marcas, imágenes, textos, bases de datos y demás elementos, son titularidad de SONIDO LEON S.L.U. o, en su caso, de terceros que han autorizado su uso.</p>
            <p>Queda expresamente prohibida la reproducción, distribución, transformación, comunicación pública, puesta a disposición del público y, en general, cualquier otra forma de explotación de los contenidos del Sitio Web sin la previa autorización escrita de SONIDO LEON S.L.U.</p>
            <p>El Usuario se obliga a respetar los derechos de propiedad intelectual e industrial de SONIDO LEON S.L.U. y de terceros. No obstante, el Usuario podrá visualizar los elementos del Sitio Web e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre que sea, única y exclusivamente, para su uso personal y privado.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">4. RESPONSABILIDADES</h2>

            <h3 className="text-xl font-bold text-yellow-400 mt-4">4.1. Responsabilidad por el funcionamiento del Sitio Web</h3>
            <p>SONIDO LEON S.L.U. no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web. Cuando ello sea razonablemente posible, se advertirá previamente de las interrupciones en el funcionamiento del Sitio Web. SONIDO LEON S.L.U. tampoco garantiza la utilidad del Sitio Web para la realización de ninguna actividad en concreto, ni su infalibilidad.</p>
            <p>SONIDO LEON S.L.U. excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad o de continuidad del funcionamiento del Sitio Web, así como a la utilidad que el Usuario hubiera podido atribuir al Sitio Web.</p>

            <h3 className="text-xl font-bold text-yellow-400 mt-4">4.2. Responsabilidad por los contenidos</h3>
            <p>SONIDO LEON S.L.U. se reserva el derecho a modificar o eliminar en cualquier momento y sin previo aviso los contenidos, servicios e informaciones que se presenten en el Sitio Web.</p>
            <p>SONIDO LEON S.L.U. no asume responsabilidad alguna derivada de, con carácter enunciativo aunque no limitativo, de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La utilización que el Usuario pueda hacer de los contenidos del Sitio Web.</li>
              <li>Los eventuales errores de seguridad que se pudieran producir por el uso de navegadores no actualizados o por la acción de terceros que vulneren los sistemas de seguridad.</li>
              <li>Los contenidos, información, opiniones o manifestaciones de cualquier tercero, persona física o jurídica, comunicados o divulgados a través del Sitio Web.</li>
            </ul>

            <h3 className="text-xl font-bold text-yellow-400 mt-4">4.3. Responsabilidad por enlaces (links)</h3>
            <p>El Sitio Web puede incluir enlaces (links) a otros sitios web de terceros. SONIDO LEON S.L.U. no tiene control sobre dichos sitios ni asume responsabilidad alguna respecto a los contenidos, información, productos o servicios que puedan ofrecerse en los mismos.</p>
            <p>La presencia de estos enlaces tiene una finalidad meramente informativa y no implica relación alguna con la entidad titular del sitio web enlazado ni la aceptación de sus contenidos y servicios.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">5. CONDICIONES DE ACCESO Y USO</h2>

            <h3 className="text-xl font-bold text-yellow-400 mt-4">5.1. Acceso y registro</h3>
            <p>Con carácter general, el acceso al Sitio Web es gratuito y no exige suscripción o registro previo. No obstante, determinados servicios o contenidos pueden estar sujetos a condiciones particulares específicas que sustituirán, completarán y/o modificarán el presente Aviso Legal.</p>

            <h3 className="text-xl font-bold text-yellow-400 mt-4">5.2. Uso del Sitio Web</h3>
            <p>El Usuario se compromete a hacer un uso adecuado y lícito del Sitio Web, de conformidad con la ley, la buena fe, el orden público, y el presente Aviso Legal. El Usuario se abstendrá de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar actos que puedan dañar, inutilizar o sobrecargar el Sitio Web o impedir, de cualquier forma, su normal utilización por otros usuarios.</li>
              <li>Introducir o difundir programas de ordenador, virus informáticos, código malicioso o cualquier otro dispositivo físico o lógico que sea susceptible de provocar daños en los sistemas informáticos de SONIDO LEON S.L.U. o de terceros.</li>
              <li>Suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que pueda estar instalado en el Sitio Web.</li>
              <li>Utilizar los contenidos para actividades contrarias a la ley, la moral, las buenas costumbres o el orden público.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">6. PROTECCIÓN DE DATOS PERSONALES</h2>
            <p>El tratamiento de los datos personales de los Usuarios se realizará conforme a lo establecido en nuestra <Link href="/politica-privacidad" className="text-yellow-400 hover:text-yellow-300 underline">Política de Privacidad</Link> y en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPD-GDD).</p>
            <p>El Usuario garantiza que los datos personales facilitados son veraces y se hace responsable de comunicar cualquier modificación de los mismos. Queda informado de que, en su caso, podrá ejercitar los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad mediante comunicación escrita dirigida a la dirección postal o electrónica indicada en el punto 1 de este Aviso Legal.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">7. USO DE COOKIES</h2>
            <p>El Sitio Web utiliza cookies propias y de terceros para mejorar la experiencia de navegación del Usuario y obtener información estadística. El Usuario puede obtener más información en nuestra <Link href="/politica-cookies" className="text-yellow-400 hover:text-yellow-300 underline">Política de Cookies</Link>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">8. LEY APLICABLE Y JURISDICCIÓN</h2>
            <p>Las relaciones establecidas entre SONIDO LEON S.L.U. y el Usuario se regirán por lo dispuesto en la normativa española vigente. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, SONIDO LEON S.L.U. y el Usuario, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a la jurisdicción de los juzgados y tribunales de la ciudad de <span className="font-semibold text-yellow-400">León</span> (España).</p>
            <p>Si alguna cláusula del presente Aviso Legal fuese declarada nula o inaplicable, en su totalidad o en parte, por cualquier tribunal, órgano administrativo o autoridad competente, dicha nulidad o inaplicación no afectará a las demás cláusulas, que conservarán su vigencia y eficacia.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">9. MODIFICACIONES DEL AVISO LEGAL</h2>
            <p>SONIDO LEON S.L.U. se reserva el derecho a modificar el presente Aviso Legal para adaptarlo a novedades legislativas o jurisprudenciales, así como a prácticas del sector. En dichos supuestos, anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.</p>
            <p>Se recomienda al Usuario leer periódicamente el presente Aviso Legal para estar al tanto de posibles modificaciones.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">10. CONTACTO</h2>
            <p>Para cualquier consulta o sugerencia acerca del presente Aviso Legal, el Usuario puede dirigirse a SONIDO LEON S.L.U. a través de los siguientes medios:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-yellow-400">Correo electrónico:</span> sonidoleon@gmail.com</li>
              <li><span className="font-semibold text-yellow-400">Dirección postal:</span> Parque Empresarial Morero P2-11 Nave 12, 39611 Guarnizo (Cantabria)</li>
              <li><span className="font-semibold text-yellow-400">Teléfono:</span> +34 649 20 29 04</li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>© 2026 SONIDO LEON S.L.U. - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">© 2026 SONIDO LEON S.L.U. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Inicio</Link>
            <span className="text-gray-600">|</span>
            <Link href="/politica-privacidad" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacidad</Link>
            <span className="text-gray-600">|</span>
            <Link href="/politica-cookies" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookies</Link>
            <span className="text-gray-600">|</span>
            <span className="text-yellow-400 font-medium">Aviso Legal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}