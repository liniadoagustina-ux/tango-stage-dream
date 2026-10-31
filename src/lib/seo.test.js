import { describe, test, expect } from "bun:test";
import { pageSEO, performingGroup, SITE_URL } from "./seo";
import { sitemapXML } from "./sitemap";

describe("Official company search identity", () => {
  test("canonical URLs use the specified company domain for each page", () => {
    for (const path of ["/", "/show", "/company", "/artists"]) {
      expect(pageSEO(path, "Title", "Description").links[0]?.href).toBe(`https://luizagabrothers.com${path}`);
    }
  });
  test("company founders remain Leonardo and Edgar Luizaga", () => {
    expect(performingGroup.founder.map((founder) => founder.name)).toEqual(["Leonardo Luizaga", "Edgar Luizaga"]);
  });
  test("company founding location is Zárate, Argentina", () => {
    expect(performingGroup.foundingLocation.name).toBe("Zárate, Argentina");
  });
  test("booking email is the specified contact", () => {
    expect(performingGroup.email).toBe("luizagabros@gmail.com");
  });
  test("sitemap includes only the four supplied URLs without synthetic dates", () => {
    const xml = sitemapXML(SITE_URL, ["/", "/show", "/company", "/artists"].map(path => ({ path })));
    expect([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])).toEqual([
      "https://luizagabrothers.com/", "https://luizagabrothers.com/show", "https://luizagabrothers.com/company", "https://luizagabrothers.com/artists",
    ]);
    expect(xml.includes("<lastmod>")).toBe(false);
  });
});
