import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/pages/CompanyPage";

export const Route = createFileRoute("/es/company")({
  staticData: { sitemap: true },
  head: () => pageSEO("/es/company", "La Compañía — Luizaga Brothers", "Luizaga Brothers: Leonardo y Edgar Luizaga, coreógrafos y directores argentinos nacidos en Zárate, fusionan tango, danza aérea y teatro físico."),
  component: () => <CompanyPage lang="es" />,
});
