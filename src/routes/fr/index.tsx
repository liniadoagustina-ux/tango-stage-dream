import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/fr/")({
  staticData: { sitemap: true },
  head: () => pageSEO("/fr", "Luizaga Brothers — Tango argentin, danse aérienne et théâtre physique", "Luizaga Brothers : Leonardo et Edgar Luizaga fondent le tango argentin, la danse aérienne et le théâtre physique. Ils présentent Tango – La Muerte del Ángel."),
  component: () => <HomePage lang="fr" />,
});