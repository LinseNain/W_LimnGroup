import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de LimnGroup: cómo tratamos los datos del formulario de contacto y tus derechos según el RGPD.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Última actualización: julio de 2026
          </p>

          <div className="mt-10 flex flex-col gap-10 text-foreground leading-relaxed">
            <section aria-labelledby="responsable">
              <h2 id="responsable" className="text-xl font-semibold text-turquoise">
                1. Responsable del tratamiento
              </h2>
              <p className="mt-3">
                El responsable del tratamiento de los datos personales
                recogidos a través de este sitio web es {siteConfig.ownerName},
                persona física sin actividad económica registrada, con
                domicilio en {siteConfig.location}. LimnGroup es el
                nombre bajo el que {siteConfig.ownerName} ofrece de forma
                informal el servicio de limpieza descrito en esta web.
              </p>
              <p className="mt-3">
                Puedes contactar con el responsable en:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-turquoise underline underline-offset-2">
                  {siteConfig.email}
                </a>
              </p>
            </section>

            <section aria-labelledby="finalidad">
              <h2 id="finalidad" className="text-xl font-semibold text-turquoise">
                2. Finalidad del tratamiento
              </h2>
              <p className="mt-3">
                Los datos que nos facilitas a través del formulario de
                contacto (nombre, email, teléfono, tipo de servicio y
                mensaje) se utilizan exclusivamente para responder a tu
                consulta y, en su caso, gestionar la prestación del servicio
                de limpieza que solicites. No utilizamos estos datos para
                ninguna otra finalidad, ni realizamos perfiles automatizados
                ni envíos de publicidad no solicitada.
              </p>
            </section>

            <section aria-labelledby="legitimacion">
              <h2 id="legitimacion" className="text-xl font-semibold text-turquoise">
                3. Legitimación
              </h2>
              <p className="mt-3">
                La base legal para el tratamiento de tus datos es tu
                consentimiento expreso, otorgado al marcar la casilla de
                aceptación y enviar el formulario de contacto, de acuerdo con
                el artículo 6.1.a del Reglamento General de Protección de
                Datos (RGPD). Puedes retirar tu consentimiento en cualquier
                momento sin que ello afecte a la licitud del tratamiento
                previo a su retirada.
              </p>
            </section>

            <section aria-labelledby="destinatarios">
              <h2 id="destinatarios" className="text-xl font-semibold text-turquoise">
                4. Destinatarios
              </h2>
              <p className="mt-3">
                Tus datos no se ceden a terceros, salvo a los proveedores de
                servicios estrictamente necesarios para el funcionamiento de
                esta web, que actúan como encargados del tratamiento:
              </p>
              <ul className="mt-3 flex flex-col gap-2 list-disc pl-6">
                <li>
                  <strong>Resend Inc.</strong> — envío del correo electrónico
                  generado al enviar el formulario de contacto.
                </li>
                <li>
                  <strong>Vercel Inc.</strong> — alojamiento (hosting) de la
                  web.
                </li>
              </ul>
              <p className="mt-3">
                Ambos proveedores pueden procesar datos fuera del Espacio
                Económico Europeo, acogidos a mecanismos de transferencia
                internacional reconocidos por el RGPD (como las Cláusulas
                Contractuales Tipo).
              </p>
            </section>

            <section aria-labelledby="conservacion">
              <h2 id="conservacion" className="text-xl font-semibold text-turquoise">
                5. Conservación de los datos
              </h2>
              <p className="mt-3">
                Tus datos se conservarán durante un máximo de 12 meses desde
                el envío del formulario, o hasta que solicites su supresión,
                lo que ocurra antes. No se emplea ninguna base de datos: los
                mensajes recibidos se gestionan directamente por correo
                electrónico.
              </p>
            </section>

            <section aria-labelledby="derechos">
              <h2 id="derechos" className="text-xl font-semibold text-turquoise">
                6. Tus derechos
              </h2>
              <p className="mt-3">
                Puedes ejercer en cualquier momento tus derechos de acceso,
                rectificación, supresión, portabilidad, y limitación u
                oposición al tratamiento de tus datos, escribiendo a{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-turquoise underline underline-offset-2">
                  {siteConfig.email}
                </a>
                . Responderemos a tu solicitud a la mayor brevedad posible.
              </p>
            </section>

            <section aria-labelledby="reclamacion">
              <h2 id="reclamacion" className="text-xl font-semibold text-turquoise">
                7. Derecho a reclamar
              </h2>
              <p className="mt-3">
                Si consideras que el tratamiento de tus datos no se ajusta a
                la normativa vigente, puedes presentar una reclamación ante
                la Agencia Española de Protección de Datos (AEPD) a través de
                su web:{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turquoise underline underline-offset-2"
                >
                  www.aepd.es
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="cambios">
              <h2 id="cambios" className="text-xl font-semibold text-turquoise">
                8. Cambios en esta política
              </h2>
              <p className="mt-3">
                Esta política de privacidad puede actualizarse para adaptarse
                a cambios normativos o en el funcionamiento de la web.
                Cualquier cambio relevante se reflejará en esta misma página.
              </p>
            </section>
          </div>

          <p className="mt-12 text-sm">
            <Link href="/" className="text-turquoise underline underline-offset-2">
              ← Volver al inicio
            </Link>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
