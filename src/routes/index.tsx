import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { artists } from "@/data/artists";
import stage2 from "@/assets/stage/stage-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luizaga Brothers — Argentine Tango, Aerial & Theatre" },
      { name: "description", content: "An Argentine stage company fusing tango, aerial performance and physical theatre — touring internationally." },
      { property: "og:title", content: "Luizaga Brothers" },
      { property: "og:description", content: "Where the embrace takes flight." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Manifesto */}
      <section className="relative py-32 md:py-44 px-6 bg-curtain">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-6">A Manifesto</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-balance">
              Tango as a <span className="italic text-primary-glow">living language</span> —
              deconstructed, reconfigured, lifted into the air.
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-serif italic">
              We position our work at the convergence of dance, theatre and aerial movement.
              The body becomes both instrument and architecture.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-4">
          {[
            { title: "Tango", text: "The embrace, fragmented and rebuilt." },
            { title: "Aerial", text: "Suspension. Flight. Risk. The body free of the floor." },
            { title: "Theatre", text: "Atmosphere, dramaturgy and spatial composition." },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-border/60 bg-gradient-to-br from-card via-background to-card">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.35_0.18_25/0.4),transparent_70%)]" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-serif text-3xl mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Show teaser */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden bg-curtain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,oklch(0.32_0.16_25/0.5),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-5">Current Production</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-3xl">
              La Muerte<br/>
              <span className="italic text-primary-glow">del Ángel</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-xl text-lg text-foreground/85 leading-relaxed">
              An immersive evening of tango, aerial choreography and live music.
              Composed in seven movements. Performed across three continents.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <Link
              to="/show"
              className="mt-10 inline-flex items-center px-8 py-4 bg-gradient-red text-primary-foreground text-xs uppercase tracking-luxe rounded-sm shadow-red"
            >
              Enter the Show
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Artists strip */}
      <section className="py-24 md:py-32 px-6 bg-curtain">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-luxe text-primary-glow mb-3">The Ensemble</p>
                <h2 className="font-serif text-4xl md:text-5xl">Bodies that speak.</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/artists"
                className="text-xs uppercase tracking-luxe text-foreground/80 hover:text-primary-glow border-b border-foreground/30 pb-1"
              >
                All artists →
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artists.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link to="/artists" className="block group relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-serif text-lg leading-tight">{a.name}</p>
                    <p className="text-[10px] uppercase tracking-luxe text-muted-foreground mt-1">
                      {a.discipline}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
