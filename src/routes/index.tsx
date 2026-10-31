import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => pageSEO("/", "Luizaga Brothers — Argentine Tango, Aerial & Theatre", "Luizaga Brothers: Argentine tango, aerial performance and physical theatre by Leonardo and Edgar Luizaga. Now touring Tango – La Muerte del Ángel."),
  component: Index,
});

function Index() {
  return <HomePage lang="en" />;
}
