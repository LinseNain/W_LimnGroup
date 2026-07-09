"use client";

import { motion } from "framer-motion";
import { Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative overflow-hidden bg-background pt-14 pb-20 md:pt-20 md:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-turquoise/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-accent-yellow/20 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex min-w-0 flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-turquoise-light px-4 py-1.5 text-sm font-semibold text-turquoise">
            Limpieza profesional en {siteConfig.location}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance text-foreground">
            Tu casa, cuidada como se merece
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Nos ocupamos de la limpieza de tu hogar con cuidado y
            profesionalidad, para que tú recuperes tiempo para lo que de
            verdad importa.
          </p>

          <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Escríbenos por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="size-5" />
                Síguenos en Facebook
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Servicio local y de confianza, vecinos de {siteConfig.location}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-turquoise-light md:aspect-square"
        >
          <Image
            src="/placeholders/hero.svg"
            alt="Hogar limpio y ordenado gracias al servicio de LimnGroup"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}
