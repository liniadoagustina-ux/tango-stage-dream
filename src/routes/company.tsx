import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/pages/CompanyPage";

export const Route = createFileRoute("/company")({
  staticData: { sitemap: true },
  head: () => pageSEO("/company", "The Company — Luizaga Brothers", "Luizaga Brothers: Leonardo and Edgar Luizaga, Argentine choreographers from Zárate who fuse tango, aerial performance and physical theatre."),
  component: CompanyPage,
});
