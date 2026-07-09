"use client";

import { motion } from "framer-motion";
import { Briefcase, PawPrint } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function FamiliesPets() {
  return (
    <section
      id="familias"
      aria-labelledby="familias-heading"
      className="bg-turquoise py-20 md:py-28"
    >
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square w-full overflow-hidden rounded-3xl md:order-2"
        >
          <Image
            src="/placeholders/familias.svg"
            alt="Familia disfrutando de un hogar limpio y seguro para niños y mascotas"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10 md:order-1"
        >
          <SectionHeading
            eyebrow="Pensado para ti"
            title="Para familias, niños y mascotas"
            light
          />

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 rounded-2xl bg-white/10 p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-turquoise">
                <Briefcase className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-white">
                  Familias con poco tiempo
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Sabemos lo que cuesta llegar a todo. Nosotros nos ocupamos
                  de la limpieza para que ganes tiempo para tu familia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-white/10 p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-turquoise">
                <PawPrint className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-white">
                  Hogares con niños y mascotas
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Usamos productos seguros para peques y mascotas, sin
                  renunciar a una limpieza a fondo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
