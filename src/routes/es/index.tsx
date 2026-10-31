import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/es/")({
  staticData: { sitemap: true },
  head: () => pageSEO("/es", "Luizaga Brothers — Tango argentino, danza aérea y teatro físico", "Luizaga Brothers: tango argentino, danza aérea y teatro físico de Leonardo y Edgar Luizaga. Presentan Tango – La Muerte del Ángel."),
  component: EsIndex,
});

function EsIndex() {
  return <HomePage lang="es" />;
}
