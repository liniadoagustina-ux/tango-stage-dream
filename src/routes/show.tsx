import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ShowPage } from "@/components/pages/ShowPage";

export const Route = createFileRoute("/show")({
  staticData: { sitemap: true },
  head: () => pageSEO("/show", "La Muerte del Ángel | Luizaga Brothers", "La Muerte del Ángel by Luizaga Brothers: the myth of Charon told through Argentine tango, folklore, aerial dance and a live band."),
  component: ShowPage,
});
