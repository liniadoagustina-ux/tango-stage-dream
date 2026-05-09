import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "The Company — Luizaga Brothers" },
      { name: "description", content: "Luizaga Brothers Production — history, mission, and global reach of the Argentine stage company." },
      { property: "og:title", content: "The Company — Luizaga Brothers" },
      { property: "og:description", content: "An Argentine stage company touring across Europe, Asia and the Americas." },
    ],
  }),
  component: CompanyPage,
});

const milestones = [
  { year: "Internacional Debute at 17", text: "Their creations have been presented across Europe, Asia, and the Americas" },
  { year: "Today", text: "Luizaga Brothers continue to redefine Argentine performance traditions, transforming them into a contemporary and globally resonant artistic language." },
];

const reach = [
  "United Kingdom", "Spain", "France", "Italy",
  "Japan", "China", "South Korea", "United Arab Emirates",
  "United States", "Argentina",
];

export function CompanyPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.32_0.16_25/0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-6">The Company</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              An Argentine language,<br/>
              <span className="italic text-primary-glow">written across continents.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-foreground/90">
          <Reveal>
            <p>
              Their work is defined by a distinctive fusion of Argentine tango, aerial performance
              and physical theatre — a refined multidisciplinary language that bridges tradition
              and contemporary expression.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif italic text-2xl text-foreground/85 border-l-2 border-primary pl-6">
              We carry the emotional and cultural resonance of Argentina into a global contemporary
              context, shaping a performative language that is fluid, hybrid and evolving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-curtain">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl mb-16">Trajectory</h2>
          </Reveal>
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 border-t border-border/60 pt-8">
                  <div className="font-serif text-2xl md:text-3xl text-primary-glow">{m.year}</div>
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-4">Global Reach</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl md:text-5xl mb-16 max-w-3xl">
              Their creations have been presented across Europe, Asia and the Americas
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/60">
            {reach.map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <div className="bg-background p-6 md:p-8">
                  <p className="font-serif text-xl md:text-2xl">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
