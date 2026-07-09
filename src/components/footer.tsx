import { Facebook, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2a2b] py-14 text-white/80">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold text-white">
              Limn<span className="text-turquoise-light">Group</span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed">
              Limpieza profesional y cercana en {siteConfig.location}.
            </p>
          </div>

          <nav aria-label="Contacto" className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-4" aria-hidden />
              {siteConfig.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" aria-hidden />
              {siteConfig.location}
            </span>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white">Síguenos</span>
            <div className="flex gap-3">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LimnGroup en Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="size-5" aria-hidden />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir a LimnGroup por WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <MessageCircle className="size-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} LimnGroup. Todos los derechos reservados.</p>
          <Link href="/privacidad" className="underline-offset-4 hover:underline hover:text-white">
            Política de privacidad
          </Link>
        </div>
      </Container>
    </footer>
  );
}
