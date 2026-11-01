import { describe, test, expect } from "bun:test";
import { langFromPath, pathForLang, englishPath, navItems, homeCopy, heroCopy, footerCopy, showCopyEs, showCopyFr, preferredLanguage } from "./i18n";
import { pageSEO } from "./seo";

describe("Language routing", () => {
  test("French aerial choreography is credited to Edgar Luizaga", () => {
    expect(showCopyFr.credits.find(credit => credit.role === "Chorégraphie aérienne")?.name).toBe("Edgar Luizaga");
  });
  test("French production assistance is credited to Lucía Ohyama", () => {
    expect(showCopyFr.credits.find(credit => credit.role === "Assistante de production")?.name).toBe("Lucía Ohyama");
  });
  test("Spanish aerial choreography is credited to Edgar Luizaga", () => {
    expect(showCopyEs.credits.find(credit => credit.role === "Coreografía aérea")?.name).toBe("Edgar Luizaga");
  });
  test("Spanish production assistance is credited to Lucía Ohyama", () => {
    expect(showCopyEs.credits.find(credit => credit.role === "Asistencia de producción")?.name).toBe("Lucía Ohyama");
  });
  test("Spanish pages live under /es and English paths stay unchanged", () => {
    expect(pathForLang("/", "es")).toBe("/es");
    expect(pathForLang("/show", "es")).toBe("/es/show");
    expect(pathForLang("/company", "es")).toBe("/es/company");
    expect(pathForLang("/artists", "es")).toBe("/es/artists");
    expect(pathForLang("/es", "en")).toBe("/");
    expect(pathForLang("/es/show", "en")).toBe("/show");
  });
  test("language is detected from the path prefix", () => {
    expect(langFromPath("/es")).toBe("es");
    expect(langFromPath("/es/artists")).toBe("es");
    expect(langFromPath("/")).toBe("en");
    expect(langFromPath("/show")).toBe("en");
  });
  test("every page carries en, es, fr and x-default hreflang links", () => {
    const head = pageSEO("/es/show", "T", "D");
    const alternates = head.links.filter((l) => l.rel === "alternate");
    expect(alternates).toEqual([
      { rel: "alternate", hreflang: "en", href: "https://luizagabrothers.com/show" },
      { rel: "alternate", hreflang: "es", href: "https://luizagabrothers.com/es/show" },
      { rel: "alternate", hreflang: "fr", href: "https://luizagabrothers.com/fr/show" },
      { rel: "alternate", hreflang: "x-default", href: "https://luizagabrothers.com/show" },
    ]);
    expect(head.links[0]).toEqual({ rel: "canonical", href: "https://luizagabrothers.com/es/show" });
  });
  test("Spanish nav and home copy use the supplied texts", () => {
    expect(navItems.es.map((i) => i.label)).toEqual(["Inicio", "El show", "La compañía", "Artistas"]);
    expect(homeCopy.es.castHeading).toBe("El elenco");
    expect(homeCopy.es.castRoles).toEqual(["Gabino", "Caronte", "Coreógrafos asociados", "Griseta y Osvaldo"]);
  });
  test("Spanish hero uses the supplied title, line and buttons", () => {
    expect(`${heroCopy.es.titleA} ${heroCopy.es.titleB}`).toBe("Donde el tango alza vuelo.");
    expect(heroCopy.es.text).toBe(
      "Leonardo y Edgar Luizaga funden el tango argentino con la danza aérea y el teatro físico en un lenguaje escénico propio.",
    );
    expect(heroCopy.es.primary).toBe("Conocé el show");
    expect(heroCopy.es.secondary).toBe("Ver el trailer");
  });
  test("Spanish home line under the hero and the three cards use the supplied texts", () => {
    expect(homeCopy.es.manifesto).toBe(
      "El tango es su punto de partida: un lenguaje vivo que deconstruyen y reconfiguran en diálogo con el circo, el teatro físico y el diseño visual.",
    );
    expect(homeCopy.es.pillars.map((p) => p.text)).toEqual([
      "La pareja, origen y centro de cada escena.",
      "Straps, aro y arnés: cuerpos suspendidos sobre la orquesta en vivo.",
      "Una historia narrada sin palabras, desde una celebración de barrio hasta los umbrales del inframundo.",
    ]);
  });
  test("Spanish production card drops the duration and keeps the supplied line", () => {
    expect(homeCopy.es.showText).toBe(
      "El mito de Caronte, narrado a través del tango, el folklore y la danza aérea, con orquesta en vivo.",
    );
    expect(homeCopy.es.showText).not.toContain("70 minutos");
    expect(homeCopy.es.showCta).toBe("Conocé el show");
    expect(homeCopy.es.castLink).toBe("Conocé a los artistas");
  });
  test("Spanish footer line uses the supplied text", () => {
    expect(footerCopy.es.tagline).toBe(
      "Tango argentino, danza aérea y teatro físico. De Zárate a los escenarios de Europa, Asia y América.",
    );
  });
  test("englishPath round-trips with pathForLang", () => {
    for (const p of ["/", "/show", "/company", "/artists"]) {
      expect(englishPath(pathForLang(p, "es"))).toBe(p);
    }
  });
  test("French URLs preserve the matching page across all three languages", () => {
    for (const page of ["/", "/show", "/company", "/artists"]) {
      const french = page === "/" ? "/fr" : `/fr${page}`;
      expect(pathForLang(page, "fr")).toBe(french);
      expect(langFromPath(french)).toBe("fr");
      expect(englishPath(french)).toBe(page);
      expect(pathForLang(french, "en")).toBe(page);
      expect(pathForLang(french, "es")).toBe(page === "/" ? "/es" : `/es${page}`);
    }
  });
  test("a French browser chooses French on the first visit", () => {
    expect(preferredLanguage(null, "fr-FR")).toBe("fr");
    expect(preferredLanguage(null, "fr-CA")).toBe("fr");
    expect(preferredLanguage(null, "es-AR")).toBe("es");
    expect(preferredLanguage(null, "en-US")).toBe("en");
  });
  test("a saved visitor choice overrides the browser language", () => {
    expect(preferredLanguage("fr", "en-US")).toBe("fr");
    expect(preferredLanguage("en", "fr-FR")).toBe("en");
    expect(preferredLanguage("es", "fr-FR")).toBe("es");
  });
  test("French pages expose same-page language alternates and their own canonical", () => {
    for (const path of ["/fr", "/fr/show", "/fr/company", "/fr/artists"]) {
      const head = pageSEO(path, "Title", "Description");
      expect(head.links[0].href).toBe(`https://luizagabrothers.com${path}`);
      expect(head.links.find(link => link.hreflang === "fr")?.href).toBe(`https://luizagabrothers.com${path}`);
    }
  });
});
