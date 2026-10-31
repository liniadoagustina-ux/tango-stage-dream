export const SITE_URL = "https://luizagabrothers.com";

export const performingGroup = {
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  name: "Luizaga Brothers",
  founder: [
    { "@type": "Person", name: "Leonardo Luizaga" },
    { "@type": "Person", name: "Edgar Luizaga" },
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Zárate, Argentina",
    address: { "@type": "PostalAddress", addressLocality: "Zárate", addressCountry: "AR" },
  },
  email: "luizagabros@gmail.com",
  url: SITE_URL,
};

export function pageSEO(path: string, title: string, description: string) {
  const url = new URL(path, SITE_URL).href;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(performingGroup) }],
  };
}