"use client";

import { motion } from "framer-motion";
import { GraduationCap, Leaf, Wrench, Zap, MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: GraduationCap,
    title: "Profesionales Cualificados",
    description:
      "Un equipo formado y con experiencia, que trata tu casa con respeto y cuidado.",
  },
  {
    icon: Leaf,
    title: "Productos Ecológicos",
    description:
      "Limpiamos a fondo con productos que cuidan tu salud y el medioambiente.",
  },
  {
    icon: Wrench,
    title: "Equipamiento Especializado",
    description:
      "Maquinaria profesional para colchones, tapicería e interiores de coche.",
  },
  {
    icon: Zap,
    title: "Respuesta Rápida",
    description:
      "Te respondemos en menos de 24 horas, sin esperas eternas ni silencios.",
  },
  {
    icon: MapPin,
    title: "Local y Confiable",
    description: `Vecinos de ${siteConfig.location}. Nos conocemos, y eso se nota en el trato.`,
  },
];

export function WhyUs() {
  return (
    <section
      id="por-que-elegirnos"
      aria-labelledby="por-que-heading"
      className="bg-white py-20 md:py-28"
    >
      <Container className="flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Por qué elegirnos"
            title="Razones para confiarnos tu hogar"
            align="center"
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl bg-background p-6 text-center"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-turquoise text-white">
                <reason.icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
