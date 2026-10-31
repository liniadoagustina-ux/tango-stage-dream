import { describe, test, expect } from "bun:test";
import { langFromPath, pathForLang, englishPath, navItems, homeCopy } from "./i18n";
import { pageSEO } from "./seo";

describe("Language routing", () => {
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
  test("every page carries en, es and x-default hreflang links", () => {
    const head = pageSEO("/es/show", "T", "D");
    const alternates = head.links.filter((l) => l.rel === "alternate");
    expect(alternates).toEqual([
      { rel: "alternate", hrefLang: "en", href: "https://luizagabrothers.com/show" },
      { rel: "alternate", hrefLang: "es", href: "https://luizagabrothers.com/es/show" },
      { rel: "alternate", hrefLang: "x-default", href: "https://luizagabrothers.com/show" },
    ]);
    expect(head.links[0]).toEqual({ rel: "canonical", href: "https://luizagabrothers.com/es/show" });
  });
  test("Spanish nav and home copy use the supplied texts", () => {
    expect(navItems.es.map((i) => i.label)).toEqual(["Inicio", "El show", "La compañía", "Artistas"]);
    expect(homeCopy.es.castHeading).toBe("El elenco");
    expect(homeCopy.es.castRoles).toEqual(["Gabino", "Caronte", "Coreógrafos asociados", "Griseta y Osvaldo"]);
  });
  test("englishPath round-trips with pathForLang", () => {
    for (const p of ["/", "/show", "/company", "/artists"]) {
      expect(englishPath(pathForLang(p, "es"))).toBe(p);
    }
  });
});
