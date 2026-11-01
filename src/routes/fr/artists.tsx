import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArtistsPage } from "@/components/pages/ArtistsPage";

export const Route = createFileRoute("/fr/artists")({
  staticData: { sitemap: true },
  head: () => pageSEO("/fr/artists", "Les artistes — Luizaga Brothers", "Découvrez les danseurs, musiciens et créateurs de Tango – La Muerte del Ángel, leurs rôles et leurs parcours."),
  component: () => <ArtistsPage lang="fr" />,
});