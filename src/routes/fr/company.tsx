import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/pages/CompanyPage";

export const Route = createFileRoute("/fr/company")({
  staticData: { sitemap: true },
  head: () => pageSEO("/fr/company", "La Compagnie — Luizaga Brothers", "Luizaga Brothers : Leonardo et Edgar Luizaga, chorégraphes et metteurs en scène argentins nés à Zárate, unissent tango, danse aérienne et théâtre physique."),
  component: () => <CompanyPage lang="fr" />,
});