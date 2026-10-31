import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArtistsPage } from "@/components/pages/ArtistsPage";

export const Route = createFileRoute("/es/artists")({
  staticData: { sitemap: true },
  head: () => pageSEO("/es/artists", "Artists — Luizaga Brothers", "The cast of La Muerte del Ángel: world tango champions, aerialists and a live tango band, directed by Leonardo and Edgar Luizaga."),
  component: ArtistsPage,
});
