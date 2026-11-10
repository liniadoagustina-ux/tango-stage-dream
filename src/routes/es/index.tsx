import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/es/")({
  staticData: { sitemap: true },
  head: () => pageSEO("/es", "Luizaga Brothers — Tango argentino, danza aérea y teatro físico", "Luizaga Brothers: Leonardo y Edgar Luizaga funden el tango argentino con la danza aérea y el teatro físico. Presentan La Muerte del Ángel."),
  component: EsIndex,
});

function EsIndex() {
  return <HomePage lang="es" />;
}
