import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ShowPage } from "@/components/pages/ShowPage";

export const Route = createFileRoute("/fr/show")({
  staticData: { sitemap: true },
  head: () => pageSEO("/fr/show", "Le spectacle — Tango – La Muerte del Ángel", "Découvrez Tango – La Muerte del Ángel : le mythe de Charon à travers le tango, la danse aérienne et un orchestre sur scène."),
  component: () => <ShowPage lang="fr" />,
});