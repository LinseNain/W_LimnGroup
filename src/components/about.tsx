"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartPulse, Clock } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    icon: Sparkles,
    title: "Espacios Limpios",
    description:
      "Un hogar limpio se nota en cada rincón. Cuidamos cada detalle como si fuera nuestra propia casa.",
  },
  {
    icon: HeartPulse,
    title: "Vida Saludable",
    description:
      "Trabajamos con productos ecológicos que cuidan tu salud y la de las personas con las que vives.",
  },
  {
    icon: Clock,
    title: "Más Tiempo",
    description:
      "Mientras nosotros limpiamos, tú recuperas horas para lo que de verdad importa.",
  },
];

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-heading" className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Quiénes somos"
            description={`LimnGroup nace en ${siteConfig.location} con una idea sencilla: cuidar los espacios donde vives para que ganes tiempo y tranquilidad. Cada casa es distinta, y por eso adaptamos el servicio a lo que cada familia necesita.`}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-sm"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-turquoise-light text-turquoise">
                <pillar.icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
