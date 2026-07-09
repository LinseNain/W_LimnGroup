"use client";

import { motion } from "framer-motion";
import { Home, BedDouble, Armchair, Car, PackageCheck } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { whatsappHref } from "@/lib/site-config";

const services = [
  {
    icon: Home,
    title: "Limpieza del Hogar",
    description:
      "Limpieza completa de tu vivienda, adaptada a tus necesidades y a tu ritmo de vida.",
  },
  {
    icon: BedDouble,
    title: "Colchones y Sofás",
    description:
      "Eliminamos ácaros, manchas y malos olores con equipos especializados.",
  },
  {
    icon: Armchair,
    title: "Tapicería",
    description:
      "Renovamos sillas, sillones y textiles del hogar cuidando cada material.",
  },
  {
    icon: Car,
    title: "Interior de Coches",
    description:
      "Limpieza profunda del interior de tu vehículo, como el primer día.",
  },
  {
    icon: PackageCheck,
    title: "Edredones",
    description:
      "Recogemos, limpiamos y te devolvemos tus edredones en 24 horas.",
  },
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-heading" className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que tu hogar necesita"
            description="Elige el servicio que mejor se adapta a ti. Si tienes dudas, te ayudamos a decidir."
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-7 transition-shadow hover:shadow-md"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-turquoise-light text-turquoise transition-colors group-hover:bg-turquoise group-hover:text-white">
                <service.icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
            className="flex flex-col justify-center gap-3 rounded-2xl bg-turquoise p-7 text-white transition-shadow hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">¿No sabes cuál elegir?</h3>
            <p className="text-white/85 leading-relaxed">
              Cuéntanos qué necesitas y te recomendamos el servicio más
              adecuado.
            </p>
            <span className="mt-2 text-sm font-semibold underline underline-offset-4">
              Escríbenos por WhatsApp
            </span>
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
