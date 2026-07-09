"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, CalendarCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: MessageCircle,
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp o rellena el formulario de contacto.",
  },
  {
    icon: ClipboardList,
    title: "Consulta",
    description: "Hablamos sobre lo que necesitas y resolvemos tus dudas.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda",
    description: "Elegimos juntos el día y la hora que mejor te vengan.",
  },
  {
    icon: Sparkles,
    title: "Disfruta",
    description: "Tú te relajas, nosotros nos encargamos del resto.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="py-20 md:py-28"
    >
      <Container className="flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Empezar es así de fácil"
            align="center"
          />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center gap-4 text-center"
            >
              <div className="relative">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-white text-turquoise shadow-sm">
                  <step.icon className="size-7" aria-hidden />
                </span>
                <span className="absolute -right-1 -top-1 inline-flex size-6 items-center justify-center rounded-full bg-accent-yellow text-xs font-bold text-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
