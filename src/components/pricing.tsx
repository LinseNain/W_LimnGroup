"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Mensual / Ocasional",
    description:
      "Ideal si buscas limpiezas puntuales o un mantenimiento regular de tu hogar.",
    features: [
      "Limpieza del hogar",
      "Frecuencia a tu medida",
      "Productos ecológicos incluidos",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    description:
      "Para quienes quieren un cuidado completo: hogar, colchones, tapicería y coche.",
    features: [
      "Todos los servicios incluidos",
      "Atención prioritaria",
      "Planificación personalizada",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="precios" aria-labelledby="precios-heading" className="bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Precios"
            title="Un plan a la medida de tu hogar"
            description="Cada casa es distinta, así que preferimos hablar contigo antes de darte un precio cerrado."
            align="center"
          />
        </motion.div>

        <div className="mx-auto grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={
                plan.highlighted
                  ? "flex flex-col gap-6 rounded-2xl bg-turquoise p-8 text-white shadow-lg"
                  : "flex flex-col gap-6 rounded-2xl border border-border bg-background p-8"
              }
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p
                  className={
                    plan.highlighted
                      ? "text-white/85 leading-relaxed"
                      : "text-muted-foreground leading-relaxed"
                  }
                >
                  {plan.description}
                </p>
              </div>

              <p className="text-2xl font-bold">Precio a medida</p>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <Check
                      className={
                        plan.highlighted
                          ? "size-4 shrink-0 text-accent-yellow"
                          : "size-4 shrink-0 text-turquoise"
                      }
                      aria-hidden
                    />
                    <span className={plan.highlighted ? "text-white" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? "default" : "outline"}
                className={
                  plan.highlighted
                    ? "mt-auto bg-white text-turquoise hover:bg-white/90"
                    : "mt-auto"
                }
              >
                <a href="#contacto">Pedir presupuesto</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
