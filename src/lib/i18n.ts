export type Lang = "en" | "es";

export const LANG_STORAGE_KEY = "lb-lang";

export function langFromPath(pathname: string): Lang {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function englishPath(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

export function pathForLang(pathname: string, lang: Lang): string {
  const en = englishPath(pathname);
  return lang === "es" ? (en === "/" ? "/es" : `/es${en}`) : en;
}

export const navItems = {
  en: [
    { to: "/", label: "Home" },
    { to: "/show", label: "The Show" },
    { to: "/company", label: "The Company" },
    { to: "/artists", label: "Artists" },
  ],
  es: [
    { to: "/es", label: "Inicio" },
    { to: "/es/show", label: "El show" },
    { to: "/es/company", label: "La compañía" },
    { to: "/es/artists", label: "Artistas" },
  ],
} as const;

export const bookingLabel: Record<Lang, string> = {
  en: "Booking",
  es: "Contrataciones",
};

export const footerCopy = {
  en: {
    tagline:
      "Argentine tango, aerial performance and physical theatre. From Zárate to stages in Europe, Asia and the Americas.",
    explore: "Explore",
    bookings: "Bookings",
    rights: "All rights reserved.",
  },
  es: {
    tagline:
      "Tango argentino, danza aérea y teatro físico. De Zárate a escenarios de Europa, Asia y América.",
    explore: "Explorar",
    bookings: "Contrataciones",
    rights: "Todos los derechos reservados.",
  },
} as const;

export const heroCopy = {
  en: {
    titleA: "Where the embrace",
    titleB: "takes flight.",
    text: "Leonardo and Edgar Luizaga fuse Argentine tango, aerial performance and physical theatre.",
    primary: "Discover the show",
    primaryTo: "/show",
    secondary: "Watch the trailer",
  },
  es: {
    titleA: "Donde el abrazo",
    titleB: "levanta vuelo.",
    text: "Leonardo y Edgar Luizaga fusionan tango argentino, danza aérea y teatro físico.",
    primary: "Conocé el show",
    primaryTo: "/es/show",
    secondary: "Ver el trailer",
  },
} as const;

export const homeCopy = {
  en: {
    manifesto:
      "Tango is their starting point: taken apart and rebuilt with circus, physical theatre and visual design.",
    pillars: [
      { title: "Tango", text: "The embrace at the heart of every scene." },
      { title: "Aerial", text: "Straps, hoop and harness, flying over a live band." },
      { title: "Theatre", text: "A story told without words, from a barrio birthday to the edge of the underworld." },
    ],
    showTitle: "Tango – La Muerte del Ángel",
    showText: "The myth of Charon, told through tango, folklore, aerial dance and a live band. 70 minutes.",
    showCta: "Discover the show",
    showTo: "/show",
    castHeading: "The cast",
    castLink: "See all artists",
    castLinkTo: "/artists",
    castRoles: ["Gabino", "Charon", "Co-choreographers", "Griseta & Osvaldo"],
  },
  es: {
    manifesto:
      "El tango es su punto de partida: lo desarman y lo vuelven a armar con circo, teatro físico y diseño visual.",
    pillars: [
      { title: "Tango", text: "El abrazo, en el centro de cada escena." },
      { title: "Aéreo", text: "Straps, aro y arnés, volando sobre una banda en vivo." },
      { title: "Teatro", text: "Una historia contada sin palabras, desde un cumpleaños de barrio hasta el borde del inframundo." },
    ],
    showTitle: "Tango – La Muerte del Ángel",
    showText: "El mito de Caronte contado con tango, folklore, danza aérea y una banda en vivo. 70 minutos.",
    showCta: "Conocé el show",
    showTo: "/es/show",
    castHeading: "El elenco",
    castLink: "Ver todos los artistas",
    castLinkTo: "/es/artists",
    castRoles: ["Gabino", "Caronte", "Coreógrafos asociados", "Griseta y Osvaldo"],
  },
} as const;
