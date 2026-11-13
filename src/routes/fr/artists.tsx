import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArtistsPage } from "@/components/pages/ArtistsPage";

export const Route = createFileRoute("/fr/artists")({
  staticData: { sitemap: true },
  head: () => pageSEO("/fr/artists", "La Distribution — Luizaga Brothers", "La distribution de La Muerte del Ángel : champions du monde de tango, artistes aériens et un orchestre sur scène, sous la direction de Leonardo et Edgar Luizaga."),
  component: () => <ArtistsPage lang="fr" />,
});