"use server";

import { Resend } from "resend";
import { z } from "zod";

import { siteConfig } from "@/lib/site-config";

const serviceLabels: Record<string, string> = {
  hogar: "Limpieza del hogar",
  "colchones-sofas": "Colchones y sofás",
  tapiceria: "Tapicería",
  coches: "Interior de coches",
  edredones: "Edredones",
  otro: "Otro / no lo sé aún",
};

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Introduce tu nombre completo.")
    .max(100, "El nombre es demasiado largo."),
  email: z.string().trim().min(1, "Introduce tu email.").email("Introduce un email válido."),
  phone: z
    .string()
    .trim()
    .min(9, "Introduce un teléfono válido.")
    .max(20, "Introduce un teléfono válido.")
    .regex(/^[0-9+\s()-]+$/, "Introduce un teléfono válido."),
  service: z.enum(
    Object.keys(serviceLabels) as [string, ...string[]]
  ),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
    .max(2000, "El mensaje es demasiado largo."),
  consent: z.literal("on"),
  turnstileToken: z.string().min(1),
});

const friendlyFallback: Record<string, string> = {
  service: "Selecciona un tipo de servicio.",
  consent: "Debes aceptar la política de privacidad.",
  turnstileToken: "Verificación de seguridad requerida. Vuelve a intentarlo.",
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY no está configurada.");
    return false;
  }

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      }
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (error) {
    console.error("Error verificando Turnstile:", error);
    return false;
  }
}

const GENERIC_ERROR_MESSAGE =
  "No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde o escríbenos por WhatsApp.";

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
    consent: formData.get("consent"),
    turnstileToken: formData.get("cf-turnstile-response"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (!key || fieldErrors[key]) continue;
      fieldErrors[key] = friendlyFallback[key] ?? issue.message;
    }
    return {
      status: "error",
      message: "Revisa los campos marcados e inténtalo de nuevo.",
      fieldErrors,
    };
  }

  const { name, email, phone, service, message, turnstileToken } = parsed.data;

  const humanVerified = await verifyTurnstile(turnstileToken);
  if (!humanVerified) {
    return {
      status: "error",
      message:
        "No hemos podido verificar que eres una persona. Recarga la página e inténtalo de nuevo.",
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }

  const resend = new Resend(resendApiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "LimnGroup <onboarding@resend.dev>";
  const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const serviceLabel = serviceLabels[service] ?? service;

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Nueva consulta web: ${serviceLabel} — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone}`,
        `Servicio: ${serviceLabel}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Hemos recibido tu mensaje — LimnGroup",
      text: [
        `Hola ${name},`,
        "",
        `Gracias por escribirnos. Hemos recibido tu consulta sobre "${serviceLabel}" y te responderemos en menos de 24 horas.`,
        "",
        "Si es urgente, también puedes escribirnos por WhatsApp.",
        "",
        "Un saludo,",
        "Equipo LimnGroup",
      ].join("\n"),
    });
  } catch (error) {
    console.error("Error enviando email con Resend:", error);
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }

  return {
    status: "success",
    message: "¡Gracias! Hemos recibido tu mensaje y te responderemos muy pronto.",
  };
}
