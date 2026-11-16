import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ShowPage } from "@/components/pages/ShowPage";

export const Route = createFileRoute("/es/show")({
  staticData: { sitemap: true },
  head: () => pageSEO("/es/show", "La Muerte del Ángel | Luizaga Brothers", "La Muerte del Ángel, de Luizaga Brothers: el mito de Caronte narrado a través del tango argentino, el folklore y la danza aérea, con orquesta en vivo."),
  component: () => <ShowPage lang="es" />,
});
