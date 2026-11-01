import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/pages/CompanyPage";

export const Route = createFileRoute("/fr/company")({
  staticData: { sitemap: true },
  head: () => pageSEO("/fr/company", "La compagnie — Luizaga Brothers", "Leonardo et Edgar Luizaga, chorégraphes et directeurs argentins de Zárate, réunissent tango, danse aérienne et théâtre physique."),
  component: () => <CompanyPage lang="fr" />,
});