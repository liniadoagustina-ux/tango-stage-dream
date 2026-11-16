import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ShowPage } from "@/components/pages/ShowPage";

export const Route = createFileRoute("/fr/show")({
  staticData: { sitemap: true },
  head: () => pageSEO("/fr/show", "Le Spectacle — La Muerte del Ángel", "La Muerte del Ángel, de Luizaga Brothers : le mythe de Charon raconté à travers le tango argentin, le folklore et la danse aérienne, avec un orchestre sur scène."),
  component: () => <ShowPage lang="fr" />,
});