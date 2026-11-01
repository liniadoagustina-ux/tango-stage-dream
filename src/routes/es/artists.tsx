import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArtistsPage } from "@/components/pages/ArtistsPage";

export const Route = createFileRoute("/es/artists")({
  staticData: { sitemap: true },
  head: () => pageSEO("/es/artists", "El elenco — Luizaga Brothers", "El elenco de La Muerte del Ángel: campeones mundiales de tango, artistas aéreos y una orquesta en vivo, bajo la dirección de Leonardo y Edgar Luizaga."),
  component: () => <ArtistsPage lang="es" />,
});
