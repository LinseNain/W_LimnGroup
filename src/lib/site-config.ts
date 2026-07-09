/**
 * Datos centrales del sitio. Sustituye los valores marcados como
 * placeholder antes de publicar la web.
 */
export const siteConfig = {
  name: "LimnGroup",
  ownerName: "Nombre Apellido", // TODO: nombre real del titular (persona física)
  location: "El Casar de Guadalajara, España",
  domain: "limngroup.es", // TODO: dominio real
  email: "limngroup@limngroup.es", // TODO: email real
  whatsappNumber: "34600000000", // TODO: número real en formato internacional sin '+'
  whatsappMessage: "Hola, me gustaría pedir información sobre vuestros servicios de limpieza.",
  facebookUrl: "https://www.facebook.com/limngroup", // TODO: URL real de la página
  url: "https://limngroup.es", // TODO: URL real de producción
} as const;

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
