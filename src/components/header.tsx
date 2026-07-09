"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site-config";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <a
          href="#inicio"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          Limn<span className="text-turquoise">Group</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-turquoise"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-black/5 bg-background md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="size-4" />
              Escríbenos por WhatsApp
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
