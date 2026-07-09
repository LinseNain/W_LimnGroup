"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { TurnstileWidget } from "@/components/turnstile-widget";
import { submitContactForm, type ContactState } from "@/app/actions/contact";
import { siteConfig, whatsappHref } from "@/lib/site-config";

const serviceOptions = [
  { value: "hogar", label: "Limpieza del hogar" },
  { value: "colchones-sofas", label: "Colchones y sofás" },
  { value: "tapiceria", label: "Tapicería" },
  { value: "coches", label: "Interior de coches" },
  { value: "edredones", label: "Edredones" },
  { value: "otro", label: "Otro / no lo sé aún" },
];

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={pending}>
      {pending ? "Enviando…" : "Enviar mensaje"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [token, setToken] = useState("");

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de tu hogar"
            description="Cuéntanos qué necesitas y te responderemos en menos de 24 horas."
          />

          <div className="flex flex-col gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground transition-colors hover:text-turquoise"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-turquoise shadow-sm">
                <MessageCircle className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">WhatsApp</span>
                <span className="font-medium">Respuesta rápida</span>
              </span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-foreground transition-colors hover:text-turquoise"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-turquoise shadow-sm">
                <Mail className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="font-medium">{siteConfig.email}</span>
              </span>
            </a>

            <div className="flex items-center gap-3 text-foreground">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-turquoise shadow-sm">
                <MapPin className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Zona de servicio</span>
                <span className="font-medium">{siteConfig.location}</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          action={formAction}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                required
                aria-invalid={!!state.fieldErrors?.name}
                aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
              />
              {state.fieldErrors?.name && (
                <p id="name-error" className="text-sm text-destructive">
                  {state.fieldErrors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                aria-invalid={!!state.fieldErrors?.phone}
                aria-describedby={state.fieldErrors?.phone ? "phone-error" : undefined}
              />
              {state.fieldErrors?.phone && (
                <p id="phone-error" className="text-sm text-destructive">
                  {state.fieldErrors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={!!state.fieldErrors?.email}
              aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
            />
            {state.fieldErrors?.email && (
              <p id="email-error" className="text-sm text-destructive">
                {state.fieldErrors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="service">Tipo de servicio</Label>
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              aria-invalid={!!state.fieldErrors?.service}
              aria-describedby={state.fieldErrors?.service ? "service-error" : undefined}
              className="h-12 w-full rounded-lg border border-input bg-white px-4 text-base text-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-turquoise/30"
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {state.fieldErrors?.service && (
              <p id="service-error" className="text-sm text-destructive">
                {state.fieldErrors.service}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              required
              aria-invalid={!!state.fieldErrors?.message}
              aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
            />
            {state.fieldErrors?.message && (
              <p id="message-error" className="text-sm text-destructive">
                {state.fieldErrors.message}
              </p>
            )}
          </div>

          <TurnstileWidget onVerify={setToken} />
          <input type="hidden" name="cf-turnstile-response" value={token} readOnly />

          <p className="text-xs leading-relaxed text-muted-foreground">
            Al enviar este formulario, LimnGroup (gestionado por{" "}
            {siteConfig.ownerName}, con domicilio en {siteConfig.location})
            tratará tus datos (nombre, email, teléfono y mensaje) únicamente
            para responder a tu consulta. No se cederán a terceros. Puedes
            solicitar su eliminación en {siteConfig.email}. Más información en
            nuestra{" "}
            <Link href="/privacidad" className="font-medium text-turquoise underline underline-offset-2">
              Política de Privacidad
            </Link>
            .
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                name="consent"
                value="on"
                required
                aria-describedby={state.fieldErrors?.consent ? "consent-error" : undefined}
                className="mt-0.5"
              />
              <Label htmlFor="consent" className="text-sm font-normal leading-relaxed text-foreground">
                He leído y acepto la política de privacidad
              </Label>
            </div>
            {state.fieldErrors?.consent && (
              <p id="consent-error" className="text-sm text-destructive">
                {state.fieldErrors.consent}
              </p>
            )}
          </div>

          {state.status !== "idle" && state.message && (
            <p
              role="status"
              className={
                state.status === "success"
                  ? "rounded-lg bg-turquoise-light p-4 text-sm text-turquoise-dark"
                  : "rounded-lg bg-red-50 p-4 text-sm text-destructive"
              }
            >
              {state.message}
            </p>
          )}

          <SubmitButton />
        </motion.form>
      </Container>
    </section>
  );
}
