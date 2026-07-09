# LimnGroup

Web de LimnGroup, servicio de limpieza profesional en El Casar de Guadalajara. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion. Formulario de contacto sin base de datos: Server Action con Zod, Resend y Cloudflare Turnstile.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # rellena las claves
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Antes de publicar

Estos datos son placeholders y deben sustituirse:

- **`src/lib/site-config.ts`** — nombre del titular, email, dominio, número de WhatsApp, URL de Facebook y URL de producción.
- **`.env.local`** — `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (requiere dominio verificado en Resend), `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`.
- Imágenes de `public/placeholders/` — sustituir por fotografías reales del servicio.
- `src/app/layout.tsx` — imagen Open Graph (`/og-image.jpg`, aún no incluida).

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — sirve el build de producción
- `npm run lint` — ESLint

## Estructura

- `src/app/page.tsx` — landing (una sola página, scroll)
- `src/app/privacidad/page.tsx` — política de privacidad (RGPD)
- `src/app/actions/contact.ts` — Server Action del formulario de contacto
- `src/components/` — secciones de la landing y componentes `ui/` (shadcn-style)
- `src/lib/site-config.ts` — datos de contacto centralizados

Sin base de datos, sin analítica de terceros, sin banner de cookies (no hay cookies de terceros).
