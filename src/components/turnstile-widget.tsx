"use client";

import { useEffect, useRef, useState, useId } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function TurnstileWidget({
  onVerify,
}: {
  onVerify: (token: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.turnstile || !siteKey) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => onVerify(token),
      "expired-callback": () => onVerify(""),
      "error-callback": () => onVerify(""),
      theme: "light",
    });

    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded]);

  if (!siteKey) {
    return (
      <p className="rounded-lg border border-dashed border-border bg-muted p-3 text-xs text-muted-foreground">
        Verificación anti-spam no configurada (falta{" "}
        <code>NEXT_PUBLIC_TURNSTILE_SITE_KEY</code>).
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
        onLoad={() => setScriptLoaded(true)}
      />
      <div id={`turnstile-${containerId}`} ref={containerRef} />
    </>
  );
}
